import React from "react";
import Sidebar from "../sidebar/Sidebar";
import '../../css/NewBooking.css'
import { Navigate } from "react-router-dom";
import NewBookingTop from "./NewBookingTop";
import NewBookingSelect from "./NewBookingSelect";
import NewBookingUpcoming from "./NewBookingUpcoming";
import NewBookingPast from "./NewBookingPast";

function NewBooking(props) {
  if(props.subscribedLoggedIn){
    return (
      <div className="new-booking-container">
        <Sidebar />
        <NewBookingTop />
        <NewBookingSelect />
        <NewBookingUpcoming />
        <NewBookingPast />
        <br />
      </div>
    );
  } else {
    return(
      <Navigate to="/auth/login" />
    )
  }
  
}

export default NewBooking;
