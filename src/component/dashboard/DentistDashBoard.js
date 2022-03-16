import axios from "axios";
import React, { useEffect, useState } from "react";
import NewBookingPast from "../bookingNew/NewBookingPast";
import NewBookingUpcoming from "../bookingNew/NewBookingUpcoming";
import ServiceCard from "../service/ServiceCard";

function DentistDashBoard() {

  const serviceData = [
    {
      text: "Patients",
      img: 'https://dentalforhome.s3.amazonaws.com/images/QQ4.png',
      bg: 'rgb(255,249,233)',
      color: 'rgb(254,83,98)',
      link:'/serviceHistory'
      
    },
    {
      text: "Services",
      img: 'https://dentalforhome.s3.amazonaws.com/images/QQ4.png',
      bg: 'rgb(255,249,233)',
      color: 'rgb(254,83,98)',
      link:'/serviceHistory'
      
    },
    {
      text: "Hours",
      img: 'https://dentalforhome.s3.amazonaws.com/images/QQ4.png',
      bg: 'rgb(255,249,233)',
      color: 'rgb(254,83,98)',
      link:'/serviceHistory'
      
    },
    {
      text: "Root Canal",
      img: 'https://dentalforhome.s3.amazonaws.com/images/QQ4.png',
      bg: 'rgb(255,249,233)',
      color: 'rgb(254,83,98)',
      link:'/serviceHistory'
      
    },
    {
      text: "Root Canal",
      img: 'https://dentalforhome.s3.amazonaws.com/images/QQ4.png',
      bg: 'rgb(255,249,233)',
      color: 'rgb(254,83,98)',
      link:'/serviceHistory'
      
    },
  ]
    
  return (
    <div className="dentist-dashboard-container">
      <div className='booking-top-container-title'>
            <p>Welcome to your dashboard</p>
        </div>
        <div className='booking-top-container-content'>
            <p>Dental for Home</p>
        </div>
        <div className="dentist-dashboard-stat">
          <p>Your Statistics</p>
        </div>
        <div className="service-main-card">
            {serviceData.map((data) => (
              <ServiceCard content={data} />
            ))}
          </div>
    </div>
  );
}

export default DentistDashBoard;
