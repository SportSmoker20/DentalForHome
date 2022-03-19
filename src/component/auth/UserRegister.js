import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../App";

function UserRegister() {
  const {
    superLoggedIn,
    setSuperLoggedIn,
    setSubscribedLoggedIn,
    subscribedLoggedIn,
  } = useContext(UserContext);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const handleSubmit = () => {
    if (name === "" || email === "") {
      alert("Please Enter Details!!!");
    } else {
      axios
        .put(process.env.REACT_APP_BACKEND + "/api/user", {
          name: name,
          mobile: JSON.parse(localStorage.getItem("testObject"))[0].mobile,
          email: email,
        })
        .then((res, err) => {
          if (!err) {
            if (res.data[0].subscriber === 0) {
              setSubscribedLoggedIn(true);
              return <Navigate to="/home" />;
            } else {
              setSuperLoggedIn(true);
              return <Navigate to="/pricing" />;
            }
          }
        });
    }
  };
  if (superLoggedIn) {
    return <Navigate to="/pricing" />;
  } else if (subscribedLoggedIn) {
    return <Navigate to="/home" />;
  } else {
    return (
      <div className="login-container">
        <div className="login-left">
          <div>
            <img
              src="https://dentalforhome.s3.amazonaws.com/images/logoMain.png"
              alt="Coludn't Load"
              style={{
                height: `110px`,
                width: `220px`,
                paddingTop: `15vh`,
                marginBottom: `-150px`,
              }}
            />
          </div>
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
            <div className="login-get-otp" onClick={() => handleSubmit()}>
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
        {superLoggedIn ? <Navigate to="/home" /> : null}
      </div>
    );
  }
}

export default UserRegister;
