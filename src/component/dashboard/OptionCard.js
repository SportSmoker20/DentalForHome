import React from 'react'

function OptionCard(props) {
  return (
    <div style={{backgroundColor:`${props.content.bg}`}} className='service-card-container option-card' >
      <img src={props.content.img} style={{height:`70px`,width:`70px`}}/>
        <div className='service-card-text'>
            
            {/* <p className='service-card-text-inner' >Root Canal</p> */}
            <p className='service-card-text-inner' style={{color:`${props.content.color}`}}>{props.content.text}</p>
        </div>
    </div>
  )
}

export default OptionCard