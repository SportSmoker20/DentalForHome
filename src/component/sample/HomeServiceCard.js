import React from "react";

function HomeServiceCard(props) {
  return (
    <div className="home-service-card-container">
      <div className="home-service-img">
        <img
          src={props.data.img}
          style={{ width: `200px`, height: `200px` }}
          alt={"Couldn't Load"}
        />
      </div>
      <div className="home-service-title">
        <p>{props.data.title}</p>
      </div>
      <div className="home-service-content">
        <p>{props.data.content}</p>
      </div>
    </div>
  );
}

export default HomeServiceCard;
