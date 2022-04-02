import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../App";

function NewEditTop(props) {
  const profile = JSON.parse(localStorage.getItem("testObject"));
  // const memberData = [
  //   {
  //     name: profile.name,
  //     bgc: "#F8FFE9",
  //   },
  //   {
  //     name: "Sarthak Kapoor",
  //     bgc: "#F2F1FF",
  //   },
  //   {
  //     name: "Jayati Kapoor",
  //     bgc: "#FEEEEF",
  //   },
  //   {
  //     name: "Sameer Kapoor",
  //     bgc: "#FFF9E9",
  //   },
  // ];

  const { setLoggedIn, setSuperLoggedIn, setSubscribedLoggedIn } =
    useContext(UserContext);

  const logout = () => {
    setLoggedIn(false);
    setSuperLoggedIn(false);
    setSubscribedLoggedIn(false);
    localStorage.removeItem("testObject");
    console.log("7");
    return <Navigate to="/auth/login" />;
  };

  // console.log(memberData)
  return (
    <div>
      {/* <div className="new-booking-top-container edit">
        <div className="booking-top-container-title" style={{ height: `7vh` }}>
          <p>Your Profile</p>
        </div>
        <div className="booking-top-container-content">
          <p>Edit your personal details</p>
        </div>
      </div> */}
      <div className="navbar-main">
        <div className="navbar-text">
          <p style={{ fontWeight: `bold`, height: `10px` }}>Your Profile</p>
          <p>Edit your personal details</p>
        </div>

        <div className="navbar-icon">
          {/* <RiMessage2Fill className="navbar-icon-inner" />
            <FaBell className="navbar-icon-inner" /> */}
          <FiLogOut className="navbar-icon-inner" onClick={() => logout()} />
        </div>
      </div>
      <div className="new-edit-top-container">
        <div className="new-edit-top-left">
          <img
            src="https://dentalforhome.s3.amazonaws.com/images/character1.svg"
            style={{ height: `110px`, width: `110px` }}
            className="profile-image-inner"
            alt="Coludn't Load"
          />
        </div>

        <div className="new-edit-top-right">
          <div className="new-edit-top-right-title">
            <p>Members</p>
          </div>

          <div className="new-edit-top-right-content">
           
              <div
                // key={key}
                className="new-edit-top-right-name"
                style={{ backgroundColor: `#F8FFE9` }}
                onClick={() => props.setActive(profile)}
              >
                <p>{profile.name}</p>
              </div>
           

            {props.memberData[0] !== undefined ? (
              <div
                // key={key}
                className="new-edit-top-right-name"
                style={{ backgroundColor: `#F2F1FF` }}
                onClick={() => props.setActive(props.memberData[0])}
              >
                <p>{props.memberData[0].name}</p>
              </div>
            ) : (
              <div
                className="new-edit-top-right-name"
                style={{ backgroundColor: `#F2F1FF` }}
                onClick={() => props.setActive(0)}
              >
                <p>Add More (+)</p>
              </div>
            )}
            {props.memberData[1] !== undefined ? (
              <div
                // key={key}
                className="new-edit-top-right-name"
                style={{ backgroundColor: `#FEEEEF` }}

                onClick={() => props.setActive(props.memberData[1])}
              >
                <p>{props.memberData[1].name}</p>
              </div>
            ) : (
              <div
                className="new-edit-top-right-name"
                style={{ backgroundColor: `#FEEEEF` }}
                onClick={() => props.setActive(1)}
              >
                <p>Add More (+)</p>
              </div>
            )}
            {props.memberData[3] !== undefined ? (
              <div
                // key={key}
                className="new-edit-top-right-name"
                style={{ backgroundColor: `#FFF9E9` }}
                onClick={() => props.setActive(props.memberData[2])}
              >
                <p>{props.memberData[2].name}</p>
              </div>
            ) : (
              <div
                className="new-edit-top-right-name"
                style={{ backgroundColor: `#FFF9E9` }}
                onClick={() => props.setActive(2)}
              >
                <p>Add More (+)</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default NewEditTop;
