import React from "react";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import { Grommet } from "grommet";
import PageContent from "./PageContent";
import "./index.css";

const App = () => {
  return (
    <Grommet className='App' theme={theme}>
      <Router>
        <PageContent />
      </Router>
    </Grommet>
  );
};

export default App;
