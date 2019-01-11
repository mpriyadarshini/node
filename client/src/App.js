import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a href="http://secret-journey-85240.herokuapp.com/auth/google">Sign in with google</a>
        </header>
      </div>
    );
  }
}

export default App;
