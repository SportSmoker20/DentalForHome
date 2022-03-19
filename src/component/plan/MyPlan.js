import React from "react";
import { Navigate } from "react-router-dom";
import Banner from "../dashboard/Banner";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";
import MyPlanCard from "./MyPlanCard";

function MyPlan() {
  const data = JSON.parse(localStorage.getItem("testObject"));

  if (data === null) {
    return <Navigate to="/auth/login" />;
  } else {
    if (data.subscriber === 0) {
      return <Navigate to="/pricing" />;
    }
  }

  return (
    <div>
      <Sidebar />
      <Navbar />
      <Banner />
      <MyPlanCard />
    </div>
  );
}

export default MyPlan;
