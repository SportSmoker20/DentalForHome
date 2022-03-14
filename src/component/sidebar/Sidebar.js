import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { AdminSidebarData, SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

function Sidebar() {
  const profile = JSON.parse(localStorage.getItem("testObject"));
  console.log(profile.name)

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div> */}
        <nav className={"nav-menu active"}>
          <ul className="nav-menu-items">
            {/* <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li> */}
            <div className="sidebar-profile">
              {/* <p className="sidebar-dental">
                <label className="sidebar-profile-dental">Dental</label> For
                Home
              </p> */}
              <div className="footer-bottom-text">
                <div style={{padding:`3px`,paddingBottom:`1px`,backgroundColor:`white`,boxShadow: `0 0px 3px rgb(0 0 0 / 0.3)`,borderRadius:`12px`}}>
            <img
              src='https://dentalforhome.s3.amazonaws.com/images/logoMain1.PNG'
              style={{ height: `40px`, width: `40px`,borderRadius:`10px` }}
              alt={"Couldn't Load"}
            />
            </div>
            <p style={{color:`black`,fontSize:`16.4px`}}>Dental For Home</p>
          </div>
              {/* <img src={image} className='profile-image'/> */}
              <div className="profile-image">
                <img src='https://dentalforhome.s3.amazonaws.com/images/character1.svg' className="profile-image-inner" />
              </div>
              <p>{profile.name}</p>
              <div className="sidebar-profile-edit">
                {/* <FaIcons.FaUserEdit style={{ padding: `20px 15px 0 0` }} /> */}
                <Link to={"/edit"} className="sidebar-profile-edit">
                  <p>Edit Profile</p>
                </Link>
              </div>
            </div>
            {profile.type==="admin"?<div>{AdminSidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}</div>:<div>{AdminSidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}</div>}
            
          </ul>
        </nav>
      </IconContext.Provider>
      {/* <img src={sidebarFooter} className="sidebar-img" /> */}
    </>
  );
}

export default Sidebar;
