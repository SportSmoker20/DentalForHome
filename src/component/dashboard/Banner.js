import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import image1 from '../../images/slider1.jpg'
import image2 from '../../images/slider2.png'
import image3 from '../../images/slider3.png'
import img1 from  '../../images/download.jpg'
import '../../css/DashBoard.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function Banner() {
    const slideImages = [
        {
            src:img1
        },
        {
          src:img1
        },
        {
          src:img1
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
