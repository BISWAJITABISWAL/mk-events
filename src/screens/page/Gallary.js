import React, { useEffect, useState } from "react";
import { getAllMedia } from "../../services/event.service";

function Gallary() {
  const [mediaList, setMediaList] = useState();
  const [shownMedia, setShowMedia] = useState();
  const [count, setCount] = useState(10);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await getAllMedia();
      setMediaList(data);
      setShowMedia(data.slice(0, count));
      setLoading(false);
    };

    fetchData();
  }, []);
  function showImageModal(item) {
    setLoading(true);
    if (item.filetype.includes("image")) {
      let imageModal = document.getElementById("imageModal");
      let imageElement = document.createElement("img");
      imageElement.src = item.media.url;
      imageElement.style.height = "500px";
      imageElement.style.width = "100%";
      imageElement.style.objectFit = "cover";
      imageModal.children[0].appendChild(imageElement);
      imageModal.classList.toggle("show-modal");
      setLoading(false);
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
      setLoading(false);
    }
  }

  function dismissImageModal() {
    let imageModal = document.getElementById("imageModal");
    if (imageModal != null) {
      imageModal.classList.toggle("show-modal");
      imageModal.children[0].removeChild(imageModal.children[0].children[1]);
    }
  }

  function loadMore() {
    setLoading(true);

    if (count >= mediaList.length) {
      alert("No more data to load.");
    } else {
      setCount((prev) => (prev = prev + 10));
      setShowMedia(mediaList.slice(0, count));
    }
    setLoading(false);
  }
  return (
    <>
      <div id="gallery" class="main-Gallery">
        <div class="main-Gallery-container">
          <div class="main-Gallery-container-content">
            <h4>Gallery</h4>
            <p>
              We at mahakali events (aka mk-events) are pleased to let everyone
              know that we have been in a event journey from last 10 year. Here
              are some of our happiest client sustaining to all events including
              (Wedding Events , Birthday Parties , Ceremony, and many more.)
            </p>
          </div>
          <br />
          {!loading && shownMedia ? (
            <div className="mosary">
              {shownMedia.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => showImageModal(item)}
                    class="items"
                  >
                    {item.filetype.includes("image") ? (
                      <img src={item.media.url} alt="" />
                    ) : (
                      <video controls src={item.media.url} />
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="">
              <svg
                id="imageLoader"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  margin: "auto",

                  display: "block",
                }}
                width="200px"
                height="200px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="0"
                  fill="none"
                  stroke="#e19d1f"
                  stroke-width="2"
                >
                  <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0;40"
                    keyTimes="0;1"
                    keySplines="0 0.2 0.8 1"
                    calcMode="spline"
                    begin="0s"
                  ></animate>
                  <animate
                    attributeName="opacity"
                    repeatCount="indefinite"
                    dur="1s"
                    values="1;0"
                    keyTimes="0;1"
                    keySplines="0.2 0 0.8 1"
                    calcMode="spline"
                    begin="0s"
                  ></animate>
                </circle>
                <circle
                  cx="50"
                  cy="50"
                  r="0"
                  fill="none"
                  stroke="#f0cd43"
                  stroke-width="2"
                >
                  <animate
                    attributeName="r"
                    repeatCount="indefinite"
                    dur="1s"
                    values="0;40"
                    keyTimes="0;1"
                    keySplines="0 0.2 0.8 1"
                    calcMode="spline"
                    begin="-0.5s"
                  ></animate>
                  <animate
                    attributeName="opacity"
                    repeatCount="indefinite"
                    dur="1s"
                    values="1;0"
                    keyTimes="0;1"
                    keySplines="0.2 0 0.8 1"
                    calcMode="spline"
                    begin="-0.5s"
                  ></animate>
                </circle>
              </svg>
            </div>
          )}

          {!loading && mediaList ? (
            <div className="" style={{ textAlign: "center" }}>
              <button className="load-more" onClick={() => loadMore()}>
                Load More
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div id="imageModal" class="modal">
        <div class="modal-content">
          <span onClick={() => dismissImageModal()} class="modal-close-button">
            &times;
          </span>
          {loading ? (
            <svg
              id="imageLoader"
              xmlns="http://www.w3.org/2000/svg"
              style={{ margin: "auto", background: "#fff", display: "block" }}
              width="200px"
              height="200px"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid"
            >
              <circle
                cx="50"
                cy="50"
                r="0"
                fill="none"
                stroke="#e19d1f"
                stroke-width="2"
              >
                <animate
                  attributeName="r"
                  repeatCount="indefinite"
                  dur="1s"
                  values="0;40"
                  keyTimes="0;1"
                  keySplines="0 0.2 0.8 1"
                  calcMode="spline"
                  begin="0s"
                ></animate>
                <animate
                  attributeName="opacity"
                  repeatCount="indefinite"
                  dur="1s"
                  values="1;0"
                  keyTimes="0;1"
                  keySplines="0.2 0 0.8 1"
                  calcMode="spline"
                  begin="0s"
                ></animate>
              </circle>
              <circle
                cx="50"
                cy="50"
                r="0"
                fill="none"
                stroke="#f0cd43"
                stroke-width="2"
              >
                <animate
                  attributeName="r"
                  repeatCount="indefinite"
                  dur="1s"
                  values="0;40"
                  keyTimes="0;1"
                  keySplines="0 0.2 0.8 1"
                  calcMode="spline"
                  begin="-0.5s"
                ></animate>
                <animate
                  attributeName="opacity"
                  repeatCount="indefinite"
                  dur="1s"
                  values="1;0"
                  keyTimes="0;1"
                  keySplines="0.2 0 0.8 1"
                  calcMode="spline"
                  begin="-0.5s"
                ></animate>
              </circle>
            </svg>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default Gallary;
