import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import "../../css/NewBooking.css";
import { Navigate } from "react-router-dom";
import NewBookingTop from "./NewBookingTop";
import NewBookingSelect from "./NewBookingSelect";
import NewBookingUpcoming from "./NewBookingUpcoming";
import NewBookingPast from "./NewBookingPast";
import Navbar from "../dashboard/Navbar";
import axios from "axios";

function NewBooking() {
  const userData = JSON.parse(localStorage.getItem("testObject"));

  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(
          process.env.REACT_APP_BACKEND + "/api/appointment/user/" + userData.id
        )
        .then((res, err) => {
          if (err) {
            console.log(err);
          } else {
            setUpcoming([]);
            res.data.map((data, key) => {
              if (data.status === "completed") {
                return setPast((past) => [...past, data]);
              } else {
                return setUpcoming((upcoming) => [...upcoming, data]);
              }
            });
          }
        });
    }

    if (refresh) {
      fetchData();
    }
    setRefresh(false);
  }, [refresh, userData.id]);

  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

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
      {width > 800 ? <Sidebar tab='My bookings' /> : <Navbar />}
      <div className="new-booking-container">
        <NewBookingTop />
        <NewBookingSelect
          setUpcoming={setUpcoming}
          setPast={setPast}
          setRefresh={setRefresh}
          refresh={refresh}
        />
        <NewBookingUpcoming upcoming={upcoming} />
        <NewBookingPast past={past} />
        <br />
      </div>
    </div>
  );
}

export default NewBooking;
