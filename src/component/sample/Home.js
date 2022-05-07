import React from "react";
import HomeNavbar from "./HomeNavbar";
import HomeBanner from "./HomeBanner";
import HomeFeatures from "./HomeFeatures";
import HomeService from "./HomeService";
import HomeMap from "./HomeMap";
import HomeWhy from "./HomeWhy";
import HomeAchievements from "./HomeAchievements";
import HomeCollaboration from "./HomeCollaboration";
import HomeHappySmile from "./HomeHappySmile";
import HomeFAQ from "./HomeFAQ";
import HomeFooter from "./HomeFooter";

function Home() {
  return (
    <div className="home-container">
      <HomeNavbar tabName={"home"} />
      {/* <HomeBanner /> */}
      <HomeFeatures />
      <HomeService />
      <HomeMap />
      <HomeWhy />
      <HomeAchievements />
      <HomeCollaboration />
      <HomeHappySmile />
      <HomeFAQ />
      <HomeFooter />
    </div>
  );
}

export default Home;
