import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { Provider } from "react-redux";
import store from "store";
import { theme } from "styling/theme";
import { GlobalStyle } from "styling/globalStyles";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
      <ToastContainer />
    </ThemeProvider>
  </Provider>
);
