import React, { useContext, useEffect } from "react";
import Banner from "./Banner";
import DashBoardFooter from "./DashBoardFooter";
import DashBoardOptions from "./DashBoardOptions";
import Navbar from "./Navbar";
import "../../css/DashBoard.css";
import Sidebar from "../sidebar/Sidebar";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";

function DashBoard() {
  const  {  setSubscribedLoggedIn,subscribedLoggedIn } = useContext(UserContext)

  useEffect(async()=>{
    const data = JSON.parse(localStorage.getItem("testObject"))
    if(data!==null){
      await axios
      .get("http://localhost:5000/api/user/" + data.mobile).then((res,err)=>{
        if(!err){
          if(res.data[0].subscriber !== 0){
            console.log("ff")
            setSubscribedLoggedIn(true)
          }
          // else{
          //   setSuperLoggedIn()
          // }
          
        }
      }
      )
    }
  },[])
  if (subscribedLoggedIn) {
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
