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
      bg: 'https://dentalforhome.s3.amazonaws.com/images/service.png1',
    },
    {
      text: "Teeth Extraction",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+2.png',
      bg: 'https://dentalforhome.s3.amazonaws.com/images/service.png2',
    },
    {
      text: "Dental Filling",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+3.png',
      bg: 'https://dentalforhome.s3.amazonaws.com/images/service.png3',
    },
    {
      text: "Teeth Pain First-Aid",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+4.png',
      bg: 'https://dentalforhome.s3.amazonaws.com/images/service.png4',
    },
    {
      text: "Teeth Cleaning",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+5.png',
      bg: 'https://dentalforhome.s3.amazonaws.com/images/service.png5',
    },
    {
      text: "Teeth Whitening",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+6.png',
      bg: 'https://dentalforhome.s3.amazonaws.com/images/service.png6',
    },
    {
      text: "Initial Oral Examination",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+7.png',
      bg: 'https://dentalforhome.s3.amazonaws.com/images/service.png7',
    },
    {
      text: "50% off on (Bridges Crowns)",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+8.png',
      bg: 'https://dentalforhome.s3.amazonaws.com/images/service.png8',
    },
    {
      text: "Unlimited X-ray",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+9.png',
      bg: 'https://dentalforhome.s3.amazonaws.com/images/service.png9',
    },
    {
      text: "Free Pick & Drop by our ambulances",
      img: 'https://dentalforhome.s3.amazonaws.com/images/dental+vector+graphics+10.png',
      bg: 'https://dentalforhome.s3.amazonaws.com/images/service10.png',
    },
  ];

  if (props.superLoggedIn) {
    return (
      <div>
        <Sidebar />
        <Navbar />
        <Banner />
        <div className="service-main">
          <div className="service-main-title">
            <div className="service-title-top">Services</div>
            <div className="service-title-bottom">Services from your plan</div>
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
