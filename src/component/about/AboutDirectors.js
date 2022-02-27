import React from "react";
import img from "../../images/character1.svg";
import { BsLinkedin } from "react-icons/bs";
import AboutCard from "./AboutCard";

function AboutDirectors() {

    const directorData = [
        {
            id: 0,
            img: img,
            name: 'Sanjeev Kumar',
            title: 'Jobless at jobless',
            content: 'Ea aperiri ponderum ullamcorper sit, verear offendit imperdiet nameu, liber delicato tractatos ad.',
            linkedIn: 'abc'
        },
        {
            id: 1,
            img: img,
            name: 'Sanjeev Kumar',
            title: 'Jobless at jobless',
            content: 'Ea aperiri ponderum ullamcorper sit, verear offendit imperdiet nameu, liber delicato tractatos ad.',
            linkedIn: 'abc'
        }
    ]

  return (
    <div className="about-director-container">
      <div className="director-title">
        <p>Our Directors</p>
      </div>
      <div className="director-content">
        {/* <div className="director-card">
          <div className="director-card-img">
            <img src={img} alt="Couldn't Load!" style={{height:`100px`,width:`100px`}}/>
          </div>
          <div className="director-card-name">
            <p>Sanjeev Kumar</p>
          </div>
          <div className="director-card-role">
            <p>Jobless at jobless</p>
          </div>
          <div className="director-card-detail">
            <p>
              Ea aperiri ponderum ullamcorper sit, verear offendit imperdiet nam
              eu, liber delicato tractatos ad.
            </p>
          </div>
          <br />
          <div className="director-card-linkedin">
            <BsLinkedin style={{height:`25px`,width:`25px`,color:`rgb(4,64,102)`}} />
          </div>
        </div>
        <div className="director-card">
          <div className="director-card-img">
            <img src={img} alt="Couldn't Load!" style={{height:`100px`,width:`100px`}}/>
          </div>
          <div className="director-card-name">
            <p>Sanjeev Kumar</p>
          </div>
          <div className="director-card-role">
            <p>Jobless at jobless</p>
          </div>
          <div className="director-card-detail">
            <p>
              Ea aperiri ponderum ullamcorper sit, verear offendit imperdiet nam
              eu, liber delicato tractatos ad.
            </p>
          </div>
          <br />
          <div className="director-card-linkedin">
            <BsLinkedin style={{height:`25px`,width:`25px`,color:`rgb(4,64,102)`}} />
          </div>
        </div> */}
        {directorData.map((data,key)=> (
            <AboutCard data={data} />
        ))}
      </div>
    </div>
  );
}

export default AboutDirectors;
