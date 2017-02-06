import React, { Component } from 'react';
import Model from './ThreeD';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <Model />
        <div className="intro-text">
          Introducing
        </div>
        <div className="signature">
          Ryan Patterson
        </div>
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
