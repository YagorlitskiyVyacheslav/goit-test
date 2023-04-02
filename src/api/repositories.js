import { api } from "./instance";

const repositories = (params) => api.get(`search/repositories`, { params });

export const searchApi = {
  repositories,
};
