import React, { useContext, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../../App";
// import "bootstrap/dist/css/bootstrap.min.css";

function HomeNavbar(props) {
  const [sidebar, setSidebar] = useState(false);
  const [drop, setDrop] = useState(false);
  const [data,setData] = useState(JSON.parse(localStorage.getItem("testObject")));
  console.log(data);
  const scrollFaq = () => {
    const anchor = document.querySelector("#home-faq");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    showSidebar();
  };
  const { setLoggedIn, setSuperLoggedIn, setSubscribedLoggedIn } =
    useContext(UserContext);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  // const scrollService = () => {
  //   const anchor = document.querySelector("#home-service");
  //   anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  // };

  const logout = () => {
    setLoggedIn(false);
    setSuperLoggedIn(false);
    setSubscribedLoggedIn(false);
    setData(null)
    localStorage.removeItem("testObject");
    return <Navigate to="/auth/login" />;
  };

  return (
    <div className="home-navbar">
      <div className="home-navbar-container">
        <div className="navbar-left">
          <div className="navbar-left-text">
            {/* <p>DENTAL FOR HOME</p> */}
            <Link to={`/`} style={{ textDecoration: `none` }}>
              <img
                src="https://dental-for-home.s3.us-west-2.amazonaws.com/logoMain.png"
                alt="Coludn't Load"
                style={{ height: `100px`, width: `max-content` }}
              />
            </Link>
          </div>
        </div>
        <div className="navbar-center">
          <div className="navbar-center-option">
            <Link to={`/`} style={{ textDecoration: `none` }}>
              <p
                style={
                  props.tabName === "home"
                    ? { color: `rgb(60,100,177)`, fontWeight: `600` }
                    : { color: `rgb(55, 63, 65)` }
                }
              >
                Home
              </p>
            </Link>
          </div>
          <div className="navbar-center-option">
            <Link to={`/about`} style={{ textDecoration: `none` }}>
              <p
                style={
                  props.tabName === "about"
                    ? { color: `rgb(60,100,177)`, fontWeight: `600` }
                    : { color: `rgb(55, 63, 65)` }
                }
              >
                About
              </p>
            </Link>
          </div>
          <div className="navbar-center-option">
            <Link to={`/pricing`} style={{ textDecoration: `none` }}>
              <p
                style={
                  props.tabName === "pricing"
                    ? { color: `rgb(60,100,177)`, fontWeight: `600` }
                    : { color: `rgb(55, 63, 65)` }
                }
              >
                Pricing
              </p>
            </Link>
          </div>
          <div className="navbar-center-option">
            {/* <p onClick={() => scrollContact()}>Contact</p> */}
            <Link to={`/contactUs`} style={{ textDecoration: `none` }}>
              {" "}
              <p
                style={
                  props.tabName === "contact"
                    ? { color: `rgb(60,100,177)`, fontWeight: `600` }
                    : { color: `rgb(55, 63, 65)` }
                }
              >
                Contact
              </p>
            </Link>
          </div>
          <div className="navbar-center-option">
            <p onClick={() => scrollFaq()}>FAQ</p>
          </div>
        </div>
        <div className="navbar-right">
          {data === null ? (
            <Link to={`/auth/login`} style={{ textDecoration: `none` }}>
              <div className="navbar-right-text">
                <p style={{ color: `white` }}>Log In</p>
              </div>
            </Link>
          ) : (
            <div>
              <div className="navbar-right-text" onClick={()=>setDrop(!drop)}>
                <p style={{ color: `white` }}>Log Out</p>
                <IoIosArrowDown />
              </div>
              {drop ?  <div className="navbar-dropdown">
                
                <div className="navbar-dropdown-list"><p>{data.name}</p></div>
                <div className="navbar-dropdown-list id"><label>Customer #: </label><p>{data.id}</p></div>
                <div className="navbar-dropdown-list logout"><p onClick={()=>logout()}>Log Out</p></div>
              
            </div> : null}
              
            </div>

          )}
        </div>
      </div>
      <div className="home-navbar-container-small">
        <div className="navbar-small">
          {/* <p>DENTAL FOR HOME</p> */}
          <div className="navbar-small-close">
            <div className="navbar-small-img">
              <img
                src="https://dental-for-home.s3.us-west-2.amazonaws.com/logoMain.png"
                alt="Coludn't Load"
                style={{ height: `100px`, width: `max-content` }}
              />
            </div>
            <div>
              {sidebar ? (
                <ImCross onClick={showSidebar} className="navbar-img" />
              ) : (
                <FiMenu onClick={showSidebar} className="navbar-img" />
              )}
            </div>
            <nav
              className={
                sidebar ? "small-navbar-center active" : "small-navbar-center "
              }
            >
              <div className="navbar-small-img">
                <img
                  src="https://dental-for-home.s3.us-west-2.amazonaws.com/logoMain.png"
                  alt="Coludn't Load"
                  style={{ height: `100px`, width: `max-content` }}
                />
                <ImCross onClick={showSidebar} className="navbar-img" />
              </div>
              <div className="small-navbar-center-option">
                <Link to={`/`} style={{ textDecoration: `none` }}>
                  <p
                    style={
                      props.tabName === "home"
                        ? { color: `rgb(60,100,177)`, fontWeight: `600` }
                        : { color: `rgb(55, 63, 65)` }
                    }
                  >
                    Home
                  </p>
                </Link>
              </div>
              <div className="small-navbar-center-option">
                <Link to={`/about`} style={{ textDecoration: `none` }}>
                  <p
                    style={
                      props.tabName === "about"
                        ? { color: `rgb(60,100,177)`, fontWeight: `600` }
                        : { color: `rgb(55, 63, 65)` }
                    }
                  >
                    About
                  </p>
                </Link>
              </div>
              <div className="small-navbar-center-option">
                <Link to={`/pricing`} style={{ textDecoration: `none` }}>
                  <p
                    style={
                      props.tabName === "pricing"
                        ? { color: `rgb(60,100,177)`, fontWeight: `600` }
                        : { color: `rgb(55, 63, 65)` }
                    }
                  >
                    Pricing
                  </p>
                </Link>
              </div>
              <div className="small-navbar-center-option">
                {/* <p onClick={() => scrollContact()}>Contact</p> */}
                <Link to={`/contactUs`} style={{ textDecoration: `none` }}>
                  {" "}
                  <p
                    style={
                      props.tabName === "contact"
                        ? { color: `rgb(60,100,177)`, fontWeight: `600` }
                        : { color: `rgb(55, 63, 65)` }
                    }
                  >
                    Contact
                  </p>
                </Link>
              </div>
              <div></div>
              <div className="small-navbar-center-option">
                <p onClick={() => scrollFaq()}>FAQ</p>
              </div>
              <div className="small-navbar-center-option login-bottm">
                {data === null ? (
                  <Link to={`/auth/login`} style={{ textDecoration: `none` }}>
                    <div className="navbar-right-text">
                      <p style={{ color: `white` }}>Log In</p>
                    </div>
                  </Link>
                ) : (
                  <div className="navbar-right-text" onClick={() => logout()}>
                    <p style={{ color: `white` }}>Log Out</p>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNavbar;
