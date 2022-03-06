import React from "react";

function NewEditTop() {
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
        <div className="new-edit-top-left"></div>
        <div className="new-edit-top-mid">
        <div>
            <p>Purva Kapoor</p>
          </div>
          <div className="new-edit-top-mid-label">
            <label>Gender : </label>
            <p>Male</p>
          </div>
          <div className="new-edit-top-mid-label">
            <label>DOB :</label>
            <p>17th July, 1996</p>
          </div>
          <div>
            <p>Prakharkapoor@gmail.com</p>
          </div>
          <div>
            <p>+91 8527474339</p>
          </div>
        </div>
        <div className="new-edit-top-right">
          <div>
            <p>Members</p>
          </div>
          <div>
            <p>Purva Kapoor (you)</p>
          </div>
          <div>
            <p>Sarthak Kapoor</p>
          </div>
          <div>
            <p>Jayati Kapoor</p>
          </div>
          <div>
            <p>Sameer Kapoor</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewEditTop;
