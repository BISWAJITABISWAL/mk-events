import React from "react";

function Services() {
  return (
    <>
      <div className="relative">
        <div className="bg-bubble bg-red"></div>

        <div id="services" className="main-services">
          <div className="main-services-container">
            <div className="main-services-container-content">
              <h1 className="font-bold text-xl mb-4">
                We Plan Special{" "}
                <span
                  className="font-bold text-primary border-primary"
                  style={{ borderBottom: "5px solid" }}
                >
                  {" "}
                  Events{" "}
                </span>
              </h1>
              <p>
                Celebrate everyday. From start to finish, for all the reasons:
                Birthday, Cocktail party, Engagement Party, Holi Festival, we
                turn your vision into a fun, fresh, beautiful experience. From
                hand picked party location, florals, linens, menu, music,
                stationery and hand crafted everything, our first priority is to
                reflect your personal style. A Perfect Event is an award winning
                planning and design firm whose style, ease and expertise is
                matched only by its delivery and execution. With our attention
                to detail and customer focused planning team we have set the
                trend with social clients and industry partners year after year.
                We can't wait to create the celebration of your dreams.
              </p>
            </div>
            <div className="main-services-grid">
              <div className="services">
                <img src="./images/icon1.png" alt="service-icon" />
                <p>Birthday Events</p>
              </div>
              <div className="services">
                <img src="./images/icon2 .png" alt="service-icon" />
                <p>Birthday Events</p>
              </div>
              <div className="services">
                <img src="./images/icon3 .png" alt="service-icon" />
                <p>Marriage Events</p>
              </div>
              <div className="services">
                <img src="./images/icon4.png" alt="service-icon" />
                <p>Engagement Events</p>
              </div>
              <div className="services">
                <img src="./images/icon1.png" alt="service-icon" />
                <p>Birthday Events</p>
              </div>
              <div className="services">
                <img src="./images/icon2 .png" alt="service-icon" />
                <p>Birthday Events</p>
              </div>
              <div className="services">
                <img src="./images/icon3 .png" alt="service-icon" />
                <p>Marriage Events</p>
              </div>
              <div className="services">
                <img src="./images/icon4.png" alt="service-icon" />
                <p>Engagement Events</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
