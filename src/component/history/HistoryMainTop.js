import React, { useContext } from "react";
import { FaBell } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { RiMessage2Fill } from "react-icons/ri";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../App";

function HistoryMainTop() {
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
    <div className="new-booking-main-container">
      <div className="new-booking-top-container">
        <div className="booking-top-container-title">
          <p>My History</p>
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
  );
}

export default HistoryMainTop;
