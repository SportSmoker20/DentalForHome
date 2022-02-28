import React, { useEffect, useState } from "react";
import img1 from "../../images/bookingIcon.png";
import Faq from "react-faq-component";
import { AiOutlinePlus } from "react-icons/ai";

function HomeFooter() {
  const [width, setWidth] = useState(window.innerWidth);

  const data = {
    rows: [
      {
        title: <p className="footer-data">Dental For Home</p>,
        content: (
          <div>
            <p>About</p>
            <p>Guiding Principles</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Contact</p>
            <p>Blog</p>
          </div>
        ),
      },
      {
        title: <p className="footer-data">For Patients</p>,
        content: (
          <div>
            <p>Ask free health questions</p>
            <p>Search for doctors</p>
            <p>Search for clinics</p>
            <p>Read health articles</p>
            <p>Read about medicines</p>
            <p>Consult a doctor</p>
            <p>Order medicines</p>
            <p>Health app</p>
          </div>
        ),
      },
      {
        title: <p className="footer-data">For Doctors</p>,
        content: (
          <div>
            <p>DFH Consult</p>
            <p>DFH Health feed</p>
            <p>DFH Profile</p>
            <p>DFH Pro App</p>
          </div>
        ),
      },
      {
        title: <p className="footer-data">For Clinics</p>,
        content: (
          <div>
            <p>DFH Prime</p>
            <p>Ray for DFH</p>
            <p>DFH Reach</p>
          </div>
        ),
      },
      {
        title: <p className="footer-data">For Hospitals</p>,
        content: (
          <div>
            <p>DFH Prime</p>
            <p>Insta by DFH</p>
            <p>Qikwell by DFH</p>
            <p>DFH Profile</p>
            <p>DFH Reach</p>
          </div>
        ),
      },
      {
        title: <p className="footer-data">More</p>,
        content: (
          <div>
            <p>Help</p>
            <p>Developers</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Subscribers</p>
            <p>Sitemap</p>
          </div>
        ),
      },
      {
        title: <p className="footer-data">Social</p>,
        content: (
          <div>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Youtube</p>
            <p>GitHub</p>
          </div>
        ),
      },
    ],
  };

  const styles = {
    titleTextColor: "grey",
    rowTitleColor: "rgb(81, 82, 82)",
    rowContentColor: "rgb(184, 177, 177)",
    arrowColor: "rgb(4,64,102)",
  };
  const config = {
    animate: true,
    arrowColor: "rgb(4,64,102)",
    tabFocus: true,
    arrowIcon: <AiOutlinePlus />,
  };
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });
  if (width <= 700) {
    return (
      <div className="footer-small-main">
        <div className="faq-small-container">
          <Faq data={data} styles={styles} config={config} />
        </div>
        <div className="footer-small-logo"></div>
        <div className="footer-small-copyright">
          <div className="footer-small-copyright-text">
            <p>copyright 2022. Dental For Home. All rights reserved</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="home-contact" className="home-footer-container">
        <div className="footer-top">
          <div className="foot-top-dfh">
            <p style={{ fontWeight: `bold`, fontSize: `17px` }}>
              Dental For Home
            </p>
            <p>About</p>
            <p>Guiding Principles</p>
            <p>Careers</p>
            <p>Press</p>
            <p>Contact</p>
            <p>Blog</p>
          </div>
          <div className="foot-top-dfh">
            <p style={{ fontWeight: `bold`, fontSize: `17px` }}>For Patients</p>
            <p>Ask free health questions</p>
            <p>Search for doctors</p>
            <p>Search for clinics</p>
            <p>Read health articles</p>
            <p>Read about medicines</p>
            <p>Consult a doctor</p>
            <p>Order medicines</p>
            <p>Health app</p>
          </div>
          <div className="foot-top-dfh">
            <p style={{ fontWeight: `bold`, fontSize: `17px` }}>For Doctors</p>
            <p>DFH Consult</p>
            <p>DFH Health feed</p>
            <p>DFH Profile</p>
            <p>DFH Pro App</p>
            <br />
            <p style={{ fontWeight: `bold`, fontSize: `17px` }}>For Clinics</p>
            <p>DFH Prime</p>
            <p>Ray for DFH</p>
            <p>DFH Reach</p>
          </div>
          <div className="foot-top-dfh">
            <p style={{ fontWeight: `bold`, fontSize: `17px` }}>
              For Hospitals
            </p>
            <p>DFH Prime</p>
            <p>Insta by DFH</p>
            <p>Qikwell by DFH</p>
            <p>DFH Profile</p>
            <p>DFH Reach</p>
          </div>
          <div className="foot-top-dfh">
            <p style={{ fontWeight: `bold`, fontSize: `17px` }}>More</p>
            <p>Help</p>
            <p>Developers</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Subscribers</p>
            <p>Sitemap</p>
          </div>
          <div className="foot-top-dfh">
            <p style={{ fontWeight: `bold`, fontSize: `17px` }}>Social</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>LinkedIn</p>
            <p>Youtube</p>
            <p>GitHub</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-text">
            <img
              src={img1}
              style={{ height: `40px`, width: `40px` }}
              alt={"Couldn't Load"}
            />
            <p>Dental For Home</p>
          </div>
          <div className="footer-bottom-copyright">
            <p>copyright 2022. Dental For Home. All rights reserved</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeFooter;
