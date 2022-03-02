import React from "react";
import img1 from "../../images/images-removebg-preview.png";

function HomeMap() {
  return (
    <div className="home-map-container">
      <div className="map-left">
        <div className="map-title">
          <p>Our Locations</p>
        </div>
        <div className="map-content">
          <p>
            Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad, nam
            no suscipit quoerendum. At nam minimum ponderum. Est audiam animal
            molestiae te. Ex duo eripuit mentitum.
          </p>
        </div>
        <br />
        <br />
        <div className="map-explore">
          <p>Explore</p>
        </div>
      </div>
      <div className="map-right">
        <img className="map-right-img" src={img1} alt={"Couldn't Load"} />
      </div>
    </div>
  );
}

export default HomeMap;
