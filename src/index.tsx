import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { Editor } from "./pages/editor";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { History } from "pages/history";
const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing : border-box;
  }
  `;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Route exact path="/editor">
        <Editor />
      </Route>
      <Route exact path="/history">
        <History />
      </Route>
      <Redirect to="/editor" path="*" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
