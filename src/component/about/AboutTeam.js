import React from "react";
import AboutTeamCard from "./AboutTeamCard";

function AboutTeam() {
  const teamData = [
    {
      id: 0,
      img: "https://dentalforhome.s3.amazonaws.com/images/character1.svg",
      name: "Sachin Soni",
      title: "Jobless at jobless",
      content:
        "Ea aperiri ponderum ullamcorper sit, verear offendit imperdiet nameu, liber delicato tractatos ad.",
      linkedIn: "abc",
    },
    {
      id: 1,
      img: "https://dentalforhome.s3.amazonaws.com/images/character1.svg",
      name: "Bhupesh Sarangal",
      title: "Jobless at jobless",
      content:
        "Ea aperiri ponderum ullamcorper sit, verear offendit imperdiet nameu, liber delicato tractatos ad.",
      linkedIn: "abc",
    },
    {
      id: 2,
      img: "https://dentalforhome.s3.amazonaws.com/images/character1.svg",
      name: "Prakhar Kulshrestha",
      title: "Jobless at jobless",
      content:
        "Ea aperiri ponderum ullamcorper sit, verear offendit imperdiet nameu, liber delicato tractatos ad.",
      linkedIn: "abc",
    },
    {
      id: 3,
      img: "https://dentalforhome.s3.amazonaws.com/images/character1.svg",
      name: "Aditya Sharma",
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
          <AboutTeamCard key={key} data={data} />
        ))}
      </div>
    </div>
  );
}

export default AboutTeam;
