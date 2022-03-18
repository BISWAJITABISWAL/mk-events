import React from "react";
import Contact from "./Contact";
import Footer from "../../component/view/Footer";
import Header from "../../component/view/Header";
import About from "./about";
import Carousel from "./carousel";
import Gallary from "./Gallary";
import Services from "./services";

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
    </div>
  );
}

export default Main;
