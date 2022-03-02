import React from "react";
import img1 from "../../images/biocoin.png";

function HomeCollaboration() {
  return (
    <div className="home-collaboration-contianer">
      <div className="collaboration-left">
        <div className="collaboration-title">
          <p>In Joint-Venture  With</p>
        </div>
        <div className="collaboration-content">
          <p>
          Holistic Biocon Inc began operations as a importer and exporter of wholesale goods including Commodities, Covid supply (export / import), Finest market supply, API chemical supply, Commodities trading, Forex trade
          </p>
        </div>
      </div>
      <div className="collaboration-right">
        <img src={img1} alt="Couldn't Load!" />
      </div>
    </div>
  );
}

export default HomeCollaboration;
