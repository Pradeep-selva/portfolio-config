import React from "react";
import "./index.css";
import theme from "./theme";
import { Login } from "../Pages";
import { Grommet } from "grommet";

const App = () => {
  return (
    <Grommet className='App' theme={theme}>
      <Login />
    </Grommet>
  );
};

export default App;
