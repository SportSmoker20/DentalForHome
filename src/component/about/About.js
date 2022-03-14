import React from "react";
import HomeNavbar from "../sample/HomeNavbar";
import AboutBanner from "./AboutBanner";
import AboutWhat from "./AboutWhat";
import HomeService from "../sample/HomeService";
import AboutDirectors from "./AboutDirectors";
import AboutTeam from "./AboutTeam";
import HomeFAQ from "../sample/HomeFAQ";
import HomeFooter from "../sample/HomeFooter";

function About() {
  return (
    <div className="about-container">
      <HomeNavbar tabName={"about"} />
      <AboutBanner />
      <AboutWhat />
      <HomeService />
      <AboutDirectors />
      <AboutTeam />
      <HomeFAQ />
      <HomeFooter />
    </div>
  );
}

export default About;
