import React from "react";
import { Spinner } from "../icons/Spinner";
import * as S from "./styled";

export const Loader = ({ color }) => (
  <S.Wrapper>
    <Spinner size={40} color={color} />
  </S.Wrapper>
);
