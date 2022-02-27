import React from 'react'

function WhyCard(props) {
  return (
    <div className='why-card-container'>
        <div className='why-card-top'>
            <img src={props.data.img} style={{height:`70px`,width:`70px`}} alt={"Couldn't Load"}/>
        </div>
        <div className='why-card-bottom'>
            <p>{props.data.content}</p>
        </div>
    </div>
  )
}

export default WhyCard