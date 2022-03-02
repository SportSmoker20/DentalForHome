import React, { useState } from "react";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import "../../css/Edit.css";
import charac from '../../images/character1.svg'

function EditCard() {
  const [gender, setGender] = useState("Male");
  const [dob, setDob] = useState("18.04.1998");
  const [email, setEmail] = useState("sportsmoker13@gmail.com");
  const [phone, setPhone] = useState("0321654987");

  return (
    <div className="edit-card-main">
      <div className="edit-card-top">
        <img src={charac} className="edit-card-image" />
        <div className="edit-top-container">
          <div className="edit-top-text">Jesson George</div>
          <HiOutlineDotsCircleHorizontal className="edit-top-icon"/>
        </div>
      </div>
      <div className="edit-card-bottom">
        <div className="edit-field">
          <div className="edit-field-inner">
            <p>Gender - </p>
            <input style={{width:`70px`}} value={gender} onChange={(e) => setGender(e.target.value)} />
          </div>
          <div className="edit-field-inner">
            <p>Date of Birth - </p>
            <input style={{width:`80px`}} value={dob} onChange={(e) => setDob(e.target.value)} />
          </div>
          <div className="edit-field-inner">
            <p>E-Mail -</p>
            <input style={{marginLeft:`-1px`,width:`150px`}} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="edit-field-inner">
            <p>Phone - </p>
            <input style={{width:`80px`}} value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
        </div>
        {/* <div className="edit-field-input">
          <div  className="edit-input">
          </div>
         <div  className="edit-input"> </div>
         <div  className="edit-input"> </div>
         <div  className="edit-input"> </div>
        </div> */}
        {/* <table cellspacing="0">
          <tr>
            <td className="edit-table-td">Gender - </td>
            <td><input value={gender} onChange={(e) => setGender(e.target.value)} /></td>
          </tr>
          <tr>
          <td className="edit-table-td" >Date of Birth - </td>
          <td><input value={dob} onChange={(e) => setDob(e.target.value)} /></td>
          </tr>
          <tr>
            <td className="edit-table-td"><p>E-Mail - </p></td>
            <td><input value={email} onChange={(e) => setEmail(e.target.value)} /></td>
          </tr>
          <tr>
            <td className="edit-table-td"><p>Phone</p></td>
            <td> <input value={phone} onChange={(e) => setPhone(e.target.value)} /></td>
          </tr>
        </table> */}
      </div>
    </div>
  );
}

export default EditCard;
