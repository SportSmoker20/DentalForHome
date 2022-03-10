import React from "react";
import { MdDesignServices } from "react-icons/md";
import OptionCard from "./OptionCard";
// import bookingIcon from "../../images/bookingIcon.png";
// import downloadIcon from "../../images/downloadIcon.png";
// import serviceIcon from "../../images/serviceIcon.png";
// import prescprIcon from "../../images/prescprIcon.png";

function DashBoardOptions() {
  const optionData = [
    {
      text: "Services",
      img: "https://dentalforhome.s3.amazonaws.com/images/optionService.png",
      bg: "rgb(244,251,255)",
      color: "rgb(36,168,251)",
      link: '/service'
    },
    {
      text: "Booking",
      img: "https://dentalforhome.s3.amazonaws.com/images/optionBook.png",
      bg: "rgb(242,241,255)",
      color: "rgb(122,110,253)",
      link: '/booking'
    },
    {
      text: "Pic & Drop",
      img: "https://dentalforhome.s3.amazonaws.com/images/optionPick.png",
      bg: "rgb(254,258,239)",
      color: "rgb(255,199,1)",
      link: '/history'
    },
    {
      text: "Prescription",
      img: "https://dentalforhome.s3.amazonaws.com/images/optionPrescription.png",
      bg: "rgb(255,249,233)",
      color: "rgb(254,83,98)",
      link: '/history'
    },
    {
      text: "Downloads",
      img: "https://dentalforhome.s3.amazonaws.com/images/optionDownload.png",
      bg: "rgb(248,255,233)",
      color: "rgb(155,221,16)",
      link: '/history'
    },
  ];

  return (
    <div className="options-main">
      {/* <div className="options-main-1">
        <div className="option service">
          <img
            src={serviceIcon}
            style={{ height: `60px`, width: `60px`, paddingRight: `20px` }}
          />
          <div>Services</div>
        </div>
        <div className="option booking">
          <img
            src={bookingIcon}
            style={{ height: `60px`, width: `60px`, paddingRight: `20px` }}
          />
          <div>Booking</div>
        </div>
      </div>
      <div className="options-main-1">
        <div className="option prescription">
          <img
            src={prescprIcon}
            style={{ height: `60px`, width: `60px`, paddingRight: `20px` }}
          />
          <div>Prescription</div>
        </div>
        <div className="option download">
          <img
            src={downloadIcon}
            style={{ height: `60px`, width: `60px`, paddingRight: `20px` }}
          />
          <div>My Downloads</div>
        </div>
      </div> */}
      <div className="option-main-sub">
      <div className="service-main-title">
            <div className="service-title-top">Your Easy Access</div>
            {/* <div className="service-title-bottom">Services from your plan</div> */}
          </div>
        <div className="service-main-card option-card">
          {optionData.map((data) => (
            <OptionCard content={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashBoardOptions;
