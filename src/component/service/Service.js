import React from "react";
import Banner from "../dashboard/Banner";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";
import ServiceCard from "./ServiceCard";
import "../../css/Service.css";
import img1 from "../../images/dental vector graphics 1.png";
import bg1 from "../../images/service1.png";
import img2 from "../../images/dental vector graphics 2.png";
import bg2 from "../../images/service2.png";
import img3 from "../../images/dental vector graphics 3.png";
import bg3 from "../../images/service3.png";
import img4 from "../../images/dental vector graphics 4.png";
import bg4 from "../../images/service4.png";
import img5 from "../../images/dental vector graphics 5.png";
import bg5 from "../../images/service5.png";
import img6 from "../../images/dental vector graphics 6.png";
import bg6 from "../../images/service6.png";
import img7 from "../../images/dental vector graphics 7.png";
import bg7 from "../../images/service7.png";
import img8 from "../../images/dental vector graphics 8.png";
import bg8 from "../../images/service8.png";
import img9 from "../../images/dental vector graphics 9.png";
import bg9 from "../../images/service9.png";
import img10 from "../../images/dental vector graphics 10.png";
import bg10 from "../../images/service10.png";
import { Navigate } from "react-router-dom";

function Service( props) {
  const serviceData = [
    {
      text: "Root Canal Treatment",
      img: img1,
      bg: bg1,
    },
    {
      text: "Teeth Extraction",
      img: img2,
      bg: bg2,
    },
    {
      text: "Dental Filling",
      img: img3,
      bg: bg3,
    },
    {
      text: "Teeth Pain First-Aid",
      img: img4,
      bg: bg4,
    },
    {
      text: "Teeth Cleaning",
      img: img5,
      bg: bg5,
    },
    {
      text: "Teeth Whitening",
      img: img6,
      bg: bg6,
    },
    {
      text: "Initial Oral Examination",
      img: img7,
      bg: bg7,
    },
    {
      text: "50% off on (Bridges Crowns)",
      img: img8,
      bg: bg8,
    },
    {
      text: "Unlimited X-ray",
      img: img9,
      bg: bg9,
    },
    {
      text: "Free Pick & Drop by our ambulances",
      img: img10,
      bg: bg10,
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
