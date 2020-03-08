import React from 'react';

import Main from './pages/Main';
import Error404 from './pages/Error404'
// import logo from './logo.svg';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link as NavLink
} from 'react-router-dom'

function App() {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Main />
            {/* <h1>This site is under construction</h1> */}
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

/**
 * <img src={logo} className="App-logo" alt="logo" />
        <pre>
          <code>
	  	puts("Hello World!");
	  </code>
        </pre>
        <a
          className="App-link"
          href="http://matteas-eden.github.io/jekyll-site"
          target="_self"
          rel="noopener noreferrer"
        >
          The actual site can be found here
        </a> */ 

export default App;
