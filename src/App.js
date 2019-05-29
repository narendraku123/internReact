import React, { Component } from 'react';
import './App.css';
import Users from './users/Users';

class App extends Component {
  render() {

    return (
      <div className="App">
        <h1> This is Application on React. </h1>
     <Users/>
      </div>

    );
  }
}

export default App;
