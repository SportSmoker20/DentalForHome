import React, { useEffect, useState } from "react";
import Navbar from "../dashboard/Navbar";
import Sidebar from "../sidebar/Sidebar";

import HistoryTop from "./HistoryTop";
import HistoryCount from "./HistoryCount";
import NewBookingSelect from "../bookingNew/NewBookingSelect";
import NewBookingUpcoming from "../bookingNew/NewBookingUpcoming";
import NewBookingPast from "../bookingNew/NewBookingPast";
import axios from "axios";

function History(props) {
  const [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);
  const userData = JSON.parse(localStorage.getItem("testObject"));
  

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(process.env.REACT_APP_BACKEND + "/api/appointment/user/" + userData.id)
        .then((res, err) => {
          if (err) {
            console.log(err);
          } else {
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
    
    fetchData();
  }, [userData.id]);


  // useEffect(() => {
    
  //   if(data===null) {
  //     fetchData()
  //   }
    
  // });
  // console.log(data)

  return (
    <div>
      {width > 800 ? <Sidebar tab='history'/> : <Navbar />}
      <HistoryTop service={props.service} />
      <div className="history-container">
        <HistoryCount service={props.service} data={props.countData}/>
        <NewBookingSelect setUpcoming={setUpcoming} setPast={setPast} />
        <NewBookingUpcoming upcoming={upcoming} />
        <NewBookingPast past={past} />
      </div>
    </div>
  );
}

export default History;
