import React from 'react'

function ServiceCard(props) {
  return (
    <div style={{backgroundColor:`${props.content.bg}`}} className='service-card-container' >
      <img src={props.content.img} style={{height:`125px`,width:`150px`}}/>
        <div className='service-card-text'>
            <p className='service-card-text-inner' >{props.content.text}</p>
            <p className='service-card-text-inner' style={{color:`${props.content.color}`}}>Treatment</p>
        </div>
    </div>
  )
}

export default ServiceCard