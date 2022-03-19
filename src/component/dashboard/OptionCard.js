import React from "react";
import { Link } from "react-router-dom";

function OptionCard(props) {
  return (
    <div
      style={{ backgroundColor: `${props.content.bg}` }}
      className="service-card-container option-card"
    >
      <Link
        to={props.content.link}
        style={{
          textDecoration: `none`,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
        }}
      >
        <img
          src={props.content.img}
          style={{ height: `70px`, width: `70px` }}
          alt="Coludn't Load"
        />
        <div className="service-card-text">
          {/* <p className='service-card-text-inner' >Root Canal</p> */}
          <p
            className="service-card-text-inner"
            style={{ color: `${props.content.color}` }}
          >
            {props.content.text}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default OptionCard;
