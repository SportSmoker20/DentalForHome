import React from "react";
import Banner from "./Banner";
import DashBoardFooter from "./DashBoardFooter";
import DashBoardOptions from "./DashBoardOptions";
import Navbar from "./Navbar";
import "../../css/DashBoard.css";
import Sidebar from "../sidebar/Sidebar";
import { Navigate } from "react-router-dom";

function DashBoard(props) {
  if (props.subscribedLoggedIn) {
    return (
      <div>
        <Sidebar />
        <div className="dashboard-main">
          <Navbar />
          <Banner />
          <DashBoardOptions />
          {/* <DashBoardFooter /> */}
        </div>
      </div>
    );
  } else {
    return <Navigate to="/auth/login" />;
  }
}

export default DashBoard;
