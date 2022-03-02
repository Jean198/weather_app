import React from 'react'

export const Card = (props) => {
  if(props.message.error){

    return (
      <div>
        <p>{props.message.error}</p>
        
      </div>
    )


  }else{
    return (
      <div>
        <p>{props.message.location}</p>
        <p>{props.message.temperature}</p>
        <p>{props.message.feelsLike}</p>
        
      </div>
    )
  }
  
}
