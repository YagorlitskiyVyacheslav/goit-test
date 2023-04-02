import React from "react";
import { Input } from "../Input";

export const FormikInput = ({ formik, onChange, ...props }) => {
  const field = formik.getFieldProps(props.name);
  const { error, touched } = formik.getFieldMeta(props.name);

  const handlerChange = (e) => {
    field.onChange(e);

    if (onChange) {
      onChange(e);
    }

    if (error) return;
    formik.setFieldError(props.name, "");
  };

  return (
    <Input
      {...props}
      {...field}
      onChange={handlerChange}
      error={!touched || !error ? "" : error}
    />
  );
};
