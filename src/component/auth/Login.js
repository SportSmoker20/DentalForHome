import React, { useState } from "react";
import "../../css/Auth.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import OtpInput from "react-otp-input";
import axios from "axios";
import PhoneInput from "react-phone-number-input";

function Login(props) {
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState();
  const [mobile, setMobile] = useState();

  console.log(mobile);

  // const submitHandler = () => {
  //   axios
  //     .get("http://localhost:5000/api/user/" + mobile + "/" + otp)
  //     .then((res, err) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         props.setLoggedIn(true);
  //         localStorage.setItem("testObject", JSON.stringify(res));
  //       }
  //     });
  // };

  if (otpSent) {
    return (
      <div className="login-container">
        <div className="login-left">
          <div className="login-otp-left-main">
            <div className="login-otp-title">
              <div className="otp-title-top">
                <p>Verification</p>
              </div>
              <div className="otp-title-bottom">
                <p>Please enter OTP sent to your mobile number</p>
              </div>
            </div>
            <div className="otp-container-main">
              <OtpInput
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value);
                  console.log(otp);
                }}
                numInputs={6}
                separator={<span></span>}
                className="otp-container"
              />
            </div>
            <div className="otp-resend">
              <p>
                Didn't get the code yet? <label>Resend</label>
              </p>
            </div>
            <br />

            <div className="login-button">
              <p>LOG IN</p>
            </div>
          </div>
        </div>
        <div className="login-right"></div>
      </div>
    );
  } else {
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
                <p>Hello ! Welcome back</p>
              </div>
            </div>
            <PhoneInput
              placeholder="Enter phone number"
              international
              value={mobile}
              onChange={setMobile}
              withCountryCallingCode
              defaultCountry="IN"
              useNationalFormatForDefaultCountryValue
            />
            {/* </div> */}
            <br />
            <div
              className="login-get-otp"
              onClick={() => {
                if (mobile.length === 14) {
                  setOtpSent(true);
                } else {
                  console.log("error");
                }
              }}
            >
              <p>Get OTP</p>
            </div>
            <div className="login-or">
              <p>OR</p>
            </div>
            <div className="login-google-facebook">
              <FcGoogle style={{ marginLeft: `40px` }} />
              <p>Sign In with Google</p>
            </div>
            <div className="login-google-facebook">
              <FaFacebook style={{ color: `blue`, marginLeft: `40px` }} />
              <p>Sign In with Facebook</p>
            </div>
            <br />
            <div className="login-signup">
              <p>
                Don't have an account,{" "}
                <Link
                  to={`/register`}
                  style={{ textDecoration: `none`, color: `rgb(4,64,102)` }}
                >
                  Sign Up
                </Link>
              </p>
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
}

export default Login;
