import React, { useState } from "react";
import '../../css/DashBoard.css'
import { Slide } from 'react-slideshow-image';
import '../../css/DashBoard.css'

import 'react-slideshow-image/dist/styles.css'
function Banner() {
    const slideImages = [
        {
            src:'https://dentalforhome.s3.amazonaws.com/images/banner1.png'
        },
        {
          src:'https://dentalforhome.s3.amazonaws.com/images/banner2.png'
        },
        // {
        //   src:'https://dentalforhome.s3.amazonaws.com/images/banner.png'
        // }
        // {
          
        // },
      ];
      const properties = {
        duration: 2000,
        autoplay: true,
        transitionDuration: 1000,
        arrows: false,
        infinite: true,
        easing: "ease",
        indicators: false
        // indicators: (i) => <div className="indicator">{i + 1}</div>
      };
      

  return (
    <div className="banner-main">
        <Slide {...properties} className="ban-slide">
         {slideImages.map((slideImage, index)=> (
            <div className="silderimg-container"  key={index} style={{borderRadius:`20px`}}>
                  <img className="sliderimg" src={slideImage.src} />
                {/* <span>{slideImage.caption}</span> */}
            </div>
          ))} 
        </Slide>
      </div>
  );
}

export default Banner;
