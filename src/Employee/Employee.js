import React , { Component } from 'react';
import Person from '../Person/Person';

class Employee extends Component{

   state = {

     Information : [

       { some : 'Suarya' , number : 43},
       { some : 'Malleswari', number : 39},
       { some : 'aja' , number : 36}
     ]

   }

 render() {

   return (
     <div>
       <Person name = {this.state.Information[0].some} number = {this.state.Information[0].number}> </Person>
       <Person name = {this.state.Information[1].some} number = {this.state.Information[1].number}> </Person>
       <Person name = {this.state.Information[2].some} number = {this.state.Information[2].number}> </Person>

     </div>

   )
 };


}
export default Employee;
