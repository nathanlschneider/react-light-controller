import React, { Component } from 'react';
import './App.scss';
import Map from './01 - Map/Map';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <div>Hue Light Controller</div>
        </header>
        <Map />
        <footer className="app-footer" />
      </div>
    )
  }
}

export default App;
