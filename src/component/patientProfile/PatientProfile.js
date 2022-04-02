import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";
import PatientProfileTop from "./PatientProfileTop";

function PatientProfile(props) {
  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });
  const data = JSON.parse(localStorage.getItem("testObject"));
  if (data === null) {
    return <Navigate to="/auth/login" />;
  } else {
    if (data.subscriber === 0 && data.type === "user") {
      return <Navigate to="/pricing" />;
    }
  }

  return (
    <div className="patient-container">
      {width > 800 ? <Sidebar /> : <Navbar />}
      <PatientProfileTop patient={props.patient}/>
    </div>
  );
}

export default PatientProfile;
