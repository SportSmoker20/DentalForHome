import axios from "axios";
import React, { useEffect, useState } from "react";
import NewBookingPast from "../bookingNew/NewBookingPast";
import NewBookingUpcoming from "../bookingNew/NewBookingUpcoming";

function AdminDashBoard() {

    const[upcoming,setUpcoming] = useState([])
  const[past,setPast] = useState([])
  const[refresh,setRefresh] = useState(false)
  const userData = JSON.parse(localStorage.getItem("testObject"));


  useEffect(async()=>{
   await axios.get('http://3.80.77.164:5000/api/appointment/admin'+ "Mitali").then((res, err) => {
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
    <div className="admin-dashboard-container">
      <div className="new-booking-top-container edit">
        <div className="booking-top-container-title">
          <p>Patient Appointments</p>
        </div>
        <div className="booking-top-container-content">
          <p>Dental for Home</p>
        </div>
      </div>
      <div className="admin-dash">
      <NewBookingUpcoming upcoming={upcoming}/>
      <NewBookingPast past={past} />
      </div>
    </div>
  );
}

export default AdminDashBoard;
