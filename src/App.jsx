import React from 'react';

import Construction from './pages/Construction';
import Error404 from './pages/Error404';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

export const App = () => {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <Main />
        <Switch>
          <Route exact path="/">
            <Construction />
          </Route>
          <Route exact path="*">
            <Error404 />
          </Route>
        </Switch>
      </header>
    </div>
  </Router>
  );
}
