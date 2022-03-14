import React from "react";
import HomeNavbar from "../sample/HomeNavbar";
import RegisterMain from "./RegisterMain";
import HomeFooter from "../sample/HomeFooter";

function Register() {
  return (
    <div className="register-container">
      <HomeNavbar />
      <RegisterMain />
      <HomeFooter />
    </div>
  );
}

export default Register;
