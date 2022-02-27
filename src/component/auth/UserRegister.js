import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserRegister() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-left-main">
          <div className="login-title">
            <div className="login-title-top">
              <p>
                <label style={{ fontWeight: `600` }}>Dental</label> For Home
              </p>
            </div>
            <div className="login-title-bottom">
              <p>Hello ! Welcome to DFH</p>
            </div>
          </div>
          <div className="login-mobile">
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="login-mobile">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <br />
          <div className="login-get-otp">
            <p>Sign Up</p>
          </div>
        </div>
      </div>
      <div className="login-right">
        <div className="login-navbar-option">
          <Link
            to={`/about`}
            style={{ textDecoration: `none`, color: `rgb(4,64,102)` }}
          >
            <p>About</p>
          </Link>
        </div>
        <div className="login-navbar-option">
          <Link
            to={`/contactUs`}
            style={{ textDecoration: `none`, color: `rgb(4,64,102)` }}
          >
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
