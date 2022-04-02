import React, { useState } from "react";
import Banner from "./Banner";
import DashBoardOptions from "./DashBoardOptions";
import Navbar from "./Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Navigate } from "react-router-dom";
import DentistDashBoard from "./DentistDashBoard";

function DashBoard() {
  const data = JSON.parse(localStorage.getItem("testObject"));

  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  if (data === null) {
    console.log('1')
    return <Navigate to="/auth/login" />;
    
  } else {
    if (data.subscriber === 0 && data.type === "user") {
      console.log('2')
      return <Navigate to="/pricing" />;
    }
  }

  return (
    <div>
      <div className="dashboard-main">
        {data.type === "admin" ? (
          <div>
            {width > 800 ? <Sidebar tab='Dashboard'/> : <Navbar />}
            <DentistDashBoard />
          </div>
        ) : (
          <div>
            <Sidebar tab='Dashboard'/>
            <Navbar />
            <Banner />
            <DashBoardOptions />
          </div>
        )}
      </div>
    </div>
  );
}

export default DashBoard;
