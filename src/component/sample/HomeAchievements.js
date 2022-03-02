import React from "react";
import img2 from "../../images/achi1.png";
import img4 from "../../images/achi2.png";
import img1 from "../../images/achi3.png";
import img3 from "../../images/achi4.png";

function HomeAchievements() {
  return (
    <div className="home-achievements-container">
      <div className="achievements-title">
        <p>Our Achievements</p>
      </div>
      <div className="achievements-row">
        <div className="achievements-content">
          <div className="achievements-img">
            <img src={img1} alt={"Couldn't Load"} style={{width:`100px`,height:`100px`,paddingBottom:`20px`}}/>
          </div>
          <div className="achievements-text">
            <p>10,000+ Smiles</p>
          </div>
        </div>
        <div className="achievements-content">
          <div className="achievements-img">
            <img src={img2} alt={"Couldn't Load"} style={{width:`100px`,height:`100px`,paddingBottom:`20px`}}/>
          </div>
          <div className="achievements-text">
            <p>19+ Clinics</p>
          </div>
        </div>
        <div className="achievements-content">
          <div className="achievements-img">
            <img src={img3} alt={"Couldn't Load"} style={{width:`100px`,height:`100px`,paddingBottom:`20px`}}/>
          </div>
          <div className="achievements-text">
            <p>50+ Dentistry Specialists</p>
          </div>
        </div>
        <div className="achievements-content">
          <div className="achievements-img">
            <img src={img4 } alt={"Couldn't Load"} style={{width:`100px`,height:`100px`,paddingBottom:`20px`}}/>
          </div>
          <div className="achievements-text">
            <p>5+ years of experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAchievements;
