import React from "react";

function About() {
  return (
    <div id="about" className="main-about">
      <div className="main-about-container">
        <div className="main-about-container-content">
          <h1 className="font-bold text-xl mb-4">
            Our Valuable{" "}
            <span
              className="font-bold text-primary border-primary"
              style={{ borderBottom: "5px solid" }}
            >
              {" "}
              Team{" "}
            </span>
          </h1>
          <p>
            We at Mahakali events plan for Wedding Functions to Birthday Parties
            or Corporate Events to Musical Functions, We offer full range of
            Event Management Services that scale to your needs & budget.
          </p>
        </div>

        <div className="owner">
          <div className="owner-image">
            <div className="owner-image-bracket"></div>
            <img src="./images/team4.webp" alt="team" />
            <div className="owner-image-shadow"></div>
          </div>
          <div className="owner-detail">
            <h4
              style={{ margin: "0" }}
              className="mb-4 font-bold text-primary text-xl"
            >
              Welcome,{" "}
            </h4>
            <p className="mb-4">
              With Mahakali Events DECORATIONS we get those divine vibes around
              the atmosphere. We help our clients choose from our wide range of
              Mahakali Events Setup Designs within their budget. The Mahakali
              Events Decorations at Home in Rajasthan have crazy fan following
              where most of the Rajasthankars follow the trend. Mahakali Events
              DECORATONS SETUP will include the Mahakali Events DECORATIONS
              BACKDROP, Mahakali Events SEATING TABLE for BRIDE/GROOM, Mahakali
              Events TAG and WELCOME Board.
            </p>

            <h6>By: Pooja Kshyap</h6>
          </div>
        </div>

        <div className="main-about-grid">
          <div className="about">
            <img src="./images/team5.webp" alt="team" />
            <div className="content">
              <div className="data">
                <h6>Abhishek Dana</h6>
                <p>Manager</p>
              </div>
            </div>
          </div>
          <div className="about">
            <img src="./images/team5.webp" alt="team" />
            <div className="content">
              <div className="data">
                <h6>Abhishek Dana</h6>
                <p>Manager</p>
              </div>
            </div>
          </div>
          <div className="about">
            <img src="./images/team.webp" alt="team" />
            <div className="content">
              <div className="data">
                <h6>Abhishek Dana</h6>
                <p>Manager</p>
              </div>
            </div>
          </div>
          <div className="about">
            <img src="./images/team.webp" alt="team" />
            <div className="content">
              <div className="data">
                <h6>Abhishek Dana</h6>
                <p>Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
