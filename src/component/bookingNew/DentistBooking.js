import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import NewBookingPast from "../bookingNew/NewBookingPast";
import NewBookingUpcoming from "../bookingNew/NewBookingUpcoming";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { FaBell } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { RiMessage2Fill } from "react-icons/ri";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../App";

function DentistBooking() {
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const  {  setLoggedIn,setSuperLoggedIn,setSubscribedLoggedIn } = useContext(UserContext)
  const logout = () => {
    setLoggedIn(false);
    setSuperLoggedIn(false);
    setSubscribedLoggedIn(false);
    localStorage.removeItem("testObject");
    console.log("7")
    return <Navigate to="/auth/login" />;
  };

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(process.env.REACT_APP_BACKEND + "/api/appointment/admin/Mitali")
        .then((res, err) => {
          if (err) {
            console.log(err);
          } else {
            res.data.map((data, key) => {
              if (data.status === "completed") {
                return setPast((past) => [...past, data]);
              } else {
                return setUpcoming((upcoming) => [...upcoming, data]);
              }
            });
          }
        });

      setRefresh(false);
    }
    if (refresh) {
      fetchData();
    }
  }, [refresh]);

  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });
  const data = JSON.parse(localStorage.getItem("testObject"));
  if (data === null) {
    return <Navigate to="/auth/login" />;
  } else {
    if (data.subscriber === 0 && data.type === "user") {
      return <Navigate to="/pricing" />;
    }
  }

  return (
    <div className="admin-dashboard-container" style={{ marginRight: `30px` }}>
      {width > 800 ? <Sidebar tab='dentistBooking'/> : <Navbar />}

      <div className="new-booking-main-container">
        <div className="new-booking-top-container edit">
          <div
            className="booking-top-container-title"
            style={{ height: `30px` }}
          >
            <p>Patient Appointments</p>
          </div>
          <div className="booking-top-container-content">
            <p>Dental for Home</p>
          </div>
        </div>
        <div className="navbar-icon icon-disable">
          {/* <RiMessage2Fill className="navbar-icon-inner" />
          <FaBell className="navbar-icon-inner" /> */}
          <FiLogOut className="navbar-icon-inner" onClick={logout} />
        </div>
      </div>
      <div className="admin-dash">
        <NewBookingUpcoming upcoming={upcoming} />
        <NewBookingPast past={past} />
      </div>
    </div>
  );
}

export default DentistBooking;
