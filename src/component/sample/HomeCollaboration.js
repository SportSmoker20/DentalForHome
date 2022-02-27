import React from "react";
import img1 from "../../images/biocoin.png";

function HomeCollaboration() {
  return (
    <div className="home-collaboration-contianer">
      <div className="collaboration-left">
        <div className="collaboration-title">
          <p>Our Collaborations</p>
        </div>
        <div className="collaboration-content">
          <p>
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quoerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum.
          </p>
        </div>
      </div>
      <div className="collaboration-right">
        <img src={img1} alt="Couldn't Load!" />
      </div>
    </div>
  );
}

export default HomeCollaboration;
