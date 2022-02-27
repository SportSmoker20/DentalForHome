import React from "react";
import { ImQuotesLeft } from "react-icons/im";

function HappySmileCard(props) {
  return (
    <div className="happy-smile-card-container">
      <div className="smile-card-top">
        <div className="smile-quote">
          <ImQuotesLeft
            style={{ height: `60px`, width: `60px`, color: `rgb(216,224,244)` }}
          />
        </div>
        <div className="smile-top-text">
          <p>{props.data.content}</p>
        </div>
      </div>
      <div className="smile-card-bottom">
        <div className="smile-bottom-img">
          <img
            src={props.data.img}
            style={{ height: `40px`, width: `40px` }}
            alt={"Couldn't Load"}
          />
        </div>
        <div className="smile-bottom-text">
          <div className="smile-bottom-text-top">
            <p>{props.data.name}</p>
          </div>
          <div className="smile-bottom-text-bottom">
            <p>{props.data.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HappySmileCard;
