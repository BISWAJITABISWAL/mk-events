import React, { useState } from "react";

function Header() {
  const navItems = [
    {
      id: "home",
      name: "Home",
    },
    {
      id: "services",
      name: "Services",
    },
    {
      id: "about",
      name: "About Us",
    },
    {
      id: "gallery",
      name: "Gallery",
    },
    {
      id: "contact",
      name: "Contact Us",
    },
  ];

  const [activeId, setActiveId] = useState("home");

  const openSideMenu = () => {
    let headerItems = document.getElementsByClassName("phone-menu");
    headerItems[0].classList.toggle("show");
  };

  const changeHeaderNavActivePhone = (val) => {
    setActiveId(val.id);
    openSideMenu();
  };

  return (
    <header>
      <div className="logo">
        <img src="./images/logo2.webp" alt="" />
      </div>
      <div onClick={() => openSideMenu()} className="menu-button">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
      <ul id="headerItems" className="">
        {navItems.map((val) => (
          <li
            onClick={() => setActiveId(val.id)}
            className={activeId === val.id ? "active" : ""}
          >
            <a href={"#" + val.id}>{val.name}</a>
          </li>
        ))}

        {/* <li
          className={
            window.location.pathname.includes("#services") ? "active" : ""
          }
        >
          <a href="#services">Services</a>
        </li>
        <li
          className={
            window.location.pathname.includes("#about") ? "active" : ""
          }
        >
          <a href="#about">About</a>
        </li>
        <li
          className={
            window.location.pathname.includes("#gallery") ? "active" : ""
          }
        >
          <a href="#gallery">Gallery</a>
        </li>
        <li
          className={
            window.location.pathname.includes("#contact") ? "active" : ""
          }
        >
          <a href="#contact">Contact</a>
        </li> */}
      </ul>

      <ul id="" className="phone-menu">
        {navItems.map((val) => (
          <li
            onClick={() => changeHeaderNavActivePhone(val)}
            className={activeId === val.id ? "active" : ""}
          >
            <a href={"#" + val.id}>{val.name}</a>
          </li>
        ))}

        {/* <li onClick={() => changeHeaderNavActivePhone(this)}>
          <a href="#services">Services</a>
        </li>
        <li onClick={() => changeHeaderNavActivePhone(this)}>
          <a href="#about">About</a>
        </li>
        <li onClick={() => changeHeaderNavActivePhone(this)}>
          <a href="#gallery">Gallery</a>
        </li>
        <li onClick={() => changeHeaderNavActivePhone(this)}>
          <a href="#contact">Contact</a>
        </li> */}
      </ul>
    </header>
  );
}

export default Header;
