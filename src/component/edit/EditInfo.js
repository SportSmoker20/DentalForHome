import React, { useState } from "react";

function EditInfo() {
  const [add1, setAdd1] = useState("H-1B");
  const [add2, setAdd2] = useState("Shantinagar");
  const [landmark, setLandmark] = useState(
    "In front of Sarva Dharma Sai Mandir"
  );
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("Maharashtra");
  const [pincode, setPincode] = useState("411111");

  return (
    <div className="info-main">
      <div className="info-title">
        <div className="info-title-address">Address</div>
        <div className="info-title-edit">Edit</div>
      </div>
      <div className="edit-info-container">
        <div>
          <div className="info-field-inner">
            <p>House Number - </p>
            <input value={add1} onChange={(e) => setAdd1(e.target.value)} />
          </div>
          <div className="info-field-inner">
            <p>Area/Street/Locality - </p>
            <input value={add2} onChange={(e) => setAdd2(e.target.value)} />
          </div>
          <div className="info-field-inner">
            <p>Landmark - </p>
            <input
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
            />
          </div>
          <div className="info-field-inner">
            <p>Country - </p>
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="info-field-inner">
            <p>State - </p>
            <input value={state} onChange={(e) => setState(e.target.value)} />
          </div>
          <div className="info-field-inner">
            <p>Pincode - </p>
            <input
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditInfo;
