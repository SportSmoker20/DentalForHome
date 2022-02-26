import React from 'react'
import img1 from '../../images/bookingIcon.png'

function HomeAchievements() {
  return (
    <div className='home-achievements-container'>
        <div className='achievements-title'>
            <p>Our Achievements</p>
        </div>
        <div className='achievements-row'>
            <div className='achievements-content'>
                <div className='achievements-img'>
                    <img src={img1} />
                </div>
                <div className='achievements-text'>
                    <p>10,000+ Smiles</p>
                </div>
            </div>
            <div className='achievements-content'>
                <div className='achievements-img'>
                    <img src={img1} />
                </div>
                <div className='achievements-text'>
                    <p>19+ Clinics</p>
                </div>
            </div>
            <div className='achievements-content'>
                <div className='achievements-img'>
                    <img src={img1} />
                </div>
                <div className='achievements-text'>
                    <p>50+ Dentistry Specialists</p>
                </div>
            </div>
            <div className='achievements-content'>
                <div className='achievements-img'>
                    <img src={img1} />
                </div>
                <div className='achievements-text'>
                    <p>5+ years of experience</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeAchievements