import React from 'react';


const person = ( props) => {

return ( <div>


         <p> This is an funcaion example </p>
         <p> This is Dynamic Values generated using the React Math { Math.floor (Math.random() * 45)} </p>
         <h2> My Name is { props.name}  and age is { props.Age} </h2>

   </div>)

} ;

export default person;
