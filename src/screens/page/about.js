import React from "react";

function About() {
  return (
    <div id="about" className="main-about">
      <div className="main-about-container">
        <div className="main-about-container-content">
          <h4>OUR TEAM</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            recusandae ducimus amet facilis accusamus quis asperiores illo
            laudantium rem, corporis quam aspernatur fuga enim, dolores at,
            consectetur odit laboriosam! Ipsum ipsa rerum.
          </p>
        </div>

        <div className="owner">
          <img src="./images/team4.png" alt="" />
          <div className="owner-detail">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              mollitia pariatur magnam sunt, porro consectetur itaque. Ipsum,
              alias. Eligendi hic, pariatur, nulla ullam minus natus placeat
              quam unde et voluptate excepturi! Nihil tempora obcaecati debitis?
              Sequi maxime fuga, alias vitae numquam ipsum! Enim distinctio
              nesciunt ab non nemo velit molestiae.
            </p>

            <h6>By: Owner name</h6>
          </div>
        </div>

        <div className="main-about-grid">
          <div className="about">
            <img src="./images/team5.png" alt="" />
          </div>
          <div className="about">
            <img src="./images/team5.png" alt="" />
          </div>
          <div className="about">
            <img src="./images/team5.png" alt="" />
          </div>
          <div className="about">
            <img src="./images/team.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
