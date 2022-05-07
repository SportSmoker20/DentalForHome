import React from "react";
import "../../css/DashBoard.css";
import { Slide } from "react-slideshow-image";
import "../../css/DashBoard.css";

import "react-slideshow-image/dist/styles.css";
function Banner() {
  const slideImages = [
    {
      src: "https://dental-for-home.s3.us-west-2.amazonaws.com/banner1.jpg",
    },
    {
      src: "https://dental-for-home.s3.us-west-2.amazonaws.com/banner2.jpg",
    },
  ];
  const properties = {
    duration: 2000,
    autoplay: true,
    transitionDuration: 1000,
    arrows: false,
    infinite: true,
    easing: "ease",
    indicators: false,
  };

  return (
    <div className="banner-main">
      <Slide {...properties} className="ban-slide">
        {slideImages.map((slideImage, index) => (
          <div
            className="silderimg-container"
            key={index}
            alt="Coludn't Load"
            style={{ borderRadius: `20px` }}
          >
            <img
              className="sliderimg"
              src={slideImage.src}
              alt="Coludn't Load"
            />
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Banner;
