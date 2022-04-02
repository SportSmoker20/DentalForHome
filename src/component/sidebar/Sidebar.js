import React from "react";

import { Link } from "react-router-dom";
import { AdminSidebarData, SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

function Sidebar(props) {
  const profile = JSON.parse(localStorage.getItem("testObject"));

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={"nav-menu active"}>
          <ul className="nav-menu-items">
            <div className="sidebar-profile">
              <div className="footer-bottom-text">
                <div
                  style={{
                    padding: `3px`,
                    paddingBottom: `1px`,
                    backgroundColor: `white`,
                    boxShadow: `0 0px 3px rgb(0 0 0 / 0.3)`,
                    borderRadius: `12px`,
                  }}
                >
                  <a href='https://dentalforhome.com' target='_blank'>
                  <img
                    src="https://dentalforhome.s3.amazonaws.com/images/logoMain1.PNG"
                    style={{
                      height: `40px`,
                      width: `40px`,
                      borderRadius: `10px`,
                    }}
                    alt={"Couldn't Load"}
                  />
                  </a>
                </div>
                <a href='https://dentalforhome.com' target='_blank' style={{marginLeft:`10px`,textDecoration:`none`, color: `black`, fontSize: `16.4px` }}>
                  Dental For Home
                </a>
              </div>
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
            {profile.type === "admin" ? (
              <div>
                {AdminSidebarData.map((item, index) => {
                  return (
                    // style={props.tab === item.title ? {backgroundColor:'rgb(146, 191, 241)'}:null}
                    <li key={index} className={item.cName} style={props.tab === item.title ? {backgroundColor:'rgb(146, 191, 241)'}:null}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </div>
            ) : (
              <div>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName} style={props.tab === item.title ? {backgroundColor:'rgb(146, 191, 241)'}:null}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </div>
            )}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
