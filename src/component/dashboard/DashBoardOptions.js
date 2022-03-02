import React from 'react';
import { MdDesignServices } from 'react-icons/md'
import bookingIcon from '../../images/bookingIcon.png'
import downloadIcon from '../../images/downloadIcon.png'
import serviceIcon from '../../images/serviceIcon.png'
import prescprIcon from '../../images/prescprIcon.png'

function DashBoardOptions() {
  return (
      <div className='options-main'>
        <div className='options-main-1'>
          <div className='option service'>
          <img src={serviceIcon} style={{height:`60px`,width:`60px`,paddingRight:`20px`}}/>
            <div>Services</div>
          </div>
          <div className='option booking' >
            <img src={bookingIcon} style={{height:`60px`,width:`60px`,paddingRight:`20px`}} />
            <div>Booking</div>
          </div>
          </div>
          <div className='options-main-1'>
          <div className='option prescription'>
          <img src={prescprIcon} style={{height:`60px`,width:`60px`,paddingRight:`20px`}} />
            <div>Prescription</div>
            
          </div>
          <div className='option download'>
          <img src={downloadIcon} style={{height:`60px`,width:`60px`,paddingRight:`20px`}} />
            <div>My Downloads</div>
            
          </div>
          </div>
      </div>
  );
}

export default DashBoardOptions;
