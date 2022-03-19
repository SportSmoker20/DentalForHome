import React, { useState } from "react";
import "../../css/Auth.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import axios from "axios";
import PhoneInput from "react-phone-number-input";

function Login() {
  const [otpSent, setOtpSent] = useState(false);
  let OTP = "";
  const [otp, setOtp] = useState();
  const [mobile, setMobile] = useState();
  const data = JSON.parse(localStorage.getItem("testObject"));

  const sendOtp = async () => {
    var digits = "0123456789";
    for (let i = 0; i < 6; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }

    const params = {
      APIKey: "nR2ylqbYeEit5LSJtj4ChA",
      senderid: "DNTLFH",
      channel: 2,
      DCS: 0,
      flashsms: 0,
      number: mobile,
      text:
        "Dear Customer, Your OTP to login to Dental For Home is " +
        OTP +
        ". Do not disclose it to anyone. Regards DNTLFH",
      route: 1,
    };

    await axios.get("https://www.smsgatewayhub.com/api/mt/SendSMS", {
      params: params,
    });
  };

  const submitHandler = async () => {
    if ((OTP = otp)) {
      await axios
        .get(process.env.REACT_APP_BACKEND + "/api/user/" + mobile)
        .then((res, err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(res);
            if (res.data[0].email === "") {
              const mobileNo = [
                {
                  mobile: mobile,
                },
              ];
              localStorage.setItem("testObject", JSON.stringify(mobileNo));
              return <Navigate to="/auth/register" />;
            } else {
              localStorage.setItem("testObject", JSON.stringify(res.data[0]));
            }
          }
        });
    } else {
      alert("otp mismatch");
    }
  };
  if (data !== null) {
    if (data.subscriber === 0) {
      return <Navigate to="/pricing" />;
    }
    if (data.subscriber === 1) {
      return <Navigate to="/home" />;
    }
  }

  if (otpSent) {
    return (
      <div className="login-container">
        <div className="login-left">
          <div style={{ width: `max-content` }}>
            <img
              src="https://dentalforhome.s3.amazonaws.com/images/logoMain.png"
              alt="Coludn't Load"
              style={{ height: `110px`, width: `220px`, paddingTop: `20vh` }}
            />
          </div>
          <div className="login-otp-left-main" style={{ marginTop: `-20vh` }}>
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
                onChange={(ot) => setOtp(ot)}
                numInputs={6}
                separator={<span> </span>}
                className="otp-container"
              />
            </div>
            <div className="otp-resend">
              <p>
                Didn't get the code yet?{" "}
                <label
                  onClick={() => sendOtp()}
                  style={{ color: `blue`, cursor: `pointer` }}
                >
                  Resend
                </label>
              </p>
            </div>
            <br />

            <div className="login-button" onClick={() => submitHandler()}>
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
          <div>
            <img
              src="https://dentalforhome.s3.amazonaws.com/images/logoMain.png"
              alt="Coludn't Load"
              style={{ height: `110px`, width: `220px`, paddingTop: `10vh` }}
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
            />
            <br />
            <div
              className="login-get-otp"
              onClick={() => {
                if (mobile.length === 13) {
                  sendOtp();
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
              {/* <p>
                  Don't have an account,{" "}
                  <Link
                    to={`/register`}
                    style={{ textDecoration: `none`, color: `rgb(4,64,102)` }}
                  >
                    Sign Up
                  </Link>
                </p> */}
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
  // }
}

export default Login;
