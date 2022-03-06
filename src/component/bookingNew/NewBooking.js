import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import '../../css/NewBooking.css'
import { Navigate } from "react-router-dom";
import NewBookingTop from "./NewBookingTop";
import NewBookingSelect from "./NewBookingSelect";
import NewBookingUpcoming from "./NewBookingUpcoming";
import NewBookingPast from "./NewBookingPast";
import Navbar from "../dashboard/Navbar";

function NewBooking(props) {

  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  if(props.subscribedLoggedIn){
    return (
      <div className="new-booking-container">
        {width>800 ? <Sidebar /> : <Navbar />}
        {/* <Sidebar /> */}
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
