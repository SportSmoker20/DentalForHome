import axios from "axios";
import React, { useEffect, useState } from "react";
import NewBookingPast from "../bookingNew/NewBookingPast";
import NewBookingUpcoming from "../bookingNew/NewBookingUpcoming";

function PatientProfileTop(props) {
  const memberData = [
    {
      name: "Appointments",
      bgc: "#F4FBFF",
    },
    {
      name: "Downloads",
      bgc: "#F2F1FF",
    },
    {
      name: "Check-ups",
      bgc: "#FEEEEF",
    },
    {
      name: "Payment History",
      bgc: "#F8FFE9",
    },
    {
      name: "Treatment",
      bgc: "#FFF9E9",
    },
  ];
  const [upcoming, setUpcoming] = useState([]);
  const [past, setPast] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(process.env.REACT_APP_BACKEND + "/api/appointment/admin/Mitali")
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

      setRefresh(false);
    }
    if (refresh) {
      fetchData();
    }
  }, [refresh]);

  return (
    <div className="patr">
      <div className="new-booking-top-container">
        <div className="booking-top-container-title" style={{ height: `7vh` }}>
          <p>Patient Profile</p>
        </div>
        <div className="booking-top-container-content">
          <p>Edit your personal details</p>
        </div>
      </div>
      <div className="new-edit-top-container" style={{ marginLeft: `0` }}>
        <div className="new-edit-top-left">
          <img
            src="https://dental-for-home.s3.us-west-2.amazonaws.com/character1.svg"
            style={{ height: `110px`, width: `110px` }}
            className="profile-image-inner"
            alt="Coludn't Load"
          />
        </div>
        <div className="new-edit-top-content">
          <div className="new-edit-top-mid">
            <div className="new-edit-top-mid-title">
              <p>{props.patient.name}</p>
            </div>
            <div className="new-edit-top-mid-label">
              <label>Gender : </label>
              <p>{props.patient.gender}</p>
            </div>
            <div className="new-edit-top-mid-label">
              <label>DOB :</label>
              <p>{props.patient.dob}</p>
            </div>
            <div className="new-edit-top-mid-email">
              <p>Prakharkapoor@gmail.com</p>
            </div>
            <div className="new-edit-top-mid-mob">
              <p>+91 8527474339</p>
            </div>
            <div className="new-edit-top-mid-edit">
              <p>Edit Details</p>
            </div>
          </div>
        </div>
      </div>
      <div className="patient-profile-top-right">
        {memberData.map((data, key) => (
          <div
            key={key}
            className="patient-profile-top-right-name"
            style={{ backgroundColor: `${data.bgc}` }}
          >
            <p>{data.name}</p>
          </div>
        ))}
        
      </div>
      <div className="admin-dash" style={{marginLeft:`0`}}>
        <NewBookingUpcoming upcoming={upcoming} />
        <NewBookingPast past={past} />
      </div>
    </div>
  );
}

export default PatientProfileTop;
