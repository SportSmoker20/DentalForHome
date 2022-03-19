import React from "react";

function Offer(props) {
  return (
    <div className="offer-container">
      <div className="offer-top">
        <p>{props.data.value}</p>
      </div>
      <div className="offer-content">
        <p>Get {props.data.value} off on family plans</p>
      </div>
      <div className="offer-buy">
        <p>Buy Now</p>
      </div>
    </div>
  );
}

export default Offer;
