import React, { Component } from 'react';
import './../css/Pad.css';


class Pad extends Component {
  static defaultProps = {
    sound: {},
  }

  playSound = () => {
    const { sound } = this.props;
    const PLAYING = 1;

    if (sound.play) {
      if (sound.playState === PLAYING) {
        sound.stop();
      } else {
        sound.play();
      }
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
