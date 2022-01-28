import "./styles.css";
//import React from "react";
import React from 'react';
import styled from "styled-components";
import CartApp from "./containers/CartApp"
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CartApp />
    </div>
  );
}
