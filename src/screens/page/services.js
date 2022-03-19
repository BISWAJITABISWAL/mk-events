import React from "react";

function Services() {
  const items = [
    {
      title: "Celebrations",
      icon: "images/ballon.webp",
      description: "",
    },
    {
      title: "Birthday Parties",
      icon: "images/cake.webp",
      description: "",
    },
    {
      title: "Wedding",
      icon: "images/wedding.webp",
      description: "",
    },
    {
      title: "Engagements",
      icon: "images/ring.webp",
      description: "",
    },
    {
      title: "Social Events",
      icon: "images/socialEvents.webp",
      description: "",
    },
    {
      title: "Garden Parties",
      icon: "images/gardenParties.webp",
      description: "",
    },
    {
      title: "Special Events",
      icon: "images/spevent.webp",
      description: "",
    },
    {
      title: "Cocktails",
      icon: "images/cocktail.webp",
      description: "",
    },
  ];

  function toggleModal() {
    let imageModal = document.getElementById("serviceModal");
    if (imageModal != null) {
      imageModal.classList.toggle("show-modal");
    }
  }

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
              {items.map((item, index) => {
                return (
                  <div key={index} className="services">
                    <img src={item.icon} alt="service-icon" />
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div id="serviceModal" className="modal">
        <div className="modal-content">
          <span onClick={() => toggleModal()} className="modal-close-button">
            &times;
          </span>
        </div>
      </div>
    </>
  );
}

export default Services;
