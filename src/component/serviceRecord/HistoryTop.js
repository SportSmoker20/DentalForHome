import React from "react";

function HistoryTop(props) {
  return (
    <div className="history-top-container">
      <div className="new-booking-top-container edit"style={{width:`60%`}}>
        <div className="booking-top-container-title">
          <p>{props.service.text} Service Section</p>
        </div>
        <div className="booking-top-container-content">
          <p>Dental For Home</p>
        </div>
      </div>
  
    </div>
  );
}

export default HistoryTop;
