import React from "react";
import img1 from "../../images/why1.png";
import img2 from "../../images/why2.png";
import img3 from "../../images/why3.png";
import img4 from "../../images/why4.png";
import WhyCard from "./WhyCard";

function HomeWhy() {
  const whyData = [
    {
      id: 0,
      img: img1,
      title: "TRUST",
      content:
        "We build our patients trust in dental for home by providing best quality services from our expert dental team.",
    },
    {
      id: 1,
      img: img2,
      title: "SECURITY",
      content:
        "At dental for home, we stick to our core ethics and keep the patient’s data secure and private.",
    },
    {
      id: 2,
      img: img3,
      title: "AFFORDABLE",
      content:
        "At dental for home, we provide 50% discount on all services as compared to market price!!",
    },
    {
      id: 3,
      img: img4,
      title:"RESPECT",
      content:
        "It is the key value of dental for home to respect everyone. We respect patients’ feelings",
    },
  ];

  return (
    <div className="home-why-container">
      <div className="why-left">
        <div className="why-title">
          <p>Why Dental for Home?</p>
        </div>
        <div className="why-content">
          <p>
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quoerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum.
          </p>
        </div>
      </div>
      <div className="why-right">
        {whyData.map((data, key) => (
          <WhyCard data={data} />
        ))}
      </div>
    </div>
  );
}

export default HomeWhy;
