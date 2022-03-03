import React from "react";
import HomeServiceCard from "./HomeServiceCard";


function HomeService() {
  const serviceData = [
    {
      id: 0,
      img: 'https://dentalforhome.s3.amazonaws.com/images/sampleService11.png',
      title: "Regular dental checkups",
      content:
        "During a dental check-up, dentists look for any signs of cavities, gum disease or yellowish plaque and even sensitivity.",
    },
    {
      id: 1,
      img: 'https://dentalforhome.s3.amazonaws.com/images/sampleService21.png',
      title: "Root canal treatment",
      content:
        "To repair and save a badly damaged or infected tooth instead of removing it. As it is always better to preserve the tooth rather than extracting it.",
    },
    {
      id: 2,
      img: 'https://dentalforhome.s3.amazonaws.com/images/sampleService31.png',
      title: "Dental filling",
      content:
        "Fillings are also used to repair cracked or broken teeth and teeth that have been decayed.",
    },
    {
      id: 3,
      img: 'https://dentalforhome.s3.amazonaws.com/images/sampleService41.png',
      title: "Teeth extraction",
      content:
        "Extraction means to have a tooth removed, usually because of disease, trauma or crowding.",
    },
    {
      id: 4,
      img: 'https://dentalforhome.s3.amazonaws.com/images/sampleService51.png',
      title: "Scaling and root planning",
      content:
        "Scaling is when your dentist removes all the plaque(yellowish) and tartar (hardened plaque) above and below the gumline.",
    },
    {
      id: 5,
      img: 'https://dentalforhome.s3.amazonaws.com/images/sampleService61.png',
      title: "Teeth whitening",
      content:
        "Tooth bleaching is the process of lightening the color of human teeth and make it white and shining bright.",
    },
    {
      id: 6,
      img: 'https://dentalforhome.s3.amazonaws.com/images/sampleService71.png',
      title: "Braces",
      content:
        "Braces are dental tools that help correct problems with your teeth, like crowding, crooked teeth, or teeth that are out of alignment.",
    },
    {
      id: 7,
      img: 'https://dentalforhome.s3.amazonaws.com/images/sampleService81.png',
      title: "Smile design",
      content: "To make more beautiful ad flattering smiles.",
    },
  ];

  return (
    <div id="home-service" className="home-service-container">
      <div className="service-title">
        <p>Our Services</p>
      </div>
      <div className="service-content">
        {serviceData.map((data, key) => (
          <HomeServiceCard data={data} />
        ))}
      </div>
    </div>
  );
}

export default HomeService;
