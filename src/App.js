import React from "react";
import styled from "styled-components";
const Weatherheader = styled.div`
  .app-header {
    font-family: Georgia, serif;
    font-size: 40px;
  }
`;

function App() {
  return (
    <div>
      <Weatherheader>
        <div className="app-header">Weather App</div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/components/WeatherLayout.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </Weatherheader>
    </div>
  );
}

export default App;
