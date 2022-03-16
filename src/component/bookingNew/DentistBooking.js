import axios from "axios";
import React, { useEffect, useState } from "react";
import NewBookingPast from "../bookingNew/NewBookingPast";
import NewBookingUpcoming from "../bookingNew/NewBookingUpcoming";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";

function DentistBooking() {
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const userData = JSON.parse(localStorage.getItem("testObject"));

  useEffect(async () => {
    await axios
      .get("https://homedentist.in/api/appointment/admin/" + "Mitali")
      .then((res, err) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(res)
          res.data.map((data) => {
            if (data.status === "completed") {
              setPast((past) => [...past, data]);
            } else {
              setUpcoming((upcoming) => [...upcoming, data]);
            }
          });
        }
      });
    setRefresh(false);
  }, [refresh]);

  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  return (
    <div className="admin-dashboard-container" style={{ marginRight: `30px` }}>
      {width > 800 ? <Sidebar /> : <Navbar />}

      <div className="new-booking-top-container edit">
        <div className="booking-top-container-title" style={{height:`30px`}}>
          <p>Patient Appointments</p>
        </div>
        <div className="booking-top-container-content">
          <p>Dental for Home</p>
        </div>
      </div>
      <div className="admin-dash">
        <NewBookingUpcoming upcoming={upcoming} />
        <NewBookingPast past={past} />
      </div>
    </div>
  );
}

export default DentistBooking;
