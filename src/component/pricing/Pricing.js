import React from "react";
import HomeFooter from "../sample/HomeFooter";
import HomeNavbar from "../sample/HomeNavbar";
import PricingMain from "./PricingMain";
import "../../css/Pricing.css";

function Pricing() {
  return (
    <div className="pricing-container">
      <HomeNavbar tabName={"pricing"} />
      <PricingMain />
      <HomeFooter />
    </div>
  );
}

export default Pricing;
