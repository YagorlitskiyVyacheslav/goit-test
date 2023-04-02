import axios from "axios";
import { ERROR_STATUS } from "constants/error-status";
import { toast } from "react-toastify";

export function handleErrors({ e, formik }) {
  if (formik) {
    formik.setSubmitting(false);
  }

  if (!axios.isAxiosError(e) || !e.response) return;

  const { status, data } = e.response;
  const { message } = data;

  if (axios.isCancel(e)) {
    return;
  }

  if (
    formik &&
    status === ERROR_STATUS.VALIDATION &&
    typeof message === "object"
  ) {
    formik.setErrors(message);
    return;
  }

  toast.error(message);
}
