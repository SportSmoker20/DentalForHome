import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { useState } from "react";
import Home from "./component/sample/Home";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import About from "./component/about/About";
import ContactUs from "./component/contact/ContactUs";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contactUs" exact element={<ContactUs />} />
          <Route
            path="/auth/login"
            element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
