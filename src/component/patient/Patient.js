import React, { useState } from "react";
import Navbar from "../dashboard/Navbar";
import PatientProfile from "../patientProfile/PatientProfile";
import Sidebar from "../sidebar/Sidebar";
import PatientCard from "./PatientCard";
import PatientTop from "./PatientTop";

function Patient() {
  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  const patientData = [
    {
      name: "Riya Arora",
      patientId: "349700DGF8043",
      age: "33 years old",
      dob: "18th January, 1988",
      lastAppointment: "30th March, 2022",
    },
    {
      name: "Riya Arora",
      patientId: "349700DGF8043",
      age: "33 years old",
      dob: "18th January, 1988",
      lastAppointment: "30th March, 2022",
    },
    {
      name: "Riya Arora",
      patientId: "349700DGF8043",
      age: "33 years old",
      dob: "18th January, 1988",
      lastAppointment: "30th March, 2022",
    },
    {
      name: "Riya Arora",
      patientId: "349700DGF8043",
      age: "33 years old",
      dob: "18th January, 1988",
      lastAppointment: "30th March, 2022",
    },
    {
      name: "Riya Arora",
      patientId: "349700DGF8043",
      age: "33 years old",
      dob: "18th January, 1988",
      lastAppointment: "30th March, 2022",
    },
    {
      name: "Riya Arora",
      patientId: "349700DGF8043",
      age: "33 years old",
      dob: "18th January, 1988",
      lastAppointment: "30th March, 2022",
    },
  ];

  const[patient,setPatient] = useState('')


  if(patient !== ''){
    return <PatientProfile patient={patient}/>
  } else {
  return (
    <div className="patient-container">
      {width > 800 ? <Sidebar tab='patientProfile'/> : <Navbar />}
      <PatientTop />
      <div className="patient-container-card">
        {patientData.map((data, key) => (
          
          <PatientCard key={key} patient={data} setPatient={setPatient}/>
        ))}
      </div>
    </div>
  );
}}

export default Patient;
