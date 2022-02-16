import React from "react";
import Contact from "../../component/view/Contact";
import Footer from "../../component/view/Footer";
import Header from "../../component/view/Header";
import About from "./about";
import Carousel from "./carousel";
import Gallary from "./Gallary";
import Services from "./services";
import services from "./services";

function Main() {
  return (
    <div className="main-section">
      <div className="bg-bubble bg-yellow"></div>
      <div className="bg-bubble bg-red"></div>

      <div className="bg-bubble bg-green"></div>

      <div className="bg-bubble bg-blue"></div>

      <Header />
      <Carousel></Carousel>
      <Services />

      <About></About>
      <Gallary />
      <Contact />
      <Footer />
    </div>
  );
}

export default Main;
