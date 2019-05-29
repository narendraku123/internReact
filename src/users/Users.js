import React, { Component } from 'react';
import User from './User';

  class Users extends Component {
    state = {
         users: [
           {name: 'John', age: 23},
           {name: 'cena', age: 24},
           {name: 'eric', age: 21},
           {name: 'faulkaner', age: 33},
         ],
         title : 'User List'

    };

    makeMeYounger = () => {
      this.setState ({
        users: [
          {name: 'John', age: 13},
          {name: 'cena', age: 14},
          {name: 'eric', age: 11},
          {name: 'faulkaner', age: 23},
        ]
      })

    }

    makeMeDoubleYounger = () => {

        const newState = this.state.users.map((user)=> {
          const tempUser = user;
          tempUser.age -= 10;
          return tempUser;
        });
        this.setState({
          newState
        });
    }
     render() {
       return (
         <div className="UsersRenderElementStyle">
         <h1> {this.state.title} </h1>
         <br/>
         <button  onDoubleClick={this.makeMeDoubleYounger }> Click to Reduse The Age</button>
         <hr/>
 {
          this.state.users.map((user)=>{
             return <User age={user.age} > {user.name} </User>
         })
       }
          </div>)
}
     
  }

  export default Users;
