import React from 'react'
import img1 from '../../images/bookingIcon.png'

function HomeFooter() {
  return (
    <div id='home-contact' className='home-footer-container'>
        <div className='footer-top'>

        </div>
        <div className='footer-bottom'>
            <div className='footer-bottom-text'>
                <img src={img1} style={{height:`40px`,width:`40px`}} />
                <p>Dental For Home</p>
            </div>
            <div className='footer-bottom-copyright'>
                <p>copyright 2022. Dental For Home. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default HomeFooter