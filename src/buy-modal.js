import React, { Component } from 'react';
import Modal from 'react-modal';
import './modal.css'

class App extends Component {
  state = {
    open: false,
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.state.open}
          onRequestClose={() => this.setState({ open: false })}
          contentLabel="Buy Modal"
        >
          <h1>Before you buy</h1>
          <div className="modal-content">
            <p>
              I made this site as a parody of people who act like they are a brand.
              I think that's a silly idea, so I wanted to poke fun at it and this
              is what I ended up doing.
            </p>
            <p>Furthermore, I'm not for sale</p>
          </div>

          <button
            className="buy-btn"
            onClick={() => this.setState({ open: false })}
          >
            Cancel
          </button>
        </Modal>
        <button 
          className="buy-btn"
          onClick={() => this.setState({ open: true })}
        >
          Buy Now
        </button>
      </div>
    );
  }
}

export default App;
