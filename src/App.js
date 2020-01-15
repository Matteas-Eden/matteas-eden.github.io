import React from 'react';
import Home from './pages/Home';
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
	  <Bakugan />
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

/*
function Home() {
	return (
		<header className="Home">
		<NavLink to="/anzen">Anzen</NavLink><br />
		<NavLink to="/bakugan-rerolled">Bakugan</NavLink><br />
		<NavLink to="/energize">Energize</NavLink><br />
		<NavLink to="/flik">Flik</NavLink><br />
		<NavLink to="/mfvas">MFVAS</NavLink><br />
		<NavLink to="/outerstellar">Outerstellar</NavLink>
		</header>
	);
}
*/

function Anzen() {
	return (
		<header className="Anzen">
		<NavLink to="/">Home</NavLink><br/>
		<NavLink to="/energize">Energize</NavLink>
		</header>
	);
}

function Energize() {
	return (
		<header className="Energize">
		<NavLink to="/">Home</NavLink><br/>
		<NavLink to="/bakugan-rerolled">Bakugan</NavLink>
		</header>
	);
}

function Bakugan() {
	return (
		<header className="Bakugan">
		<NavLink to="/">Home</NavLink><br/>
		<NavLink to="/flik">Flik</NavLink><br/>
		<h1>Bakugan</h1>
		</header>
	);
}

function Flik() {
	return (
		<header className="Flik">
		<NavLink to="/">Home</NavLink><br/>
		<NavLink to="/mfvas">Model Fusion Video Analytics System</NavLink>
		<h1>MFVAS</h1>
		</header>
	);
}

function MFVAS() {
	return (
		<header className="MFVAS">
		<NavLink to="/">Home</NavLink><br/>
		<NavLink to="/outerstellar">Outerstellar</NavLink>
		<h1>Model Fusion Video Analytics System</h1>
		</header>
	);
}

function Outerstellar() {
	return (
		<header className="Outerstellar">
		<NavLink to="/">Home</NavLink><br/>
		<NavLink to="/anzen">Anzen</NavLink>
		<h1>Outerstellar</h1>
		</header>
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
