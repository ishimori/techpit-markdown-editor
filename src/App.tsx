import React from "react";
import "./App.css";
import styled from "styled-components";

function App() {
  const Header = styled.h1`
    color: red;
  `;
  const Main = <Header>markdown editor</Header>;

  return (
    <div className="App">
      <p>Hello React</p>
      {Main}
    </div>
  );
}

export default App;
