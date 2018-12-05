import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import TopPage from './components/TopPage/TopPage.jsx';
import GMaps from './components/GMaps/GMaps.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopPage />
      </div>
    );
  }
}

export default App;
