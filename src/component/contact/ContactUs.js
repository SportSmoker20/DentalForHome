import React from "react";
import HomeNavbar from "../sample/HomeNavbar";
import ContactMain from "./ContactMain";
import HomeFAQ from "../sample/HomeFAQ";
import HomeFooter from "../sample/HomeFooter";
import ContactTeam from "./ContactTeam";

function ContactUs() {
  return (
    <div className="contact-us-container">
      <HomeNavbar tabName={"contact"} />
      <ContactMain />
      <ContactTeam  />
      <HomeFAQ />
      
      <HomeFooter />
    </div>
  );
}

export default ContactUs;
