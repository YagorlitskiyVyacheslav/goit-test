import axios from "axios";
import { API_REST_URL, AXIOS_TIMEOUT } from "constants/config";
import { ERROR_STATUS } from "constants/error-status";

const axiosBaseConfig = {
  baseURL: API_REST_URL,
  timeout: AXIOS_TIMEOUT,
  headers: {
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
  },
  withCredentials: false,
};

export const api = axios.create(axiosBaseConfig);

// request handler
api.interceptors.request.use((request) => ({
  ...request,
  headers: { ...request.headers },
}));

// response handler
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject({
        response: {
          status: null,
          data: {},
          canceled: axios.isCancel(error),
        },
      });
    }

    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    if (!error.response) {
      return Promise.reject({});
    }

    const { status } = error.response;

    if (axios.isAxiosError(error) && status >= ERROR_STATUS.SERVER) {
      return Promise.reject({});
    }

    return Promise.reject(error);
  }
);
