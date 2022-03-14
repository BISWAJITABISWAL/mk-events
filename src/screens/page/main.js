import React, { useCallback, useEffect, useState } from "react";
import Contact from "./Contact";
import Footer from "../../component/view/Footer";
import Header from "../../component/view/Header";
import About from "./about";
import Carousel from "./carousel";
import Gallary from "./Gallary";
import Services from "./services";
import { FullPage, Slide } from "react-full-page";

function Main() {
  return (
    <div className="main-section">
      <Header />

      <Carousel></Carousel>

      <Services></Services>

      <About></About>

      <Gallary></Gallary>

      <Contact></Contact>

      <Footer />

      <div className="d-none"></div>
    </div>
  );
}

export default Main;
