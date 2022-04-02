import axios from "axios";
import React, { useEffect, useState } from "react";

function HistoryCount(props) {
  const profile = JSON.parse(localStorage.getItem("testObject"));

  
  return (
    <div className="history-count-container">
      <div className="history-count-container-top">
        <div className="history-count-container-left">
          <div className="history-count-container-left-count">
            <p>{props.data.service_done}</p>
          </div>
          <div className="history-count-container-left-content">
            <p>Total {props.service.text} Service Left</p>
          </div>
        </div>
        <div className="history-count-container-right">
          <div className="history-count-container-right-count">
            <p>{props.data.service_left}</p>
          </div>
          <div className="history-count-container-right-content">
            <p>Total {props.service.text} Done</p>
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
