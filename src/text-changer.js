import React, { Component } from 'react';

function randNum(max) {
  return Math.floor(Math.random() * max);
}

class TextChanger extends Component {
  state = {
    selected: 0,
  }

  changeText = () => {
    let next = randNum(this.props.strings.length);
    while (next === this.state.selected) {
      next = randNum(this.props.strings.length);
    }

    this.setState({
      selected: next,
    });
  }

  componentWillMount() {
    this.timer = setInterval(this.changeText, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <p className="App-intro">
        {this.props.strings[this.state.selected]}
      </p>
    );
  }
}

export default TextChanger;
