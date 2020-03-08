import React from 'react';

import Main from './pages/Main';
import Home from './pages/Home'
import About from './pages/About';
import CV from './pages/CV';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Error404 from './pages/Error404';
// import logo from './logo.svg';
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

function App() {
  return (
  <Router>
    <div className="App">
      <header className="App-header">
        <Main />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/cv">
            <CV />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/projects">
            <Projects />
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

export default App;
