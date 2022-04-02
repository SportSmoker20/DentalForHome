import React, { useEffect, useState } from "react";
import Banner from "../dashboard/Banner";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";
import ServiceCard from "./ServiceCard";
import { Navigate } from "react-router-dom";
import History from "../serviceRecord/History";
import axios from "axios";

function Service() {
  const serviceData = [
    {
      text: "Root Canal",
      img: "https://dentalforhome.s3.amazonaws.com/images/QQ4.png",
      table: "root_canal",
      bg: "rgb(255,249,233)",
      color: "rgb(254,83,98)",
      link: "/serviceHistory",
    },
    {
      text: "Dental Filling",
      img: "https://dentalforhome.s3.amazonaws.com/images/QQ3.png",
      bg: "rgb(242,241,255)",
      color: "rgb(122,110,253)",
      link: "/serviceHistory",
      table: "dental_filling",
    },
    {
      text: "Teeth Whitening",
      img: "https://dentalforhome.s3.amazonaws.com/images/QQ6.png",
      bg: "rgb(254,258,239)",
      color: "rgb(255,199,1)",
      link: "/serviceHistory",
      table: "teeth_whitening",
    },
    {
      text: "Tooth Extraction",
      img: "https://dentalforhome.s3.amazonaws.com/images/QQ11.png",
      bg: "rgb(244,251,255)",
      color: "rgb(36,168,251)",
      link: "/serviceHistory",
      table: "tooth_extraction",
    },
    {
      text: "Bridge & Crown",
      img: "https://dentalforhome.s3.amazonaws.com/images/QQ8.png",
      bg: "rgb(248,255,233)",
      color: "rgb(155,221,16)",
      link: "/serviceHistory",
      table: "bridge_crown",
    },
    {
      text: "Dental Implants",
      img: "https://dentalforhome.s3.amazonaws.com/images/QQ9.png",
      bg: "rgb(248,255,233)",
      color: "rgb(155,221,16)",
      link: "/serviceHistory",
      table: "dental_implants",
    },
    {
      text: "Root Canal",
      img: "https://dentalforhome.s3.amazonaws.com/images/QQ12.png",
      bg: "rgb(244,251,255)",
      color: "rgb(36,168,251)",
      link: "/serviceHistory",
      table: "root_canal",
    },
    {
      text: "Teeth Extraction",
      img: "https://dentalforhome.s3.amazonaws.com/images/QQ1.png",
      bg: "rgb(242,241,255)",
      color: "rgb(122,110,253)",
      link: "/serviceHistory",
      table: "tooth_extraction",
    },
    {
      text: "Dental Filling",
      img: "https://dentalforhome.s3.amazonaws.com/images/QQ7.png",
      bg: "rgb(254,258,239)",
      color: "rgb(255,199,1)",
      link: "/serviceHistory",
      table: "dental_filling",
    },
    {
      text: "Teeth Pain First-Aid",
      img: "https://dentalforhome.s3.amazonaws.com/images/QQ5.png",
      bg: "rgb(255,249,233)",
      color: "rgb(254,83,98)",
      link: "/serviceHistory",
      table: "teeth_firstaid",
    },
  ];
  const [countData, setCountData] = useState(null);
  const [service, setService] = useState(null);

  const data = JSON.parse(localStorage.getItem("testObject"));

  useEffect(()=>{
    async function fetchCount() {
      await axios
        .get(
          process.env.REACT_APP_BACKEND +
            "/api/service/" +
            service.table +
            "/" +
            data.id
        )
        .then((res, err) => {
          if (!err) {
            
            setCountData(res.data[0]);
            console.log(countData)
          }
        });
    }
    fetchCount()
  },[service])



  if (data === null) {
    return <Navigate to="/auth/login" />;
  } else {
    if (data.subscriber === 0) {
      return <Navigate to="/pricing" />;
    }
  }
  

  if (service !== null && countData !== null) {
    return <History service={service} countData={countData}/>;
  } else {
    return (
      <div>
        <Sidebar tab="Services" />
        <Navbar />
        <Banner />
        <div className="service-main">
          <div className="service-main-title">
            <div className="service-title-top">Your Services</div>
          </div>

          <div className="service-main-card">
            {serviceData.map((data, key) => (
              <ServiceCard key={key} content={data} setService={setService} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Service;
