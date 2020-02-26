import React from 'react';

import Home from './pages/Home';
import Anzen from './pages/Anzen';
import BakuganRerolled from './pages/BakuganRerolled';
import Energize from './pages/Energize';
import Flik from './pages/Flik';
import HeroOfKonoha from './pages/HeroOfKonoha';
import MFVAS from './pages/MFVAS';
import Outerstellar from './pages/Outerstellar';
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
	  <Home />
     </Route>
     <Route exact path="/anzen">
	  <Anzen />
     </Route>
     <Route exact path="/bakugan-rerolled">
	  <BakuganRerolled />
     </Route>
     <Route exact path="/energize">
	  <Energize />
     </Route>
     <Route exact path="/flik">
	  <Flik />
     </Route>
     <Route exact path="/mfvas">
	  <MFVAS />
     </Route>
     <Route exact path="/outerstellar">
	  <Outerstellar />
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
