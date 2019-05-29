import React, { Component } from 'react';
import './App.css';
import Users from './users/Users';
import Person from './Person/Person';
import Employee from './Employee/Employee';
class App extends Component {

  render() {

    return (
      <div className="App">
        <h1> This is Application on React. </h1>
     <Users/>
     <Person name="Narendra" Age = "21"> </Person>
     <Person name = "Prasanth" Age = "22" > </Person>
     <Person name = "Kirru" Age = "23"> </Person>
     <Employee > </Employee>

      </div>

    );
  }
}

export default App;
