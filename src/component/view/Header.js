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
        <img src="./images/logo2.webp" alt="logo" />
      </div>
      <div onClick={() => openSideMenu()} className="menu-button">
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
      <ul id="headerItems" className="">
        {navItems.map((val) => (
          <li
            key={val.id}
            onClick={() => setActiveId(val.id)}
            className={activeId === val.id ? "active" : ""}
          >
            <a href={"#" + val.id}>{val.name}</a>
          </li>
        ))}
      </ul>

      <ul id="" className="phone-menu">
        {navItems.map((val) => (
          <li
            key={val.id}
            onClick={() => changeHeaderNavActivePhone(val)}
            className={activeId === val.id ? "active" : ""}
          >
            <a href={"#" + val.id}>{val.name}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
