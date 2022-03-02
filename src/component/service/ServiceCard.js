import React from 'react'

function ServiceCard(props) {
  return (
    <div style={{backgroundImage:`url(${props.content.bg})`}} className='service-card-container' >
      {/* <img src={props.content.img} style={{height:`300px`,width:`200px`}}/> */}
        <div className='service-card-text'>
            <p className='service-card-text-inner'>{props.content.text}</p>
        </div>
    </div>
  )
}

export default ServiceCard