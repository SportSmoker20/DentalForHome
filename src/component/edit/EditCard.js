import React, { useState } from "react";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

function EditCard() {
  const [gender, setGender] = useState("Male");
  const [dob, setDob] = useState("18.04.1998");
  const [email, setEmail] = useState("sportsmoker13@gmail.com");
  const [phone, setPhone] = useState("0321654987");

  return (
    <div className="edit-card-main">
      <div className="edit-card-top">
        <img
          src="https://dental-for-home.s3.us-west-2.amazonaws.com/character1.svg"
          className="edit-card-image"
        />
        <div className="edit-top-container">
          <div className="edit-top-text">Jesson George</div>
          <HiOutlineDotsCircleHorizontal className="edit-top-icon" />
        </div>
      </div>
      <div className="edit-card-bottom">
        <div className="edit-field">
          <div className="edit-field-inner">
            <p>Gender - </p>
            <input
              style={{ width: `70px` }}
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className="edit-field-inner">
            <p>Date of Birth - </p>
            <input
              style={{ width: `80px` }}
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="edit-field-inner">
            <p>E-Mail -</p>
            <input
              style={{ marginLeft: `-1px`, width: `150px` }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="edit-field-inner">
            <p>Phone - </p>
            <input
              style={{ width: `80px` }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCard;
