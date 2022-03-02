import React from "react";

function FeatureCard(props) {
  return (
    <div className="feature-card-container">
      <div className="feature-card-img">
        <img src={props.data.img} className="feature-card-img-inner"/>
      </div>
      <div className="feature-card-bottom">
        <p>{props.data.content}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
