import React from "react";

function RegisterMain() {
  return (
    <div className="register-main-container">
      <div className="register-submain-container">
        <div className="register-title">
          <p>Register Now</p>
        </div>
        <div className="register-input">
          <input placeholder="Full Name" />
        </div>
        <div className="register-input">
          <input placeholder="Email" />
        </div>
        <div className="register-input">
          <input placeholder="Phone Number" />
        </div>
        <div className="register-button">
          <p>Register</p>
        </div>
      </div>
    </div>
  );
}

export default RegisterMain;
