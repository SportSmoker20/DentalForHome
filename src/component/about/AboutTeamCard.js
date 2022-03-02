import React from "react";
import { BsLinkedin } from "react-icons/bs";

function AboutTeamCard(props) {
  return (
    <div className="team-card">
      <div className="team-card-img">
        <img
          src={props.data.img}
          alt="Couldn't Load!"
          style={{ height: `100px`, width: `100px` }}
        />
      </div>
      <div className="team-card-name">
        <p>{props.data.name}</p>
      </div>
      <div className="team-card-role">
        <p>{props.data.role}</p>
      </div>
      <div className="team-card-detail">
        <p>{props.data.content}</p>
      </div>
      <br />
      <div className="team-card-linkedin">
        <BsLinkedin
          style={{ height: `25px`, width: `25px`, color: `rgb(4,64,102)` }}
        />
      </div>
    </div>
  );
}

export default AboutTeamCard;
