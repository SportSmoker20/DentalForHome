import React from "react";
import img from "../../images/character1.svg";
import { BsLinkedin } from "react-icons/bs";
import AboutCard from "./AboutCard";

function AboutDirectors() {
  const directorData = [
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
  ];

  return (
    <div className="about-director-container">
      <div className="director-title">
        <p>Our Directors</p>
      </div>
      <div className="director-content">
        {directorData.map((data, key) => (
          <AboutCard data={data} />
        ))}
      </div>
    </div>
  );
}

export default AboutDirectors;
