import React, { useContext, useState } from "react";
import { FaBell } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { RiMessage2Fill } from "react-icons/ri";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../App";

function PatientTop() {
  const [service, setService] = useState();
  const [time, setTime] = useState();
  const { setLoggedIn, setSuperLoggedIn, setSubscribedLoggedIn } =
    useContext(UserContext);

  const logout = () => {
    setLoggedIn(false);
    setSuperLoggedIn(false);
    setSubscribedLoggedIn(false);
    localStorage.removeItem("testObject");
    return <Navigate to="/auth/login" />;
  };

  return (
    <div className="patient-top-container">
      <div className="new-booking-main-container">
        <div className="new-booking-top-container">
          <div className="booking-top-container-title">
            <p>Your Patients</p>
          </div>
          <div className="booking-top-container-content">
            <p>Dental for Home</p>
          </div>
        </div>
        <div className="navbar-icon icon-disable">
          <RiMessage2Fill className="navbar-icon-inner" />
          <FaBell className="navbar-icon-inner" />
          <FiLogOut className="navbar-icon-inner" onClick={logout} />
        </div>
      </div>

      <div className="patient-bottom-container">
        <div className="new-booking-select-option patient">
          <select name="Type" onChange={(e) => setService(e.target.value)}>
            <option value="volvo">Select Service</option>
            <option value="Delhi">Delhi</option>
            <option value="Delhi">Delhi</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div className="new-booking-select-option">
          <select name="Type" onChange={(e) => setTime(e.target.value)}>
            <option value="volvo">Select Time Duration</option>
            <option value="Delhi">Delhi</option>
            <option value="Delhi">Delhi</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default PatientTop;
