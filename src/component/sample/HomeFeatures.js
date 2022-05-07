import React from "react";
import FeatureCard from "./FeatureCard";

function HomeFeatures() {
  const featureData = [
    {
      id: 0,
      img: "https://dental-for-home.s3.us-west-2.amazonaws.com/feature1.jpeg",
      content: "Video Consultancy",
    },
    {
      id: 1,
      img: "https://dental-for-home.s3.us-west-2.amazonaws.com/feature2.jpeg",
      content: "Check Up",
    },
    {
      id: 2,
      img: "https://dental-for-home.s3.us-west-2.amazonaws.com/feature3.jpeg",
      content: "Diagnosis",
    },
    {
      id: 3,
      img: "https://dental-for-home.s3.us-west-2.amazonaws.com/feature4.jpeg",
      content: "Dental Aids",
    },
    {
      id: 4,
      img: "https://dental-for-home.s3.us-west-2.amazonaws.com/feature5.jpeg",
      content: "Free Pick and Drop",
    },
  ];

  return (
    <div id="home-about" className="home-features-container">
      <div className="features-title">
        <p>Our Features</p>
      </div>
      <div className="features-content">
        {featureData.map((data, key) => (
          <FeatureCard key={key} data={data} />
        ))}
      </div>
    </div>
  );
}

export default HomeFeatures;
