import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>int main(int argc, char **argv) { puts("Hello World!"); }</code>
        </p>
        <a
          className="App-link"
          href="http://matteas-eden.github.io/jekyll-site"
          target="_blank"
          rel="noopener noreferrer"
        >
          The actual site can be found here
        </a>
      </header>
    </div>
  );
}

export default App;
