import React from "react";
import PlanCard from "./PlanCard";
import Offer from "./Offer";

function MyPlanCard() {
  const data = JSON.parse(localStorage.getItem("testObject"));

  const offerData = [
    {
      value: "30%",
    },
  ];

  return (
    <div className="new-plan-container">
      <div className="new-plan-top">
        <p>Your Plan</p>
      </div>
      <div className="new-plan-container-inner">
        <div>
          <PlanCard data={data} />
        </div>
        <div>
          <Offer data={offerData[0]} />
        </div>
      </div>
    </div>
  );
}

export default MyPlanCard;
