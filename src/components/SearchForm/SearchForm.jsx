import { FormikInput } from "../common/inputs/FormikInput";
import React, { useMemo } from "react";
import { useFormik } from "formik";
import debounce from "lodash.debounce";
import { useRedux } from "hooks/use-redux";
import { setQuery } from "store/repositories";
import * as S from "./styled";

export const SearchForm = () => {
  const { dispatch } = useRedux();
  const formik = useFormik({
    initialValues: { q: "" },
    onSubmit: (formData) => {
      dispatch(setQuery(formData.q));
    },
  });

  const { handleSubmit } = formik;

  const onChangeHandler = useMemo(() => {
    return debounce(handleSubmit, 1000);
  }, [handleSubmit]);

  return (
    <S.Form onSubmit={handleSubmit}>
      <FormikInput
        formik={formik}
        onChange={onChangeHandler}
        name="q"
        placeholder="Search"
      />
    </S.Form>
  );
};
