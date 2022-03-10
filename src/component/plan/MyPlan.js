import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../App";
import Banner from "../dashboard/Banner";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";
import MyPlanCard from "./MyPlanCard";

function MyPlan() {
  const { subscribedLoggedIn } = useContext(UserContext);
  if (subscribedLoggedIn) {
    return (
      <div>
        <Sidebar />
        <Navbar />
        <Banner />
        <MyPlanCard />
      </div>
    );
  } else {
    return <Navigate to="/auth/login" />;
  }
}

export default MyPlan;
