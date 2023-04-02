import React from "react";
import styled from "styled-components";
import { Spinner } from "./icons/Spinner";

const Wrapper = styled.div`
  width: 100%;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loader = ({ color }) => (
  <Wrapper>
    <Spinner size={40} color={color} />
  </Wrapper>
);
