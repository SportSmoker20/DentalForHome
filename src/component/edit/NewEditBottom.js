import React, { useState } from "react";

function NewEditBottom() {
  const [add1, setAdd1] = useState("H-18");
  const [add2, setAdd2] = useState("Shanti Nagar");
  const [landmark, setLandmark] = useState(
    "Infront of  Sarva Dharma Sai Mandir"
  );
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("Maharashtra");
  const [pincode, setPincode] = useState("492001");

  return (
    <div className="new-edit-bottom-container">
      <div className="new-edit-bottom-container-title">
        <p>Address</p>
      </div>
      <div className="new-edit-bottom-container-content">
        <div className="new-edit-bottom-container-detail">
          <label>House Number - </label>
          <input name="add1" value={add1} />
        </div>
        <div className="new-edit-bottom-container-detail">
          <label>Area/Street/Locality - </label>
          <input name="add2" value={add2} />
        </div>
        <div className="new-edit-bottom-container-detail">
          <label>Landmark - </label>
          <input name="landmark" value={landmark} />
        </div>
        <div className="new-edit-bottom-container-detail">
          <label>Country- </label>
          <input name="country" value={country} />
        </div>
        <div className="new-edit-bottom-container-detail">
          <label>State - </label>
          <input name="state" value={state} />
        </div>
        <div className="new-edit-bottom-container-detail">
          <label>Pincode - </label>
          <input name="pincode" value={pincode} />
        </div>
        <div className="new-edit-bottom-container-save">
          <p>Save Details</p>
        </div>
        <div className="new-edit-bottom-right">
          <div className="new-edit-top-right-title">
            <p>Members</p>
          </div>
          <div className="new-edit-top-right-name">
            <p>Purva Kapoor (you)</p>
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
  );
}

export default NewEditBottom;
