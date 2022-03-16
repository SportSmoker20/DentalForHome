import React from "react";

function NewEditTop() {
  const profile = JSON.parse(localStorage.getItem("testObject"));
  return (
    <div>
      <div className="new-booking-top-container edit">
        <div className="booking-top-container-title">
          <p>Your Profile</p>
        </div>
        <div className="booking-top-container-content">
          <p>Edit your personal details</p>
        </div>
      </div>
      <div className="new-edit-top-container">
        <div className="new-edit-top-left">
        <img src='https://dentalforhome.s3.amazonaws.com/images/character1.svg'style={{height:`110px`,width:`110px`}} className="profile-image-inner" /></div>
        <div className="new-edit-top-content">
          <div className="new-edit-top-mid">
            <div className="new-edit-top-mid-title">
              <p>{profile.name}</p>
            </div>
            <div className="new-edit-top-mid-label">
              <label>Gender : </label>
              <p>Male</p>
            </div>
            <div className="new-edit-top-mid-label">
              <label>DOB :</label>
              <p>17th July, 1996</p>
            </div>
            <div className="new-edit-top-mid-email">
              <p>Prakharkapoor@gmail.com</p>
            </div>
            <div className="new-edit-top-mid-mob">
              <p>+91 8527474339</p>
            </div>
            <div className="new-edit-top-mid-edit">
              <p>Edit Details</p>
            </div>
          </div>
          <div className="new-edit-top-right">
            <div className="new-edit-top-right-title">
              <p>Members</p>
            </div>
            <div className="new-edit-top-right-name">
              <p>{profile.name} (you)</p>
            </div>
            <div className="new-edit-top-right-name">
              <p>Sarthak Kapoor</p>
            </div>
            <div className="new-edit-top-right-name">
              <p>Jayati Kapoor</p>
            </div>
            <div className="new-edit-top-right-name">
              <p>Sameer Kapoor</p>
            </div>
            <div className="new-edit-top-right-name">
              <p>Add More (+)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewEditTop;
