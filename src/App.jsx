import React from 'react';

import { Construction } from './pages/Construction';
import { Error404 } from './pages/Error404';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Switch,
  Redirect
} from 'react-router-dom'

export const App = () => {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Construction />
          </Route>
          <Route exact path="/roll-for-reaction">
            <Redirect to="/softeng-750-react-rpg"/>
          </Route>
          <Route path="/404">
            <Error404 />
          </Route>
          <Redirect to="/404" />
        </Switch>
      </header>
    </div>
  </Router>
  );
}
