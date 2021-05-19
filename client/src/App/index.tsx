import React from "react";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "../Routes";
import { Grommet } from "grommet";
import "./index.css";

const App = () => {
  return (
    <Grommet className='App' theme={theme}>
      <Router>
        <Routes />
      </Router>
    </Grommet>
  );
};

export default App;
