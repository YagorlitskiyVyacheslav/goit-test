import React from "react";
import * as S from "./styled";

export const Input = ({ type = "text", error, className, ...props }) => {
  return (
    <S.InputContainer className={className}>
      <S.InputCont error={error}>
        <S.Input type={type} {...props} />
      </S.InputCont>
    </S.InputContainer>
  );
};
