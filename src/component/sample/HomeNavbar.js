import React from "react";

function HomeNavbar() {

  const scrollFaq = () => {
    const anchor = document.querySelector('#home-faq')
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const scrollHome = () => {
    const anchor = document.querySelector('#HomeBanner')
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  const scrollAbout = () => {
    const anchor = document.querySelector('#home-about')
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  const scrollService = () => {
    const anchor = document.querySelector('#home-service')
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  const scrollContact = () => {
    const anchor = document.querySelector('#home-contact')
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
      <div className="home-navbar">
    <div className="home-navbar-container">
      <div className="navbar-left">
        <div  className="navbar-left-text"><p>DENTAL FOR HOME</p></div>
      </div>
      <div className="navbar-center">
        <div><p onClick={()=>scrollHome()}>Home</p></div>
        <div><p onClick={()=>scrollAbout()}>About</p></div>
        <div><p onClick={()=>scrollService()}>Services</p></div>
        <div><p onClick={()=>scrollContact()}>Contact</p></div>
        <div><p onClick={()=>scrollFaq()}>FAQ</p></div>
      </div>
      <div className="navbar-right">
        <div className="navbar-right-text">
          <p>Log In</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default HomeNavbar;
