import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/Sample.css";
import "./css/About.css";
import "./css/Auth.css";
import "./css/Booking.css";
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
import Booking from "./component/booking/Booking";
import Edit from "./component/edit/Edit";
import Service from "./component/service/Service";
import PricingMain from "./component/pricing/PricingMain";
import Pricing from "./component/pricing/Pricing";
import NewBooking from "./component/bookingNew/NewBooking";
import NewEdit from "./component/edit/NewEdit";
import axios from "axios";
import History from "./component/history/History";
import Patient from "./component/patient/Patient";

export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [superLoggedIn, setSuperLoggedIn] = useState(false);
  const [subscribedLoggedIn, setSubscribedLoggedIn] = useState(false);

  useEffect(async () => {
    const data = JSON.parse(localStorage.getItem("testObject"));
    if (data !== null) {
      await axios
        .get("http://3.80.77.164:5000/api/user/" + data.mobile)
        .then((res, err) => {
          if (!err) {
            if (res.data[0].subscriber === 0) {
              setSubscribedLoggedIn(true);
            } else {
              setSuperLoggedIn(true);
            }
          }
        });
    }
  }, []);

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
        }}
      >
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contactUs" exact element={<ContactUs />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/appointment" element={<Register />} />
            <Route path="/auth/register" element={<UserRegister />} />
            <Route path="/home" exact element={<DashBoard />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/booking" element={<NewBooking />} />
            <Route path="/edit" element={<NewEdit />} />
            <Route path="/serviceHistory" element={<History />} />
            <Route path="/service" element={<Service />} />
            <Route path="/myplan" element={<MyPlan />} />
            <Route path="/patient" element={<Patient />} />

          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
