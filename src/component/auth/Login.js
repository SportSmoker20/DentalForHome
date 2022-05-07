import React, { useContext, useState } from "react";
import "../../css/Auth.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import { UserContext } from "../../App.js";
import ReactModal from "react-modal";
import { BsCalendarCheck } from "react-icons/bs";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { FacebookProvider, LoginButton } from "react-facebook";

function Login() {
  const [showBookModal, setShowBookModal] = useState(false);
  const {
    loggedIn,
    superLoggedIn,
    subscribedLoggedIn,
    setLoggedIn,
    setSuperLoggedIn,
    setSubscribedLoggedIn,
  } = useContext(UserContext);
  const [otpSent, setOtpSent] = useState(false);
  let OTP = "";
  const [otp, setOtp] = useState();
  const [mobile, setMobile] = useState();
  const data = JSON.parse(localStorage.getItem("testObject"));

  const responseGoogle = async (response) => {
    console.log(response);
    await axios
      .get(
        process.env.REACT_APP_BACKEND +
          "/api/user/google/" +
          response.profileObj.email +
          "/" +
          response.profileObj.name
      )
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          localStorage.setItem("testObject", JSON.stringify(res.data[0]));

          if (res.data[0].subscriber === 0) {
            setShowBookModal(true);
            // setSuperLoggedIn(true);
          } else {
            setSubscribedLoggedIn(true);
          }
        }
      });
  };

  const handleError = (error) => {
    console.log(error);
  };

  const responseFacebook = async (response) => {
    console.log(response);
    await axios
      .get(
        process.env.REACT_APP_BACKEND +
          "/api/user/google/" +
          response.profile.email +
          "/" +
          response.profile.name
      )
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          localStorage.setItem("testObject", JSON.stringify(res.data[0]));

          if (res.data[0].subscriber === 0) {
            setShowBookModal(true);
            // setSuperLoggedIn(true);
          } else {
            setSubscribedLoggedIn(true);
          }
        }
      });
  };

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

  const handleBookCloseModal = () => {
    setShowBookModal(false);
    // setSuperLoggedIn(true);
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
            if (res.data.email === "" || res.data[0].email === "") {
              localStorage.setItem(
                "testObject",
                JSON.stringify({ mobile: mobile })
              );
              setLoggedIn(true);
              return <Navigate to="/auth/register" />;
            } else {
              localStorage.setItem("testObject", JSON.stringify(res.data[0]));
              if (res.data[0].subscriber === 0) {
                setShowBookModal(true);
                // setSuperLoggedIn(true);
              } else {
                setSubscribedLoggedIn(true);
              }
            }
          }
        });
    } else {
      alert("otp mismatch");
    }
  };
  if (data !== null) {
    if (data.subscriber === 0) {
      // return <Navigate to="/pricing" />;
    }
    if (data.subscriber === 1) {
      return <Navigate to="/home" />;
    }
  }
  if (subscribedLoggedIn) {
    return <Navigate to="/home" />;
  } else if (superLoggedIn) {
    return <Navigate to="/pricing" />;
  } else if (loggedIn) {
    return <Navigate to="/auth/register" />;
  } else {
    if (otpSent) {
      return (
        <div className="login-container">
          {/* {data !== null ? <Navigate to="/auth/register" /> : null} */}
          <div className="login-left">
            <div style={{ width: `max-content` }}>
              <img
                src="https://dental-for-home.s3.us-west-2.amazonaws.com/logoMain.png"
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
                  <p>Please enter OTP sent on {mobile}</p>
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
          {loggedIn ? <Navigate to="/auth/register" /> : null}
          <ReactModal
            isOpen={showBookModal}
            contentLabel="onRequestClose Example"
            onRequestClose={handleBookCloseModal}
            shouldCloseOnOverlayClick={true}
            style={{
              overlay: {
                position: "fixed",
                backgroundColor: "rgba(0, 0, 0, 0.28)",
              },
              content: {
                position: "absolute",

                border: "1px solid #ccc",
                background: "#fff",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "20px",
                outline: "none",
                padding: "20px",
                inset: "auto",
                width: "34vw",
                height: "420px",
              },
            }}
          >
            <div className="modal-container">
              <div className="modal-container-content-book">
                <div>
                  <BsCalendarCheck style={{ height: `80px`, width: `80px` }} />
                </div>
                <div>
                  <p>You don't have a plan</p>
                  <p
                    className="modal-container-content-book"
                    onClick={() => setSuperLoggedIn(true)}
                  >
                    Select Plan
                  </p>
                </div>
              </div>
            </div>
          </ReactModal>
        </div>
      );
    } else {
      return (
        <div className="login-container">
          <ReactModal
            isOpen={showBookModal}
            contentLabel="onRequestClose Example"
            onRequestClose={handleBookCloseModal}
            shouldCloseOnOverlayClick={true}
            style={{
              overlay: {
                position: "fixed",
                backgroundColor: "rgba(0, 0, 0, 0.28)",
              },
              content: {
                position: "absolute",

                border: "1px solid #ccc",
                background: "#fff",
                overflow: "auto",
                WebkitOverflowScrolling: "touch",
                borderRadius: "20px",
                outline: "none",
                padding: "20px",
                inset: "auto",
                width: "34vw",
                height: "420px",
              },
            }}
          >
            <div className="modal-container">
              <div className="modal-container-content-book">
                <div>
                  <BsCalendarCheck style={{ height: `80px`, width: `80px` }} />
                </div>
                <div>
                  <p>You don't have a plan</p>
                  <p
                    className="modal-container-content-book"
                    onClick={() => setSuperLoggedIn(true)}
                  >
                    Select Plan
                  </p>
                </div>
              </div>
            </div>
          </ReactModal>
          <div className="login-left">
            <div>
              <img
                src="https://dental-for-home.s3.us-west-2.amazonaws.com/logoMain.png"
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
              {/* <div className="login-google-facebook">
              <FcGoogle style={{ marginLeft: `40px` }} /> */}
              {/* <p>Sign In with Google</p> */}
              <GoogleLogin
                className="login-google-facebook"
                clientId="523816337443-hv6e72m9p2ktl9si307i5njcaf38qalk.apps.googleusercontent.com"
                buttonText="Sign In with Google"
                onSuccess={responseGoogle}
                // onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
              {/* </div> */}
              {/* <div className="login-google-facebook">
              <FaFacebook style={{ color: `blue`, marginLeft: `40px` }} />
              <p>Sign In with Facebook</p>
            </div> */}
              {/* <FacebookLogin
                appId="1088597931155576"
                autoLoad={true}
                fields="name,email,picture"
                callback={responseFacebook}
                // cssClass="my-facebook-button-class"
                // icon={<FaFacebook />}
              /> */}
              {/* <FacebookProvider appId="516692236773908"  > */}
              <FacebookProvider appId="692024022112974">
                <LoginButton
                  scope="email"
                  className="login-google-facebook"
                  callback={responseFacebook}
                  onError={handleError}
                >
                  <FaFacebook style={{ color: `blue`, marginLeft: `10px` }} />
                  <span>Login via Facebook</span>
                </LoginButton>
              </FacebookProvider>
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
  }
}

export default Login;
