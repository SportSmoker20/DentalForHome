import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../App";

function Logout() {
  const { setLoggedIn, setSuperLoggedIn, setSubscribedLoggedIn } =
    useContext(UserContext);

  setLoggedIn(false);
  setSuperLoggedIn(false);
  setSubscribedLoggedIn(false);
  localStorage.removeItem("testObject");
  console.log("7");
  return <Navigate to="/auth/login" />;
}

export default Logout;
