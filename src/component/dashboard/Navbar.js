import React, { useState } from "react";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

import { FaBell, FaIcons, FaUserEdit } from "react-icons/fa";

import { RiMessage2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { SidebarData } from "../sidebar/SidebarData";
import { IconContext } from "react-icons";
import "../../css/Sidebar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className="navbar-supermain">
      <div className="navbar-main">
        <div className="navbar-text">
          <p style={{ fontWeight: `bold`,height:`10px` }}>Your Dashboard is Updated</p>
          <p>Hi Users, Exciting offers for you.</p>
        </div>
        <div className="navbar-menu">
          {sidebar ? <GrClose onClick={showSidebar} className="navbar-menu-inner" />  : <FiMenu onClick={showSidebar} className="navbar-menu-inner" />  }
          
        </div>
        <div className="navbar-icon">
          <RiMessage2Fill className="navbar-icon-inner" />
          <FaBell className="navbar-icon-inner" />
          <FiLogOut className="navbar-icon-inner" />
        </div>
      </div>
      {/* <div className="nav-collapse-main"> */}
      <nav
        className={sidebar ? "nav-collapse-main active" : "nav-collapse-main "}
      >
        <ul className={"nav-menu-items"}>
          <div className="sidebar-profile">
            {/* <p className="sidebar-dental">
              <label className="sidebar-profile-dental">Dental</label> For Home
            </p> */}
            <div className="profile-image">
              <img src='https://dentalforhome.s3.amazonaws.com/images/character1.svg' className="profile-image-inner" />
            </div>
            <p>Jesson George</p>
            <div className="sidebar-profile-edit">
              <FaUserEdit style={{ padding: `20px 15px 0 0` }} />
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

export default Navbar;
