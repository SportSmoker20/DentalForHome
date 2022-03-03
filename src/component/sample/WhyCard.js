import React from "react";

function WhyCard(props) {
  return (
    <div className="why-card-container">
      <div className="why-card-top">
        <img
          src={props.data.img}
          style={{ height: `120px`, width: `85px` }}
          alt={"Couldn't Load"}
        />
        <p className="why-card-top-title">{props.data.title}</p>
      </div>
      <div className="why-card-bottom">
        <p>{props.data.content}</p>
      </div>
    </div>
  );
}

export default WhyCard;
