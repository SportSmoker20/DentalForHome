import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useEffect, useState } from "react";
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

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [superLoggedIn, setSuperLoggedIn] = useState(true);
  const [subscribedLoggedIn, setSubscribedLoggedIn] = useState(true);
  useEffect(async()=>{
    const data = JSON.parse(localStorage.getItem("testObject"))
    if(data!==null){
      await axios
      .get("http://localhost:5000/api/user/" + data.mobile).then((res,err)=>{
        if(!err){
          if(res.data[0].subscriber === 1){
            setSubscribedLoggedIn(true)
          } else {
            setSuperLoggedIn(true)
          }
          
          
        }
      }
      )
    }
  },[])



  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contactUs" exact element={<ContactUs />} />
          <Route
            path="/auth/login"
            element={<Login setSubscribedLoggedIn={setSubscribedLoggedIn} subscribedLoggedIn={subscribedLoggedIn} superLoggedIn={superLoggedIn} loggedIn={loggedIn} setSuperLoggedIn={setSuperLoggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/appointment" element={<Register />} />
          <Route path="/auth/register" element={<UserRegister superLoggedIn={superLoggedIn}  setSuperLoggedIn={setSuperLoggedIn}/>} />
          <Route path="/home" exact element={<DashBoard setSubscribedLoggedIn={setSubscribedLoggedIn} subscribedLoggedIn={subscribedLoggedIn}/>} />
          <Route path="/pricing" element={<Pricing  loggedIn={loggedIn} />} />
          <Route path="/booking" element={<NewBooking subscribedLoggedIn={subscribedLoggedIn} />} />
          <Route path="/edit" element={<NewEdit subscribedLoggedIn={subscribedLoggedIn}/>} />
          <Route path="/service" element={<Service subscribedLoggedIn={subscribedLoggedIn}/>} />
          <Route path="/myplan" element={<MyPlan subscribedLoggedIn={subscribedLoggedIn}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
