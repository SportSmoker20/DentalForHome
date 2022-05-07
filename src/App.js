import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./css/Sample.css";
import "./css/About.css";
import "./css/Auth.css";
import "./css/Contact.css";
import "./css/DashBoard.css";
import "./css/Edit.css";
import "./css/NewEdit.css";
import "./css/History.css";
import "./css/Sidebar.css";
import "./css/NewPlan.css";
import "./css/Service.css";
import "./css/Patient.css";
import { createContext, useEffect, useState } from "react";
import Home from "./component/sample/Home";
import Login from "./component/auth/Login";
import About from "./component/about/About";
import ContactUs from "./component/contact/ContactUs";
import Register from "./component/auth/Register";
import UserRegister from "./component/auth/UserRegister";
import DashBoard from "./component/dashboard/DashBoard";
import MyPlan from "./component/plan/MyPlan";
import Service from "./component/service/Service";
import Pricing from "./component/pricing/Pricing";
import NewBooking from "./component/bookingNew/NewBooking";
import NewEdit from "./component/edit/NewEdit";
import axios from "axios";
import History from "./component/serviceRecord/History";
import Patient from "./component/patient/Patient";
import HistoryMain from "./component/history/HistoryMain";
import DentistBooking from "./component/bookingNew/DentistBooking";
import PatientProfile from "./component/patientProfile/PatientProfile";
import Logout from "./component/auth/Logout";
import React from 'react'

export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [superLoggedIn, setSuperLoggedIn] = useState(false);
  const [subscribedLoggedIn, setSubscribedLoggedIn] = useState(false);
  const [profileData,setProfileData] = useState(JSON.parse(localStorage.getItem("testObject")));
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(process.env.REACT_APP_BACKEND + "/api/user/" + profileData.mobile)
        .then((res, err) => {
          if (!err) {
            if (res.data[0].subscriber === 0) {
              // setSubscribedLoggedIn(true);
            } else {
              setSuperLoggedIn(true);
            }
          }
        });
    }
    function retrieveData() {
      if(profileData!==null){
        if (profileData.subscriber === 0 && profileData.email !== '') {
          setSubscribedLoggedIn(true);
        } else {
          setSuperLoggedIn(true);
        }
      }
      
    }
    if (profileData !== null) {
      fetchData();
    } else {
      retrieveData();
    }
  }, [profileData]);

  return (
    <div className="app-main">
      <UserContext.Provider
        value={{
          loggedIn: loggedIn,
          superLoggedIn: superLoggedIn,
          subscribedLoggedIn: subscribedLoggedIn,
          setLoggedIn: setLoggedIn,
          setSuperLoggedIn: setSuperLoggedIn,
          setSubscribedLoggedIn: setSubscribedLoggedIn,
          profileData: profileData,
          setProfileData: setProfileData
        }}
      >
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/appointment" element={<Register />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contactUs" exact element={<ContactUs />} />
            <Route path="/auth/register" element={<UserRegister />} />

            <Route path="/home" exact element={<DashBoard />} />
            <Route path="/booking" element={<NewBooking />} />
            <Route path="/edit" element={<NewEdit />} />
            <Route path="/serviceHistory" element={<History />} />
            <Route path="/service" element={<Service />} />
            <Route path="/myplan" element={<MyPlan />} />
            <Route path="/history" element={<HistoryMain />} />
            <Route path="/support" element={<Logout />} />

            <Route path="/adminBooking" element={<DentistBooking />} />
            <Route path="/patientProfile" element={<PatientProfile />} />
            <Route path="/patient" element={<Patient />} />

          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
