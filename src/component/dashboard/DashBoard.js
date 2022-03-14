import React, { useContext, useEffect, useState } from "react";
import Banner from "./Banner";
import DashBoardFooter from "./DashBoardFooter";
import DashBoardOptions from "./DashBoardOptions";
import Navbar from "./Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";
import AdminDashBoard from "./AdminDashBoard";

function DashBoard() {
  const { setSubscribedLoggedIn, subscribedLoggedIn } = useContext(UserContext);
  const [data,setData] = useState([]);
  useEffect(async () => {
    setData(JSON.parse(localStorage.getItem("testObject")));
    if (data !== null) {
      await axios
        .get("http://3.80.77.164:5000/api/user/" + data.mobile)
        .then((res, err) => {
          if (!err) {
            if (res.data[0].subscriber !== 0) {
              console.log("ff");
              setSubscribedLoggedIn(true);
            }
            // else{
            //   setSuperLoggedIn()
            // }
          }
        });
    }
  }, []);
  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });
  if (subscribedLoggedIn) {
    return (
      <div>
        
        <div className="dashboard-main">
          {data.type === "admin" ? (
            <div>
              {width>800 ? <Sidebar /> : <Navbar />}
               <AdminDashBoard />
            </div>
          ) : (
            <div>
              <Sidebar />
              <Navbar />
              <Banner />
              <DashBoardOptions />
             
            </div>
          )}

          {/* <DashBoardFooter /> */}
        </div>
      </div>
    );
  } else {
    return <Navigate to="/auth/login" />;
  }
}

export default DashBoard;
