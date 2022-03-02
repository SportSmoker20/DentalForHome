import React from 'react';
import ft from '../../images/footer3.png'
import '../../css/DashBoard.css'

function DashBoardFooter() {
  return (
    <div className='dash-footer-main'>
        <img src={ft} className="footer-image"/>
        {/* <div className='footer-text'>
        <p>A Better Life Starts with a</p>
        <p>Beautiful Smile .</p>
        </div> */}
    </div>
  );
}

export default DashBoardFooter;
