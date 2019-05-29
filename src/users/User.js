import React, {Component} from 'react';

const User = (props) => {
return (<div>
      Name : {props.children}  Age : {props.age}
      console.log('user');
   </div>)

}

export default User;
