import React from 'react';

function Header() {

    const openSideMenu = () => {
        let headerItems = document.getElementsByClassName("phone-menu");
        headerItems[0].classList.toggle("show");
      }


      
function changeHeaderNavActivePhone(event) {
    let items = document.getElementsByClassName("phone-menu")[0].children;
    Array.from(items).forEach((el) => {
      el.classList.remove("active");
    });
  
    event.classList.add("active");
  
  
    openSideMenu();
  }


  const changeHeaderNavActive = 
  (event) => {
    let items = document.getElementById("headerItems").children;
    Array.from(items).forEach((el) => {
     
    el.classList.remove("active");
    });
  
    console.log(event);
    event.classList.add("active");
  }
  
      
  return (
  <header>

  <div  className="logo">
      <img src="./images/logo2.png" alt=""/>
  </div>
  <div onClick={()=>openSideMenu()} className="menu-button">
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
  </div>
  <ul id="headerItems"  className="">
      <li onClick={()=>changeHeaderNavActive} className="active">
          <a href="#home">Home</a>
      </li>
      <li onClick={()=>changeHeaderNavActive}  className="">
          <a href="#services">Services</a>
      </li>
      <li onClick={()=>changeHeaderNavActive} className="">
          <a href="#about">About</a>
      </li>
      <li onClick={()=>changeHeaderNavActive} className="">
          <a href="#gallery">Gallery</a>
      </li>
      <li onClick={()=>changeHeaderNavActive} className="">
          <a href="#contact">Contact</a>
      </li>
  </ul>



  <ul id=""  className="phone-menu">
      <li onClick={()=>changeHeaderNavActivePhone(this)} className="active">
          <a href="#home">Home</a>
      </li>
      <li onClick={()=>changeHeaderNavActivePhone(this)}>
          <a href="#services">Services</a>
      </li>
      <li onClick={()=>changeHeaderNavActivePhone(this)}>
          <a href="#about">About</a>
      </li>
      <li onClick={()=>changeHeaderNavActivePhone(this)}>
          <a href="#gallery">Gallery</a>
      </li>
      <li onClick={()=>changeHeaderNavActivePhone(this)}>
          <a href="#contact">Contact</a>
      </li>
  </ul>
</header>
  );
}

export default Header;
