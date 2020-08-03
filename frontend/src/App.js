import React, { Component } from 'react';
import './App.css';
import { Microphone, Light, Room, TV } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <TV/>
          <Light/>
        </p>
      </div>
    );
  }
}

export default App;
