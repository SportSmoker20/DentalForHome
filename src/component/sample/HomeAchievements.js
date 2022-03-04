import React from "react";

function HomeAchievements() {
  return (
    <div className="home-achievements-container">
      <div className="achievements-title">
        <p>Our Achievements</p>
      </div>
      <div className="achievements-row">
        <div className="achievements-content">
          <div className="achievements-img">
            <img src='https://dentalforhome.s3.amazonaws.com/images/achie3.png' alt={"Couldn't Load"} style={{width:`100px`,height:`100px`,paddingBottom:`20px`}}/>
          </div>
          <div className="achievements-text">
            <p>10,000+ Smiles</p>
          </div>
        </div>
        <div className="achievements-content">
          <div className="achievements-img">
            <img src='https://dentalforhome.s3.amazonaws.com/images/achie1.png' alt={"Couldn't Load"} style={{width:`100px`,height:`100px`,paddingBottom:`20px`}}/>
          </div>
          <div className="achievements-text">
            <p>19+ Clinics</p>
          </div>
        </div>
        <div className="achievements-content">
          <div className="achievements-img">
            <img src='https://dentalforhome.s3.amazonaws.com/images/achie4.png' alt={"Couldn't Load"} style={{width:`100px`,height:`100px`,paddingBottom:`20px`}}/>
          </div>
          <div className="achievements-text">
            <p>50+ Dentistry Specialists</p>
          </div>
        </div>
        <div className="achievements-content">
          <div className="achievements-img">
            <img src='https://dentalforhome.s3.amazonaws.com/images/achie2.png' alt={"Couldn't Load"} style={{width:`100px`,height:`100px`,paddingBottom:`20px`}}/>
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
