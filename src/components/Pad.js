import React, { Component } from 'react';
import './../css/Pad.css';

class Pad extends Component {
  static defaultProps = {
    sound: {},
  }

  playSound = () => {
    if (this.props.sound.play) {
      this.props.sound.play();
    }
  }

  render() {
    return (
      <div className="Pad">
        <div className="Pad__inner" onClick={this.playSound}>
          {this.props.sound.id}
        </div>
      </div>
    );
  }
}

export default Pad;
