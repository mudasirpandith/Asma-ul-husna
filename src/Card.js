import React from 'react';

function Card (props){
  return (
    <div className="Card">
   <p className="num"> {props.id}</p>
    <h1 className="Card-h1">{props.name}</h1>
    <h1 className="Card-h1">{props.arabic}</h1>
    <p className="Card-p">{props.meaning}</p>
    
    </div>
    )
  
}
export default Card;