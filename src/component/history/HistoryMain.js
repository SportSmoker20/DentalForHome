import axios from "axios";
import React, { useEffect, useState } from "react";
import NewBookingPast from "../bookingNew/NewBookingPast";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";
import HistoryMainBottom from "./HistoryMainBottom";
import HistoryMainTop from "./HistoryMainTop";

function HistoryMain() {

    const[upcoming,setUpcoming] = useState([])
  const[past,setPast] = useState([])
  const[refresh,setRefresh] = useState(false)
  const userData = JSON.parse(localStorage.getItem("testObject"));

  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  useEffect(async()=>{
    await axios.get('https://homedentist.in/api/appointment/user/'+ userData.id).then((res, err) => {
       if (err) {
         console.log(err);
       } else {
         // console.log(res)
         res.data.map((data)=>{
           if(data.status === "completed"){
             setPast(past => [...past, data]);
           } else {
             setUpcoming(upcoming => [...upcoming, data]);
           } 
         })
       }
 
     })
     setRefresh(false)
   },[refresh])

  return (
    <div className="history-main-container">
      {width > 800 ? <Sidebar /> : <Navbar />}
      <HistoryMainTop />
      <HistoryMainBottom past={past}/>
    </div>
  );
}

export default HistoryMain;
