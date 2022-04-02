import React from "react";

function PatientProfileBottom() {
  return (
    <div className="patient-profile-bottom-container">
      <div className="new-booking-top-container edit">
        <div className="booking-top-container-title" style={{ height: `7vh` }}>
          <p>Your Profile</p>
        </div>
        <div className="booking-top-container-content">
          <p>Edit your personal details</p>
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
        </div>
      </div>
    </div>
  );
}

export default PatientProfileBottom;
