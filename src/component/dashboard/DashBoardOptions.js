import React from 'react';

function DashBoardOptions() {
  return (
      <div className='options-main'>
        <div className='options-main-1'>
          <div className='option service'>
          {/* <img src='https://dentalforhome.s3.amazonaws.com/images/serviceIcon.png' style={{height:`60px`,width:`60px`,paddingRight:`20px`}}/> */}
            <div>Services</div>
          </div>
          <div className='option booking' >
            {/* <img src='https://dentalforhome.s3.amazonaws.com/images/bookingIcon.png' style={{height:`60px`,width:`60px`,paddingRight:`20px`}} /> */}
            <div>Booking</div>
          </div>
          </div>
          <div className='options-main-1'>
          <div className='option prescription'>
          {/* <img src='https://dentalforhome.s3.amazonaws.com/images/prescprIcon.png' style={{height:`60px`,width:`60px`,paddingRight:`20px`}} /> */}
            <div>Prescription</div>
            
          </div>
          <div className='option download'>
          {/* <img src='https://dentalforhome.s3.amazonaws.com/images/downloadIcon.png' style={{height:`60px`,width:`60px`,paddingRight:`20px`}} /> */}
            <div>My Downloads</div>
            
          </div>
          </div>
      </div>
  );
}

export default DashBoardOptions;
