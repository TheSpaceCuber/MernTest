import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>OneNUS</h1>
          <h2>All the NUS events that you'll need. Coming Soon.</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed and built using React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
