import React, { useContext } from "react";

import ServiceCard from "../service/ServiceCard";
import { FaBell } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { RiMessage2Fill } from "react-icons/ri";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../App";

function DentistDashBoard() {
  const  {  setLoggedIn,setSuperLoggedIn,setSubscribedLoggedIn } = useContext(UserContext)
  const logout = () => {
    setLoggedIn(false);
    setSuperLoggedIn(false);
    setSubscribedLoggedIn(false);
    localStorage.removeItem("testObject");
    console.log("7")
    return <Navigate to="/auth/login" />;
  };

  const serviceData = [
    {
      text: "Patients",
      count: "78",
      img: "https://dental-for-home.s3.us-west-2.amazonaws.com/QQ4.png",
      bg: "rgb(255,249,233)",
      color: "rgb(254,83,98)",
      link: "/serviceHistory",
    },
    {
      text: "Services",
      count: "345",
      img: "https://dental-for-home.s3.us-west-2.amazonaws.com/QQ4.png",
      bg: "rgb(242,241,255)",
      color: "rgb(122,110,253)",
      link: "/serviceHistory",
    },
    {
      text: "Hours",
      count: "4678",
      img: "https://dental-for-home.s3.us-west-2.amazonaws.com/QQ4.png",
      bg: "rgb(254,258,239)",
      color: "rgb(255,199,1)",
      link: "/serviceHistory",
    },
    {
      text: "Root Canal",
      img: "https://dental-for-home.s3.us-west-2.amazonaws.com/QQ4.png",
      bg: "rgb(244,251,255)",
      color: "rgb(36,168,251)",
      link: "/serviceHistory",
    },
    {
      text: "Root Canal",
      img: "https://dental-for-home.s3.us-west-2.amazonaws.com/QQ4.png",
      bg: "rgb(248,255,233)",
      color: "rgb(155,221,16)",
      link: "/serviceHistory",
    },
  ];

  return (
    <div className="dentist-dashboard-container">
      <div className="new-booking-main-container">
        <div className="new-booking-top-container">
          <div className="booking-top-container-title">
            <p>Welcome to your dashboard</p>
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
      <div className="dentist-dashboard-stat">
        <p>Your Statistics</p>
      </div>
      <div className="service-main-card">
        {serviceData.map((data, key) => (
          <ServiceCard key={key} content={data} />
        ))}
      </div>
    </div>
  );
}

export default DentistDashBoard;
