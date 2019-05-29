import React, {Component} from 'react';
import Person from '../Person/Person';
const User = (props) => {
return (<div>
      Name : {props.children}  Age : {props.age}
      console.log('user');
      <Person name="Akhil" Age = "">  </Person>
      <Person />
   </div>)

}

export default User;
