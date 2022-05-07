import React from "react";
import OptionCard from "./OptionCard";

function DashBoardOptions() {
  const optionData = [
    {
      text: "Services",
      img: "https://dental-for-home.s3.us-west-2.amazonaws.com/optionService.png",
      bg: "rgb(244,251,255)",
      color: "rgb(36,168,251)",
      link: "/service",
    },
    {
      text: "Booking",
      img: "https://dental-for-home.s3.us-west-2.amazonaws.com/optionBook.png",
      bg: "rgb(242,241,255)",
      color: "rgb(122,110,253)",
      link: "/booking",
    },
    {
      text: "Pic & Drop",
      img: "https://dental-for-home.s3.us-west-2.amazonaws.com/optionPick.png",
      bg: "rgb(254,258,239)",
      color: "rgb(255,199,1)",
      link: "/history",
    },
    {
      text: "Prescription",
      img: "https://dental-for-home.s3.us-west-2.amazonaws.com/optionPrescription.png",
      bg: "rgb(255,249,233)",
      color: "rgb(254,83,98)",
      link: "/history",
    },
    {
      text: "Downloads",
      img: "https://dental-for-home.s3.us-west-2.amazonaws.com/optionDownload.png",
      bg: "rgb(248,255,233)",
      color: "rgb(155,221,16)",
      link: "/history",
    },
  ];

  return (
    <div className="options-main">
      <div className="option-main-sub">
        <div className="service-main-title">
          <div className="service-title-top">Your Easy Access</div>
        </div>
        <div className="service-main-card option-card">
          {optionData.map((data, key) => (
            <OptionCard key={key} content={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashBoardOptions;
