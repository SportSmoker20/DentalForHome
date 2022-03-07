import React from "react";
import Banner from "../dashboard/Banner";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";
import ServiceCard from "./ServiceCard";
import "../../css/Service.css";
import { Navigate } from "react-router-dom";

function Service( props) {
  const serviceData = [
    {
      text: "Root Canal Treatment",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+1.png',
      bg: 'rgb(244,251,255)',
      color: 'rgb(36,168,251)'
    },
    {
      text: "Teeth Extraction",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+2.png',
      bg: 'rgb(242,241,255)',
      color: 'rgb(122,110,253)'
    },
    {
      text: "Dental Filling",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+3.png',
      bg: 'rgb(254,258,239)',
      color: 'rgb(255,199,1)'
    },
    {
      text: "Teeth Pain First-Aid",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+4.png',
      bg: 'rgb(255,249,233)',
      color: 'rgb(254,83,98)'
    },
    {
      text: "Teeth Cleaning",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+5.png',
      bg: 'rgb(248,255,233)',
      color: 'rgb(155,221,16)'
    },
    {
      text: "Teeth Whitening",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+6.png',
      bg: 'rgb(248,255,233)',
      color: 'rgb(155,221,16)'
      
    },
    {
      text: "Root Canal Treatment",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+1.png',
      bg: 'rgb(244,251,255)',
      color: 'rgb(36,168,251)'
    },
    {
      text: "Teeth Extraction",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+2.png',
      bg: 'rgb(242,241,255)',
      color: 'rgb(122,110,253)'
    },
    {
      text: "Dental Filling",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+3.png',
      bg: 'rgb(254,258,239)',
      color: 'rgb(255,199,1)'
    },
    {
      text: "Teeth Pain First-Aid",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+4.png',
      bg: 'rgb(255,249,233)',
      color: 'rgb(254,83,98)'
    },
    // {
    //   text: "Teeth Cleaning",
    //   img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+5.png',
    //   bg: 'rgb(244,251,255)',
    // },
    // {
    //   text: "Teeth Whitening",
    //   img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+6.png',
    //   bg: 'rgb(248,255,233)',
    // },
  ];

  if (props.subscribedLoggedIn) {
    return (
      <div>
        <Sidebar />
        <Navbar />
        <Banner />
        <div className="service-main">
          <div className="service-main-title">
            <div className="service-title-top">Services</div>
            {/* <div className="service-title-bottom">Services from your plan</div> */}
          </div>
          <div className="service-main-card">
            {serviceData.map((data) => (
              <ServiceCard content={data} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/auth/login" />;
  }
}

export default Service;
