import React, { useContext, useState } from "react";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

import { FaBell } from "react-icons/fa";

import { RiMessage2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import { AdminSidebarData, SidebarData } from "../sidebar/SidebarData";
import { UserContext } from "../../App";

function Navbar() {
  const { setLoggedIn, setSuperLoggedIn, setSubscribedLoggedIn } =
    useContext(UserContext);
  const profile = JSON.parse(localStorage.getItem("testObject"));

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const logout = () => {
    setLoggedIn(false);
    setSuperLoggedIn(false);
    setSubscribedLoggedIn(false);
    localStorage.removeItem("testObject");
    return <Navigate to="/auth/login" />;
  };
  if (profile.type === "admin") {
    return (
      <div className="navbar-supermain">
        <div className="navbar-main">
          <div className="navbar-text">
            <p style={{ fontWeight: `bold`, height: `10px` }}>
              Your Dashboard is Updated
            </p>
            <p>Hi {profile.name}, Exciting offers for you.</p>
          </div>
          <div className="navbar-menu">
            {sidebar ? (
              <GrClose onClick={showSidebar} className="navbar-menu-inner" />
            ) : (
              <FiMenu onClick={showSidebar} className="navbar-menu-inner" />
            )}
          </div>
          <div className="navbar-icon">
            <RiMessage2Fill className="navbar-icon-inner" />
            <FaBell className="navbar-icon-inner" />
            <FiLogOut className="navbar-icon-inner" onClick={logout} />
          </div>
        </div>
        <nav
          className={
            sidebar ? "nav-collapse-main active" : "nav-collapse-main "
          }
        >
          <ul className={"nav-menu-items"}>
            <div className="sidebar-profile">
              <div className="profile-image">
                <img
                  src="https://dentalforhome.s3.amazonaws.com/images/character1.svg"
                  className="profile-image-inner"
                  alt="Coludn't Load"
                />
              </div>
              <p>{profile.name}</p>
              <div className="sidebar-profile-edit">
                <Link to={"/edit"} className="sidebar-profile-edit">
                  <p>Edit Profile</p>
                </Link>
              </div>
            </div>
            {AdminSidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="navbar-supermain">
        <div className="navbar-main">
          <div className="navbar-text">
            <p style={{ fontWeight: `bold`, height: `10px` }}>
              Your Dashboard is Updated
            </p>
            <p>Hi {profile.name}, Exciting offers for you.</p>
          </div>
          <div className="navbar-menu">
            {sidebar ? (
              <GrClose onClick={showSidebar} className="navbar-menu-inner" />
            ) : (
              <FiMenu onClick={showSidebar} className="navbar-menu-inner" />
            )}
          </div>
          <div className="navbar-icon">
            <RiMessage2Fill className="navbar-icon-inner" />
            <FaBell className="navbar-icon-inner" />
            <FiLogOut className="navbar-icon-inner" onClick={logout} />
          </div>
        </div>
        <nav
          className={
            sidebar ? "nav-collapse-main active" : "nav-collapse-main "
          }
        >
          <ul className={"nav-menu-items"}>
            <div className="sidebar-profile">
              <div className="profile-image">
                <img
                  src="https://dentalforhome.s3.amazonaws.com/images/character1.svg"
                  className="profile-image-inner"
                  alt="Coludn't Load"
                />
              </div>
              <p>{profile.name}</p>
              <div className="sidebar-profile-edit">
                <Link to={"/edit"} className="sidebar-profile-edit">
                  <p>Edit Profile</p>
                </Link>
              </div>
            </div>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* </div> */}
      </div>
    );
  }
}

export default Navbar;
