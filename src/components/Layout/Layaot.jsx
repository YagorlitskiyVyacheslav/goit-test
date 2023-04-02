import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: 32px 46px;
  overflow-x: hidden;
`;

export const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
