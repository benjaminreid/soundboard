import React, { Component } from 'react';
import Board from './components/Board';
import { soundManager } from './../node_modules/soundmanager2/script/soundmanager2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sounds: [],
    };
  }

  componentWillMount() {
    soundManager.setup({
      onready: () => {
        const intro = soundManager.createSound({
          id: 'intro',
          url: `${process.env.PUBLIC_URL}/audio/intro.m4a`,
        });

        const outro = soundManager.createSound({
          id: 'outro',
          url: `${process.env.PUBLIC_URL}/audio/outro.m4a`,
        });

        this.setState({
          sounds: [intro, outro],
        });
      },
    });
  }

  render() {
    return (
      <div>
        <Board sounds={this.state.sounds}/>
      </div>
    );
  }
}

export default App;
