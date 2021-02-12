import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { Editor } from "./pages/editor";

const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing : border-box;
  }
  `;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Editor />
  </React.StrictMode>,
  document.getElementById("root")
);
