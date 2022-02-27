import { getByTitle } from "@testing-library/react";
import React from "react";
import img from "../../images/character1.svg";
import AboutCard from "./AboutCard";

function AboutTeam() {
  const teamData = [
    {
      id: 0,
      img: img,
      name: "Sanjeev Kumar",
      title: "Jobless at jobless",
      content:
        "Ea aperiri ponderum ullamcorper sit, verear offendit imperdiet nameu, liber delicato tractatos ad.",
      linkedIn: "abc",
    },
    {
      id: 1,
      img: img,
      name: "Sanjeev Kumar",
      title: "Jobless at jobless",
      content:
        "Ea aperiri ponderum ullamcorper sit, verear offendit imperdiet nameu, liber delicato tractatos ad.",
      linkedIn: "abc",
    },
    {
      id: 2,
      img: img,
      name: "Sanjeev Kumar",
      title: "Jobless at jobless",
      content:
        "Ea aperiri ponderum ullamcorper sit, verear offendit imperdiet nameu, liber delicato tractatos ad.",
      linkedIn: "abc",
    },
    {
      id: 3,
      img: img,
      name: "Sanjeev Kumar",
      title: "Jobless at jobless",
      content:
        "Ea aperiri ponderum ullamcorper sit, verear offendit imperdiet nameu, liber delicato tractatos ad.",
      linkedIn: "abc",
    },
  ];

  return (
    <div className="about-team-container">
      <div className="about-team-title">
        <p>Our Team</p>
      </div>
      <div className="team-content">
        {teamData.map((data, key) => (
          <AboutCard data={data} />
        ))}
      </div>
    </div>
  );
}

export default AboutTeam;
