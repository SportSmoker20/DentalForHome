import React from "react";

function AboutBanner() {
  return (
    <div className="about-banner-container">
      <div className="about-top">
        <img
          src="https://dental-for-home.s3.us-west-2.amazonaws.com/logoMain.png"
          alt="Couldn't Load"
        />
      </div>
      <div className="about-bottom">
        <div className="about-bottom-left">
          <div className="about-bottom-left-title">
            <p>Who we are?</p>
          </div>
          <div className="about-bottom-left-content">
            <p>
              Dental for home, bringing smiles at your doorstep, is the India’s
              first digital dental service platform providing dental services at
              your doorstep. At dental for home, we help you look after your own
              dental health effortlessly as well as take care of your loved ones
              too. You can have best dental treatments and other services easily
              at home- with just a few clicks away.!
            </p>
          </div>
        </div>
        <div className="about-bottom-right">
          <img src="https://dental-for-home.s3.us-west-2.amazonaws.com/aboutWhoAre.PNG" />
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
