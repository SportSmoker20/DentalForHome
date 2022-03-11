import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosCall, IoMdMail } from "react-icons/io";

function AboutTeamCard(props) {
  return (
    <div className="team-card">
      {/* <div className="team-card-img">
        <img
          src={props.data.img}
          alt="Couldn't Load!"
          style={{ height: `100px`, width: `100px` }}
        />
      </div> */}
      <div className="team-card-name">
        <p>{props.data.office}</p>
      </div>
      <div className="team-card-role">
       <div> <HiLocationMarker style={{height:`30px`,width:`26px`,color:`#044066`}}/></div>
        <p>{props.data.address}</p>
      </div>
      <div className="team-card-role">
        <div><IoIosCall style={{height:`30px`,width:`26px`,color:`#044066`}}/></div>
        <p>{props.data.mobile}</p>
      </div>
      <div className="team-card-role">
       <div> <IoMdMail style={{height:`30px`,width:`26px`,color:`#044066`}} /></div>
        <p>{props.data.email}</p>
      </div>
      <br />
      {/* <div className="team-card-linkedin">
        <BsLinkedin
          style={{ height: `25px`, width: `25px`, color: `rgb(4,64,102)` }}
        />
      </div> */}
    </div>
  );
}

export default AboutTeamCard;
