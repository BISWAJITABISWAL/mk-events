import React, { useEffect, useState } from "react";
import { getSliderImages } from "../../services/event.service";

function Carousel() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);
  const prevSlide = () => {
    let carouselItems =
      document.getElementById("carousel_tarck") &&
      document.getElementById("carousel_tarck").children;
    let activeIndex;
    console.log(carouselItems);
    if (carouselItems != null) {
      Array.from(carouselItems).forEach((el, index) => {
        if (el.classList.contains("active")) {
          activeIndex = index;
        }
      });

      if (activeIndex !== 0) {
        Array.from(carouselItems).forEach((el, index) => {
          if (el.classList.contains("active")) {
            activeIndex = index;
          }

          el.classList.remove("active");
        });

        Array.from(carouselItems)[activeIndex - 1] &&
          Array.from(carouselItems)[activeIndex - 1].classList.add("active");
      } else {
        Array.from(carouselItems).forEach((el, index) => {
          if (el.classList.contains("active")) {
            activeIndex = index;
          }

          el.classList.remove("active");
        });
        Array.from(carouselItems)[carouselItems.length - 1].classList.add(
          "active"
        );
      }
    }
  };

  const nextSlide = () => {
    let carouselItems =
      document.getElementById("carousel_tarck") &&
      document.getElementById("carousel_tarck").children;
    let activeIndex;
    if (carouselItems != null) {
      Array.from(carouselItems).forEach((el, index) => {
        if (el.classList.contains("active")) {
          activeIndex = index;
        }
      });

      if (activeIndex !== carouselItems.length - 1) {
        Array.from(carouselItems).forEach((el, index) => {
          if (el.classList.contains("active")) {
            activeIndex = index;
          }

          el.classList.remove("active");
        });

        Array.from(carouselItems)[activeIndex + 1].classList.add("active");
      } else {
        Array.from(carouselItems).forEach((el, index) => {
          if (el.classList.contains("active")) {
            activeIndex = index;
          }

          el.classList.remove("active");
        });
        Array.from(carouselItems)[0].classList.add("active");
      }
    }
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await getSliderImages();
      setSlides(data);

      setLoading(false);
    };

    fetchData();
  }, [slides]);

  return (
    <div id="home" className="carousel">
      <div className="carousel_track-container">
        <div id="carousel_tarck" className="carousel_tarck">
          {slides &&
            slides.map((slide, index) => {
              return (
                <div
                  className={"carousel_slide " + (index === 0 ? "active" : "")}
                >
                  <img
                    className="carousel_image"
                    src={slide.media.url}
                    alt="slider"
                  />
                </div>
              );
            })}
        </div>

        <div className="crousel-buttons">
          <button
            onClick={() => prevSlide()}
            className="carousel_buttonn carousel_button--left"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.51 20.13L15.74 21.9L5.84001 12L15.74 2.1L17.51 3.87L9.38001 12L17.51 20.13Z"
                fill="#F79D18"
                fillOpacity={"0.69"}
              />
            </svg>
          </button>
          <button
            onClick={() => nextSlide()}
            className="carousel_button carousel_button--right"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.48999 20.13L8.25999 21.9L18.16 12L8.25999 2.1L6.48999 3.87L14.62 12L6.48999 20.13Z"
                fill="#F79D18"
                fillOpacity={"0.69"}
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
