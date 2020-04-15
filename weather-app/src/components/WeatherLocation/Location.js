import React from 'react';
import './styles.css';
//si recibo props como param, puedo implementarlo así:     
//const Location =  (props) => {
//  console.log(props);
//  debugger;
//manera larga
//  const city = props.city;
//manera menos larga
//  const {city} = props;
//  return ( 
//    <div><h1> {city} </h1></div>
//  )  
// };
       

const Location =  ({city}) => {
    return ( 
    <div className="locationCont">
        <h1> {city} </h1>
    </div>
    )
    
};
   


export default Location;