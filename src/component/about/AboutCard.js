import React from "react";
import { BsLinkedin } from "react-icons/bs";

function AboutCard(props) {
  return (
    <div className="director-card">
      <div className="director-card-img">
        <img
          src={props.data.img}
          alt="Couldn't Load!"
          style={{ height: `100px`, width: `100px` }}
        />
      </div>
      <div className="director-card-name">
        <p>{props.data.name}</p>
      </div>
      <div className="director-card-role">
        <p>{props.data.role}</p>
      </div>
      <div className="director-card-detail">
        <p>{props.data.content}</p>
      </div>
      <br />
      <div className="director-card-linkedin">
        <BsLinkedin
          style={{ height: `25px`, width: `25px`, color: `rgb(4,64,102)` }}
        />
      </div>
    </div>
  );
}

export default AboutCard;
