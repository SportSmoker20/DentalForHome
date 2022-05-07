import React from "react";
import { CgArrowsV } from "react-icons/cg";
import { BsThreeDots, BsClockFill } from "react-icons/bs";
import { GrSort } from "react-icons/gr";

function Appointments() {
  const arr = [
    {
      name: "Jesson George",
      location: "Raipur",
      date: "25 June,2022",
      time: "01:00PM",
    },
    {
      name: "Jesson George",
      location: "Raipur",
      date: "25 June,2022",
      time: "01:00PM",
    },
    {
      name: "Jesson George",
      location: "Raipur",
      date: "25 June,2022",
      time: "01:00PM",
    },
    {
      name: "Jesson George",
      location: "Raipur",
      date: "25 June,2022",
      time: "01:00PM",
    },
  ];

  return (
    <div className="appointment-container">
      <p className="appointment-header">My Appointments</p>
      <div className="appointment-main">
        <table cellspacing="0" className="appointment-table">
          <tr>
            <th>
              <div className="table-first-row">
                <p>Name </p>
                <CgArrowsV style={{ color: `rgb(192,134,233)` }} />
              </div>
            </th>
            <th>
              <div className="table-first-row">
                <p>Location</p>{" "}
                <CgArrowsV style={{ color: `rgb(192,134,233)` }} />
              </div>
            </th>
            <th>
              <div className="table-first-row">
                <p>Date </p>
                <CgArrowsV style={{ color: `rgb(192,134,233)` }} />
              </div>
            </th>
            <th>
              <div className="table-first-row">
                <p>Time </p>
                <CgArrowsV style={{ color: `rgb(192,134,233)` }} />
              </div>
            </th>
            <th>
              <div className="table-first-row">
                <p>Status </p>
                <CgArrowsV style={{ color: `rgb(192,134,233)` }} />
              </div>
            </th>
            <th>
              <div className="table-sort">
                <GrSort />
              </div>
            </th>
          </tr>
          {arr.map((data, key) => (
            <tr className="appointment-row" key={key}>
              <td>
                <div className="table-name">
                  <img
                    src="https://dental-for-home.s3.us-west-2.amazonaws.com/character1.svg"
                    alt="Coludn't Load"
                    className="table-image"
                  />
                  {data.name}
                </div>
              </td>
              <td>{data.location}</td>
              <td>{data.date}</td>
              <td>{data.time}</td>
              <td>
                <BsClockFill className="table-clock" />
              </td>
              <td>
                <BsThreeDots style={{ height: `25px`, width: `25px` }} />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Appointments;
