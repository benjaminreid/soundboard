import React, { Component } from 'react';
import Pad from './Pad';
import './../css/Board.css';

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <Pad/>
        <Pad/>
        <Pad/>
        <Pad/>
        <Pad/>
        <Pad/>
        <Pad/>
        <Pad/>
        <Pad/>
      </div>
    );
  }
}

export default Board;
