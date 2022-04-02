import React from "react";
import Banner from "../dashboard/Banner";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";
import Appointments from "./Appointments";
import ScheduleAppointment from "./ScheduleAppointment";
import "../../css/Booking.css";
import { Navigate } from "react-router-dom";

function Booking(props) {
  if (props.superLoggedIn) {
    return (
      <div>
        <Sidebar tab='booking' />
        <Navbar />
        <Banner />
        <div className="booking-head">My bookings</div>
        <div className="booking-main">
          <Appointments />
          <ScheduleAppointment />
        </div>
      </div>
    );
  } else {
    return <Navigate to="/auth/login" />;
  }
}

export default Booking;
