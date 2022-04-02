import axios from "axios";
import React, { useEffect, useState } from "react";

function NewEditBottom(props) {
  const profile = JSON.parse(localStorage.getItem("testObject"));

  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [dob, setDob] = useState();
  const [mob, setMob] = useState();
  const [mail, setMail] = useState();
  const [add1, setAdd1] = useState();
  const [add2, setAdd2] = useState();
  const [landmark, setLandmark] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [pincode, setPincode] = useState();

  useEffect(() => {
    // console.log(props.active)
    if (props.active === profile.id) {
      setName(profile.name);
      setGender(profile.gender);
      setDob(profile.dob);
      setMob(profile.mobile);
      setMail(profile.email);
      setAdd1(profile.house_number);
      setAdd2(profile.locality);
      setLandmark(profile.landmark);
      setCountry(profile.country);
      setState(profile.state);
      setPincode(profile.pincode);
      console.log("ddd");
    } else {
      if (props.active === 0 || props.active === 1 || props.active === 2) {
        setName("");
        setGender("");
        setDob("");
        setMob("");
        setMail("");
        setAdd1("");
        setAdd2("");
        setLandmark("");
        setCountry("");
        setState("");
        setPincode("");
      } else {
        setName(props.active.name);
        setGender(props.active.gender);
        setDob(props.active.dob);
        setMob(props.active.mobile);
        setMail(props.active.email);
        setAdd1(props.active.house_number);
        setAdd2(props.active.locality);
        setLandmark(props.active.landmark);
        setCountry(props.active.country);
        setState(props.active.state);
        setPincode(props.active.pincode);
      }
    }
  }, [props.active]);

  const SubmitHandler = async () => {
    if (props.active === profile.id) {
      await axios
        .put(process.env.REACT_APP_BACKEND + "/api/user/address", {
          name: name,
          gender: gender,
          dob: dob,
          mobile: mob,
          email: mail,
          house_number: add1,
          locality: add2,
          landmark: landmark,
          country: country,
          state: state,
          pincode: pincode,
        })
        .then((res, err) => {
          if (err) {
            console.log(err);
          } else {
            localStorage.setItem("testObject", JSON.stringify(res.data[0]));
          }
        });
    }
  };

  return (
    <div className="new-edit-bottom-container">
      <div className="member-personal">
        <div className="new-edit-bottom-container-title">
          <p>Personal Details</p>
        </div>
        <div>
          <div className="member-personal-content-name">
            <label>Name - </label>
            <input
              name="name"
              value={name}
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="member-personal-content">
            <div className="member-personal-content-detail">
              <label>Gender - </label>
              <input
                name="gender"
                value={gender}
                placeholder="Enter Gender"
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
            <div className="member-personal-content-detail">
              <label>Date of Birth - </label>
              <input
                name="dob"
                value={dob}
                type="date"
                placeholder="Enter DoB"
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
          </div>
          <div className="member-personal-content">
            <div className="member-personal-content-detail">
              <label>Mobile - </label>
              <input
                disabled
                name="mob"
                value={mob}
                placeholder="Enter Mobile No."
                onChange={(e) => setMob(e.target.value)}
              />
            </div>
            <div className="member-personal-content-detail">
              <label>E-Mail - </label>
              <input
                name="mail"
                value={mail}
                placeholder="Enter Email"
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="new-edit-bottom-container-title">
        <p>Address</p>
      </div>
      <div className="new-edit-bottom-container-content">
        <div className="new-edit-bottom-container-detail">
          <label>House Number - </label>
          <input
            name="add1"
            value={add1}
            placeholder="Enter House Number"
            onChange={(e) => setAdd1(e.target.value)}
          />
        </div>
        <div className="new-edit-bottom-container-detail">
          <label>Area/Street/Locality - </label>
          <input
            name="add2"
            value={add2}
            placeholder="Enter Locality"
            onChange={(e) => setAdd2(e.target.value)}
          />
        </div>
        <div className="new-edit-bottom-container-detail">
          <label>Landmark - </label>
          <input
            name="landmark"
            value={landmark}
            placeholder="Enter Landmark"
            onChange={(e) => setLandmark(e.target.value)}
          />
        </div>
        <div className="new-edit-bottom-container-detail">
          <label>Country- </label>
          <input
            name="country"
            value={country}
            placeholder="Enter Country"
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="new-edit-bottom-container-detail">
          <label>State - </label>
          <input
            name="state"
            value={state}
            placeholder="Enter State"
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="new-edit-bottom-container-detail">
          <label>Pincode - </label>
          <input
            name="pincode"
            value={pincode}
            placeholder="Enter Pincode"
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <div
          className="new-edit-bottom-container-save"
          onClick={() => SubmitHandler()}
        >
          <p>Save Details</p>
        </div>
        <div className="new-edit-bottom-right">
          <div className="new-edit-top-right-title">
            <p>Members</p>
          </div>
          {props.memberData[0] !== undefined ? (
            <div
              // key={key}
              className="new-edit-top-right-name"
              style={{ backgroundColor: `#F8FFE9` }}
            >
              <p>{props.memberData[0].name}</p>
            </div>
          ) : (
            <div
              className="new-edit-top-right-name"
              onClick={() => props.addMember()}
            >
              <p>Add More (+)</p>
            </div>
          )}

          {props.memberData[1] !== undefined ? (
            <div
              // key={key}
              className="new-edit-top-right-name"
              style={{ backgroundColor: `#F2F1FF` }}
            >
              <p>{props.memberData[1].name}</p>
            </div>
          ) : (
            <div
              className="new-edit-top-right-name"
              onClick={() => props.addMember()}
            >
              <p>Add More (+)</p>
            </div>
          )}
          {props.memberData[2] !== undefined ? (
            <div
              // key={key}
              className="new-edit-top-right-name"
              style={{ backgroundColor: `#FEEEEF` }}
            >
              <p>{props.memberData[2].name}</p>
            </div>
          ) : (
            <div
              className="new-edit-top-right-name"
              onClick={() => props.addMember()}
            >
              <p>Add More (+)</p>
            </div>
          )}
          {props.memberData[3] !== undefined ? (
            <div
              // key={key}
              className="new-edit-top-right-name"
              style={{ backgroundColor: `#FFF9E9` }}
            >
              <p>{props.memberData[3].name}</p>
            </div>
          ) : (
            <div
              className="new-edit-top-right-name"
              onClick={() => props.addMember()}
            >
              <p>Add More (+)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NewEditBottom;
