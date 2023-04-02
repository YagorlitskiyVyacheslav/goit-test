import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    width: 100%;
  }

  body {
    width: 100%;
    padding-right: 0px !important;
    font-family: "Open Sans";
    background-color: ${({ theme }) => theme.secondary200};
    color: ${({ theme }) => theme.primary100};
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: 400;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  div {
    line-height: 1;
  }

  br {
    line-height: 1.5;
  }

  a {
    color: inherit;
  }

  img {
    display: block;
    width: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  input,
  button,
  select,
  label {
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  label {
    cursor: pointer;
  }
`;
