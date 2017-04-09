import React, { Component } from 'react';
import Media from 'react-media';
import Model from './ThreeD';
import TextChanger from './text-changer';
import BuyModal from './buy-modal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Media query={{ maxWidth: 1439 }}>
          {matches => matches ? (
            <div className="error-msg">
              This is a dignified product and it requires a quality screen
              with a resolution of at least 1440 pixels wide to view.
            </div>
          ) : (
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
              <BuyModal />
            </div>
          )}
        </Media>
      </div>
    );
  }
}

export default App;
