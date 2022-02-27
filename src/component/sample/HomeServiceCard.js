import React from 'react'
import img1 from '../../images/bookingIcon.png'

function HomeServiceCard(props) {
  return (
    <div className='home-service-card-container'>
        <div className='home-service-img'>
          <img src={img1} style={{width:`60px`,height:`60px`}} alt={"Couldn't Load"}/>
        </div>
        <div className='home-service-title'>
          <p>{props.data.title}</p>
        </div>
        <div className='home-service-content'>
          <p>{props.data.content}</p>
        </div>
    </div>
  )
}

export default HomeServiceCard