import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={require("./img/residualgold.jpg")} className="App-logo" alt="Residual-Gold" />
          <img src={require("./img/coinflip.gif")} className="App-logo" alt="Coin-Flip" />
        </header>
        <body>
        <div class="Topnav" id="mytopnav">
					<a href="index.html" class="Logo">Home</a>
					<a href="projects.html" class="Button">Projects</a>
					<a href="about.html" class="Button">About Me</a>
					<a href="contact.html" class="Button">Contact</a>
				</div>
        {/* <h1 className="App-title">Residual</h1>
        <h1 className="App-title">Using spare change to get ahead!</h1>
        <p className="App-intro">
          intro
        </p> */}
        </body>
      </div>
    );
  }
}

export default App;
