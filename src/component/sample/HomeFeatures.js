import React from "react";
import FeatureCard from "./FeatureCard";


function HomeFeatures() {
  const featureData = [
    {
      id: 0,
      img: 'https://dentalforhome.s3.amazonaws.com/images/feature1.jpeg',
      content: "Video Consultancy",
    },
    {
      id: 1,
      img: 'https://dentalforhome.s3.amazonaws.com/images/feature2.jpeg',
      content: "Check Up",
      
    },
    {
      id: 2,
      img: 'https://dentalforhome.s3.amazonaws.com/images/feature3.jpeg',
      content: "Diagnosis",
      
    },
    {
      id: 3,
      img: 'https://dentalforhome.s3.amazonaws.com/images/feature4.jpeg',
      content: "Dental Aids",
      
    },
    {
      id: 4,
      img: 'https://dentalforhome.s3.amazonaws.com/images/feature5.jpeg',
      content: "Free Pick and Drop",
    },
    // {
    //   id: 5,
    //   img: img,
    //   content: "Video Consultancy",
    // },
  ];
  console.log(featureData);

  return (
    <div id="home-about" className="home-features-container">
      <div className="features-title">
        <p>Our Features</p>
      </div>
      <div className="features-content">
        {featureData.map((data, key) => (
          <FeatureCard data={data} />
        ))}
      </div>
    </div>
  );
}

export default HomeFeatures;
