import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import TopPage from './components/TopPage/TopPage.jsx';
import GMapsCoffee from './components/GMaps/GMapsCoffee.jsx';
import GMapsBubbleTea from './components/GMaps/GMapsBubbleTea.jsx';
import GMapsWifi from './components/GMaps/GMapsWifi.jsx';
import GMapsOutlet from './components/GMaps/GMapsOutlet.jsx';
import Privacy from './components/Privacy/Privacy.jsx';
import './App.css';

// to create router
const appHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={appHistory}>
          <Switch>
            <Route exact path="/" component={TopPage} />
            <Route exact path="/coffee" component={GMapsCoffee} />
            <Route exact path="/bubbletea" component={GMapsBubbleTea} />
            <Route exact path="/wifi" component={GMapsWifi} />
            <Route exact path="/outlet" component={GMapsOutlet} />
            <Route exact path="/privacy" component={Privacy} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
