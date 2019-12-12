import React from 'react'

const CircleButton = (props) => {
  return (
    <a href={`#${props.filterType}`}><span  style={{background:props.color}} className="circle-button">{props.text}</span></a> 
   
    )
  
}

export default CircleButton