import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";
import HistoryMainBottom from "./HistoryMainBottom";
import HistoryMainTop from "./HistoryMainTop";

function HistoryMain() {
  const [past, setPast] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [duration, setDuration] = useState();
  const [bookType, setBookType] = useState();
  const userData = JSON.parse(localStorage.getItem("testObject"));

  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

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
            setPast([]);
            res.data.map((data, key) => {
              if (data.status === "completed") {
                return setPast((past) => [...past, data]);
              } else {
                return null;
              }
            });
          }
        });
    }
    if (refresh) {
      fetchData();
      setRefresh(false);
    }
  }, [refresh, userData.id]);

  useEffect(() => {
    if (bookType !== "" || bookType !== "Select Type") {
      past.map((data, key) => {
        if (data.type === bookType) {
          return setPast((past) => [...past, data]);
        } else {
          return null;
        }
      });
    } else if (duration !== "" || duration !== "Select Duration") {
      past.map((data, key) => {
        if (data.time === duration) {
          return setPast((past) => [...past, data]);
        } else {
          return null;
        }
      });
    } else if (
      (bookType !== "" || bookType !== "Select Type") &&
      (duration !== "" || duration !== "Select Duration")
    ) {
      past.map((data, key) => {
        if (data.type === bookType && data.time === duration) {
          return setPast((past) => [...past, data]);
        } else {
          return null;
        }
      });
    }
  }, [bookType, duration, past]);

  if (userData === null) {
    return <Navigate to="/auth/login" />;
  } else {
    if (userData.subscriber === 0 && userData.type === "user") {
      return <Navigate to="/pricing" />;
    }
  }

  return (
    <div className="history-main-container">
      {width > 800 ? <Sidebar tab='History'/> : <Navbar />}
      <HistoryMainTop />
      <HistoryMainBottom
        past={past}
        setDuration={setDuration}
        setBookType={setBookType}
      />
    </div>
  );
}

export default HistoryMain;
