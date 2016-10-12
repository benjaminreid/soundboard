import React, { Component } from 'react';
import Board from './components/Board';
import { soundManager } from './../node_modules/soundmanager2/script/soundmanager2';

class App extends Component {
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
      },
    });
  }

  render() {
    return (
      <div>
        <Board/>
      </div>
    );
  }
}

export default App;
