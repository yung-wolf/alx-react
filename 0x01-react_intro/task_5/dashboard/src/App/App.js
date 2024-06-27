import React from 'react';
import './App.css';
import { getFooterCopy } from '../utils/utils';
// import MyLogo from '../assets/Holberton-logo.jpg';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <img src={MyLogo} className="App-logo" alt="logo" /> */}
        <div className="App-logo"></div>
        <h1>
          School dashboard
        </h1>
      </div>
      <hr />

      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" />
        <button>OK</button>
      </div>

      <div className="App-footer">
        <hr />
        <p>
          {getFooterCopy(true)}
        </p>
      </div>

    </div>
  );
}

export default App;
