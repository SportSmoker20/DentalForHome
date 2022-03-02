import React from "react";
import logo from "../../images/sampleBannerLogo.PNG";
import img1 from "../../images/benyamin-bohlouli-vVKh9xeLub4-unsplash.jpg";
import img2 from "../../images/vivek-kumar-a-_1PPjnbUg-unsplash.jpg";
import img3 from "../../images/portrait-family-reading-book-together-sitting-sofa.jpg";
import { Slide } from "react-slideshow-image";
import "../../css/DashBoard.css";

function HomeBanner() {
  const slideImages = [
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img3,
    },
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
    // indicators: (i) => <div className="indicator">{i + 1}</div>
  };

  return (
    // <div id="HomeBanner" className="home-banner-container">
    /* <div className="home-banner-center">
        <div className="home-banner-title">
          <p>Smiles At Your Doorstep</p>
        </div>
        <div className="home-banner-content">
          <p>
            Dental for home, bringing smiles at your doorstep, is the India's
            first digital dental service platform providing dental services at
            your doorstep.
          </p>
        </div>
        <br />
        <br />
        <br />
        <div className="home-banner-book">
          <p>Book Appointment</p>
        </div>
      </div>
      <div className="home-banner-right">
        <img src={logo} className="home-banner-right-image"/>
      </div> */
    //   <Slide arrows="false" >
    //      {slideImages.map((slideImage, index)=> (
    //         <div className="silderimg-container"  key={index} style={{borderRadius:`20px`}}>
    //               <img className="sliderimg" src={slideImage.src} />
    //             {/* <span>{slideImage.caption}</span> */}
    //         </div>
    //       ))}
    //     </Slide>

    // </div>
    <div className="home-main">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div
            className="home-silderimg-container"
            key={index}
            style={{ borderRadius: `20px` }}
          >
            {/* <img className="home-sliderimg" src={slideImage.src} /> */}
            <div className="home-banner-center">
            <div className="banner-fake" />
            <div  className="banner-real">
              <div className="home-banner-title">
                <p>Smiles At Your Doorstep</p>
              </div>
              <div className="home-banner-content">
                <p>
                  Dental for home, bringing smiles at your doorstep, is the
                  India's first digital dental service platform providing dental
                  services at your doorstep.
                </p>
              </div>
              <br />
              <br />
              <br />
              <div className="home-banner-book">
                <p>Book Appointment</p>
              </div>
            </div>
            {/* <div className="home-banner-right">
              <img src={logo} className="home-banner-right-image" />
            </div> */}
            {/* <span>{slideImage.caption}</span> */}
          </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default HomeBanner;
