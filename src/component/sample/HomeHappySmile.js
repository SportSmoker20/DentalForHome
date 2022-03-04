import React from "react";
import HappySmileCard from "./HappySmileCard";

function HomeHappySmile() {
  const happySmileData = [
    {
      id: 0,
      content:
        "Great experience, thank you! :) I was very anxious about getting my fillings done but Dr X and the team put me at ease, and it was honestly the nicest dentist experience I've ever had. Thank you! :)",
      img: 'https://dentalforhome.s3.amazonaws.com/images/character1.svg',
      name: "Dhanesh Tanak",
      role: "Jobless at jobless",
    },
    {
      id: 1,
      content:
        "Made me feel at ease I have a huge fear of dentists, and hadn't been in a long time. I had to have a tooth extracted and I was very nervous and they did everything they could to make me feel at ease and it go as smoothly as possible. ",
      img: 'https://dentalforhome.s3.amazonaws.com/images/character1.svg',
      name: "Sushil Koli",
      role: "Jobless at jobless",
    },
    {
      id: 2,
      content:
        "A huge thank you! I am staying in Delhi only for a short while and was incredibly worried when my tooth began to cause me such pain. However, after ringing multiple dental practices I feel more than lucky to have chosen this one. ",
      img: 'https://dentalforhome.s3.amazonaws.com/images/character1.svg',
      name: "Sujit Bhoir",
      role: "Jobless at jobless",
    },
    {
      id: 3,
      content:
        "Everyone at the clinic is absolutely lovely, and so kind. I have had a dental phobia most of my life, but after just one visit here, I'm actually looking forward to going back!",
      img: 'https://dentalforhome.s3.amazonaws.com/images/character1.svg',
      name: "Tanmay Chaudhari",
      role: "Jobless at jobless",
    },
  ];

  return (
    <div className="happy-smiles-main">
      <div className="happy-smiles-title-main">
        <p>Happy Smiles</p>
      </div>
      <div className="happy-smiles-container">
        {happySmileData.map((data, key) => (
          <HappySmileCard data={data} />
        ))}
      </div>
    </div>
  );
}

export default HomeHappySmile;
