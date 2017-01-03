import React, { Component } from 'react';
import Pad from './Pad';
import './../css/Board.css';

class Board extends Component {
  renderPads() {
    const pads = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    return pads.map((pad, index) => {
      return <Pad sound={this.props.sounds[index]} key={index}/>;
    });
  }

  render() {
    return (
      <div className="Board">
        {this.renderPads()}
      </div>
    );
  }
}

export default Board;
