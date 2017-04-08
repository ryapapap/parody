import React, { Component } from 'react';
import Model from './ThreeD';
import TextChanger from './text-changer';
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
        <TextChanger
          strings={[
            'A real human being',
            'Visionary',
            'Imaginative',
            'Inspirational',
            'Inventive',
            'Genius',
            'Enterprising',
            'Innovative',
            'Insightful',
            'Perceptive',
            'Creative',
            'Resourceful',
            'Humane',
            'Refined',
            'Educated',
            'Civilized',
            'Dignified',
            'Enlightened',
            'Bold',
            'Artistic',
          ]}
        />
        <button className="buy-btn">
          Buy Now
        </button>
      </div>
    );
  }
}

export default App;
