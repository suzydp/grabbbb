import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import GoogleMapReact from 'google-map-react';
import TopPage from './components/TopPage/TopPage.jsx';
import GMaps from './components/GMaps/GMaps.jsx';
import './App.css';


const appHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={appHistory}>
          <Switch>
            <Route exact path="/" component={TopPage} />
            <Route exact path="/coffee" component={GMaps} />
            <Route exact path="/juice" component={GMaps} />
            <Route exact path="/wifi" component={GMaps} />
            <Route exact path="/outlet" component={GMaps} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
