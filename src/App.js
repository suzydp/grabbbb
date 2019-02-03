import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import TopPage from './components/TopPage/TopPage.jsx';
import GMaps from './components/GMaps/GMaps.jsx';
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
            <Route exact path="/coffee" component={GMaps} />
            <Route exact path="/bubbletea" component={GMaps} />
            <Route exact path="/wifi" component={GMaps} />
            <Route exact path="/outlet" component={GMaps} />
            <Route exact path="/privacy" component={Privacy} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
