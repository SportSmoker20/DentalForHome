import React, { useState } from "react";
import '../../css/DashBoard.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Banner() {
    const slideImages = [
        {
            src:'https://dentalforhome.s3.amazonaws.com/images/download.jpg'
        },
        {
          src:'https://dentalforhome.s3.amazonaws.com/images/download.jpg'
        },
        {
          src:'https://dentalforhome.s3.amazonaws.com/images/download.jpg'
        }
        // {
          
        // },
      ];

  return (
    <div className="banner-main">
        <Slide arrows="false" >
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
