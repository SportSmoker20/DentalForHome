import React from "react";
import { Navigate } from "react-router-dom";
import Banner from "../dashboard/Banner";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";
import EditProfile from "./EditProfile";

function Edit(props) {
  if (props.subscribedLoggedIn) {
    return (
      <div>
        <Sidebar />
        <Navbar />
        <EditProfile />
      </div>
    );
  } else {
    return <Navigate to="/auth/login" />;
  }
}

export default Edit;
