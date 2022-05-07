import React from "react";
import AboutCard from "./AboutCard";

function AboutDirectors() {
  const directorData = [
    {
      id: 0,
      img: "https://dental-for-home.s3.us-west-2.amazonaws.com/character1.svg",
      name: "Manish Kumar",
      title: "Jobless at jobless",
      content:
        "Ea aperiri ponderum ullamcorper sit, verear offendit imperdiet nameu, liber delicato tractatos ad.",
      linkedIn: "abc",
    },
    {
      id: 1,
      img: "https://dental-for-home.s3.us-west-2.amazonaws.com/character1.svg",
      name: "Sameer Kumar",
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
          <AboutCard key={key} data={data} />
        ))}
      </div>
    </div>
  );
}

export default AboutDirectors;
