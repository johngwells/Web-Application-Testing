import React from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './components/Dashboard';
import Display from './components/Display';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      balls: 0,
      strikes: 0,
      foul: 0
    };
  }

  strikeHandler = () => {
    console.log('strike handler');
    this.setState({ strikes: this.state.strikes + 1 
    });
  }

  ballsHandler = () => {
    this.setState({ balls: this.state.balls + 1 });
  }

  foulHandler = () => {
    // if foul is less than 2 equals strike else none
    this.setState({ foul: this.state.foul + 1})
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Display 
            strikes={this.state.strikes}
            balls={this.state.balls}
            foul={this.state.foul}
          />
          <Dashboard 
            strikes={this.strikeHandler}
            balls={this.ballsHandler}
            foul={this.foulHandler}
          />
        </header>
      </div>
    );
  }
}

export default App;
