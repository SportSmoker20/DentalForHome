import React from "react";

function HistoryCount() {
  return (
    <div className="history-count-container">
      <div className="history-count-container-top">
        <div className="history-count-container-left">
          <div className="history-count-container-left-count">
            <p>1</p>
          </div>
          <div className="history-count-container-left-content">
            <p>Total Root Canal Service Left</p>
          </div>
        </div>
        <div className="history-count-container-right">
          <div className="history-count-container-right-count">
            <p>0</p>
          </div>
          <div className="history-count-container-right-content">
            <p>Total Root Canal Done</p>
          </div>
        </div>
      </div>
      <div className="history-count-container-bottom">
        <div className="new-booking-top-container history">
          <div className="booking-top-container-title">
            <p>Book your next slot</p>
          </div>
          <div className="booking-top-container-content">
            <p>Please provide the following details</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryCount;
