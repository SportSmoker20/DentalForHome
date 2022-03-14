import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import '../../css/NewBooking.css'
import { Navigate } from "react-router-dom";
import NewBookingTop from "./NewBookingTop";
import NewBookingSelect from "./NewBookingSelect";
import NewBookingUpcoming from "./NewBookingUpcoming";
import NewBookingPast from "./NewBookingPast";
import Navbar from "../dashboard/Navbar";
import axios from "axios";
import { UserContext } from "../../App";

function NewBooking() {
  const  {  subscribedLoggedIn } = useContext(UserContext)
  const userData = JSON.parse(localStorage.getItem("testObject"));

  const[upcoming,setUpcoming] = useState([])
  const[past,setPast] = useState([])
  const[refresh,setRefresh] = useState(false)

  useEffect(async()=>{
   await axios.get('http://3.80.77.164:5000/api/appointment/user/'+ userData.id).then((res, err) => {
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

  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  if(subscribedLoggedIn){
    return (
      <div className="new-booking-container">
        {width>800 ? <Sidebar /> : <Navbar />}
        {/* <Sidebar /> */}
        <NewBookingTop />
        <NewBookingSelect setUpcoming={setUpcoming} setPast={setPast}/>
        <NewBookingUpcoming upcoming={upcoming}/>
        <NewBookingPast past={past}/>
        <br />
      </div>
    );
  } 
  else {
    return(
      <Navigate to="/auth/login" />
    )
  }
  
}

export default NewBooking;
