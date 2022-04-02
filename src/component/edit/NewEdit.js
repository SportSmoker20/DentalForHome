import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import NewEditBottom from "./NewEditBottom";
import NewEditTop from "./NewEditTop";
import { Navigate } from "react-router-dom";
import Navbar from "../dashboard/Navbar";
import axios from "axios";
import NewEditPersonal from "./NewEditPersonal";

function NewEdit() {
  const [width, setWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });
  const data = JSON.parse(localStorage.getItem("testObject"));
  const [memberData, setMemberData] = useState([]);
  const [active, setActive] = useState(data.id);

  const addMember = () => {
    async function adMem() {
      await axios.post("http://localhost:5000/api/user/member", {
        // name: Danny,
        // email: dhanesh123indiana@gmail.com,
        // parent_id: 10
      });
    }
  };

  useEffect(() => {
    async function fetchMember() {
      await axios
        .get("http://localhost:5000/api/user/member/" + data.id)
        .then((res, err) => {
          if (!err) {
            setMemberData(res.data);
          }
        });
      console.log(memberData);
    }

    if (memberData.length === 0) fetchMember();
  }, [data]);
  if (data === null) {
    return <Navigate to="/auth/login" />;
  } else {
    if (data.subscriber === 0 && data.type === "user") {
      return <Navigate to="/pricing" />;
    }
  }
  return (
    <div className="new-edit-container">
      {width > 800 ? <Sidebar tab="edit" /> : <Navbar />}
      <NewEditTop
        memberData={memberData}
        addMember={addMember}
        setActive={setActive}
      />
      {/* <NewEditPersonal setName={setName}
        name={name}
        setDob={setDob}
        dob={dob}
        setGender={setGender}
        gender={gender}
        setMail={setMail}
        mail={mail}
        setMob={setMob}
        mob={mob}/> */}
      <NewEditBottom
        memberData={memberData}
        addMember={addMember}
        active={active}
      />
    </div>
  );
}

export default NewEdit;
