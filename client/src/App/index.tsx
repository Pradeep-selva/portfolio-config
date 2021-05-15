import React from "react";
import "./index.css";
import { Grommet } from "grommet";

function App() {
  return (
    <Grommet className='App' plain>
      <header className='App-header'>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </Grommet>
  );
}

export default App;
