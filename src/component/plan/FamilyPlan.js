import React from "react";
import Banner from "../dashboard/Banner";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";
import PlanCard from "./PlanCard";
import image1 from "../../images/card1.svg";
import image2 from "../../images/card2.svg";
import image3 from "../../images/card3.svg";
import image4 from "../../images/card4.svg";

function FamilyPlan() {
  const data = [
    {
      src: image1,
    },
    {
      src: image2,
    },
    {
      src: image3,
    },
    {
      src: image4,
    },
  ];
  return (
    <div>
      <Sidebar tab='patient' />
      <Navbar />
      <Banner />
      <div className="family-plan-card">
        {data.map((cont, key) => (
          <PlanCard key={key} imgSrc={cont.src} />
        ))}
      </div>
    </div>
  );
}

export default FamilyPlan;
