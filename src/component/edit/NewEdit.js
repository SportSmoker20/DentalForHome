import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import NewEditBottom from "./NewEditBottom";
import NewEditTop from "./NewEditTop";
import { Navigate } from "react-router-dom";
import Navbar from "../dashboard/Navbar";

function NewEdit() {
  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });
  const data = JSON.parse(localStorage.getItem("testObject"));

  if (data === null) {
    return <Navigate to="/auth/login" />;
  } else {
    if (data.subscriber === 0 && data.type === "user") {
      return <Navigate to="/pricing" />;
    }
  }
  return (
    <div className="new-edit-container">
      {width > 800 ? <Sidebar /> : <Navbar />}
      <NewEditTop />
      <NewEditBottom />
    </div>
  );
}

export default NewEdit;
