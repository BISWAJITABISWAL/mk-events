import React, { useEffect, useState } from "react";
import { getAllMedia } from "../../services/event.service";

function Gallary() {
  const [mediaList, setMediaList] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllMedia();
      console.log(data);
      setMediaList(data);
    };

    fetchData();
  }, []);
  function showImageModal(item) {
    if (item.filetype.includes("image")) {
      let imageModal = document.getElementById("imageModal");
      let imageElement = document.createElement("img");
      imageElement.src = item.media.url;
      imageElement.style.height = "500px";
      imageElement.style.width = "100%";
      imageElement.style.objectFit = "cover";
      imageModal.children[0].appendChild(imageElement);
      imageModal.classList.toggle("show-modal");
    } else {
      let imageModal = document.getElementById("imageModal");
      let videoElement = document.createElement("video");
      videoElement.src = item.media.url;
      videoElement.style.height = "500px";
      videoElement.style.width = "100%";
      videoElement.style.objectFit = "cover";
      videoElement.controls = true;
      imageModal.children[0].appendChild(videoElement);
      imageModal.classList.toggle("show-modal");
    }
  }

  function dismissImageModal() {
    let imageModal = document.getElementById("imageModal");
    if (imageModal != null) {
      imageModal.classList.toggle("show-modal");
      imageModal.children[0].removeChild(imageModal.children[0].children[1]);
    }
  }

  return (
    <>
      <div className="relative">
        <div className="bg-bubble bg-green"></div>

        <div id="gallery" class="main-Gallery">
          <div class="main-Gallery-container">
            <div class="main-Gallery-container-content">
              <h4 className="font-bold text-xl mb-4">
                Some Of Our Happy{" "}
                <span
                  className="font-bold text-primary border-primary"
                  style={{ borderBottom: "5px solid" }}
                >
                  {" "}
                  Events{" "}
                </span>
              </h4>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                doloremque id dolorem earum culpa perspiciatis soluta dolor
                vitae nobis a? Maxime, iste. Deleniti, consequatur vitae nisi
                dolorem soluta magnam eum veniam corrupti nemo reprehenderit
                quae delectus sequi? Repellat mollitia, culpa provident
                blanditiis sunt, accusantium soluta deleniti nemo tempore
                assumenda vitae.
              </p>
            </div>

            <div class="mosary" style={{ marginTop: "4rem" }}>
              {mediaList &&
                mediaList.map((item, index) => {
                  return (
                    <>
                      <div
                        key={index}
                        onClick={() => showImageModal(item)}
                        class="items"
                      >
                        {item.filetype.includes("image") ? (
                          <img src={item.media.url} alt="" />
                        ) : (
                          <div
                            className="relative"
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <video
                              style={{ height: "100%", objectFit: "cover" }}
                              src={item.media.url}
                            ></video>
                            <div
                              style={{
                                position: "absolute",
                                height: "40px",
                                width: "40px",
                                inset: "0px",
                                left: 0,
                                right: 0,
                                margin: "auto",
                              }}
                              className="play-button"
                            >
                              <svg
                                width="40"
                                height="40"
                                viewBox="0 0 200 200"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 187.5C76.7936 187.5 54.5376 178.281 38.1282 161.872C21.7187 145.462 12.5 123.206 12.5 100C12.5 76.7936 21.7187 54.5376 38.1282 38.1282C54.5376 21.7187 76.7936 12.5 100 12.5C123.206 12.5 145.462 21.7187 161.872 38.1282C178.281 54.5376 187.5 76.7936 187.5 100C187.5 123.206 178.281 145.462 161.872 161.872C145.462 178.281 123.206 187.5 100 187.5ZM100 200C126.522 200 151.957 189.464 170.711 170.711C189.464 151.957 200 126.522 200 100C200 73.4784 189.464 48.043 170.711 29.2893C151.957 10.5357 126.522 0 100 0C73.4784 0 48.043 10.5357 29.2893 29.2893C10.5357 48.043 0 73.4784 0 100C0 126.522 10.5357 151.957 29.2893 170.711C48.043 189.464 73.4784 200 100 200V200Z"
                                  fill="white"
                                />
                                <path
                                  d="M78.3875 63.1875C79.4098 62.6611 80.5575 62.4269 81.7043 62.5107C82.8511 62.5945 83.9526 62.9931 84.8875 63.6625L128.638 94.9125C129.448 95.4907 130.108 96.2539 130.564 97.1389C131.019 98.0238 131.257 99.0047 131.257 100C131.257 100.995 131.019 101.976 130.564 102.861C130.108 103.746 129.448 104.509 128.638 105.088L84.8875 136.338C83.9529 137.006 82.852 137.405 81.7058 137.488C80.5595 137.572 79.4124 137.338 78.3905 136.813C77.3685 136.287 76.5114 135.489 75.9132 134.508C75.3151 133.527 74.9991 132.399 75 131.25V68.75C74.9988 67.601 75.3143 66.474 75.912 65.4927C76.5096 64.5113 77.3661 63.7137 78.3875 63.1875V63.1875Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div id="imageModal" class="modal">
        <div class="modal-content">
          <span onClick={() => dismissImageModal()} class="modal-close-button">
            &times;
          </span>
        </div>
      </div>
    </>
  );
}

export default Gallary;
