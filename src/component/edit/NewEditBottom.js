import axios from "axios";
import React, { useState } from "react";

function NewEditBottom() {
  const profile = JSON.parse(localStorage.getItem("testObject"));

  const [add1, setAdd1] = useState(profile.house_number);
  const [add2, setAdd2] = useState(profile.locality);
  const [landmark, setLandmark] = useState(profile.landmark);
  const [country, setCountry] = useState(profile.country);
  const [state, setState] = useState(profile.state);
  const [pincode, setPincode] = useState(profile.pincode);

const SubmitHandler = async () => {
  await axios.put('https://homedentist.in/api/user/address',{
    house_number: add1,
    locality: add2,
    landmark: landmark,
    country: country,
    state: state,
    pincode: pincode,
    mobile: profile.mobile
  }).then((res,err)=>{
    if(err){
      console.log(err);
    } else {
      localStorage.setItem('testObject', JSON.stringify(res.data[0]))
    }
  })

}

  return (
    <div className="new-edit-bottom-container">
      <div className="new-edit-bottom-container-title">
        <p>Address</p>
      </div>
      <div className="new-edit-bottom-container-content">
        <div className="new-edit-bottom-container-detail">
          <label>House Number - </label>
          <input name="add1" value={add1} placeholder="Enter House Number" onChange={(e)=>setAdd1(e.target.value)}/>
        </div>
        <div className="new-edit-bottom-container-detail">
          <label>Area/Street/Locality - </label>
          <input name="add2" value={add2} placeholder="Enter Locality" onChange={(e)=>setAdd2(e.target.value)}/>
        </div>
        <div className="new-edit-bottom-container-detail">
          <label>Landmark - </label>
          <input name="landmark" value={landmark} placeholder="Enter Landmark" onChange={(e)=>setLandmark(e.target.value)}/>
        </div>
        <div className="new-edit-bottom-container-detail">
          <label>Country- </label>
          <input name="country" value={country} placeholder="Enter Country" onChange={(e)=>setCountry(e.target.value)}/>
        </div>
        <div className="new-edit-bottom-container-detail">
          <label>State - </label>
          <input name="state" value={state} placeholder="Enter State" onChange={(e)=>setState(e.target.value)}/>
        </div>
        <div className="new-edit-bottom-container-detail">
          <label>Pincode - </label>
          <input name="pincode" value={pincode} placeholder="Enter Pincode" onChange={(e)=>setPincode(e.target.value)}/>
        </div>
        <div className="new-edit-bottom-container-save" onClick={()=>SubmitHandler()}>
          <p>Save Details</p>
        </div>
        <div className="new-edit-bottom-right">
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
  );
}

export default NewEditBottom;
