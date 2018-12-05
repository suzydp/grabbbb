import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import GMaps from './components/GMaps.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GMaps />
      </div>
    );
  }
}

export default App;
