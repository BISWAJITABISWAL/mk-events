import React, { useEffect, useState } from "react";
import { getAllMedia } from "../../services/event.service";

function Gallary() {
  const [mediaList, setMediaList] = useState();
  const [shownMedia, setShowMedia] = useState();
  const [count, setCount] = useState(10);

  const [loading, setLoading] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  const [imageUrl, setImageUrl] = useState("");
  const [mediaType, setMediaType] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await getAllMedia();
      setMediaList(data);
      setShowMedia(data.slice(0, count));
      setLoading(false);
    };

    fetchData();
  }, [count]);
  function showImageModal(item) {
    setImageLoading(true);
    let imageModal = document.getElementById("imageModal");

    imageModal.classList.toggle("show-modal");
    if (item.filetype.includes("image")) {
      // let imageElement = document.createElement("img");
      // imageElement.src = item.media.url;
      // imageElement.style.height = "500px";
      // imageElement.style.width = "100%";
      // imageElement.style.objectFit = "cover";
      // imageModal.children[0].appendChild(imageElement);
      setMediaType("IMAGE");
      setImageUrl(item.media.url);
      setImageLoading(false);
    } else {
      // let imageModal = document.getElementById("imageModal");
      // let videoElement = document.createElement("video");
      // videoElement.src = item.media.url;
      // videoElement.style.height = "500px";
      // videoElement.style.width = "100%";
      // videoElement.style.objectFit = "cover";
      // videoElement.controls = true;
      // imageModal.children[0].appendChild(videoElement);
      setMediaType("VIDEO");
      setImageUrl(item.media.url);
      setImageLoading(false);
    }
  }

  function dismissImageModal() {
    let imageModal = document.getElementById("imageModal");
    if (imageModal != null) {
      imageModal.classList.toggle("show-modal");
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
      <div id="gallery" className="main-Gallery">
        <div className="main-Gallery-container">
          <div className="main-Gallery-container-content">
            <h1 className="font-bold text-xl mb-4">Gallery</h1>
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
                    className="items"
                  >
                    {item.filetype.includes("image") ? (
                      <img src={item.media.url} alt="gallery" />
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
                  strokeWidth="2"
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
                  strokeWidth="2"
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
      <div id="imageModal" className="modal">
        <div className="modal-content">
          <span
            onClick={() => dismissImageModal()}
            className="modal-close-button"
          >
            &times;
          </span>

          <br />
          {imageLoading ? (
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
                strokeWidth="2"
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
                strokeWidth="2"
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
          ) : mediaType == "IMAGE" ? (
            <img
              src={imageUrl}
              style={{ height: "500px", width: "100%", objectFit: "cover" }}
              alt="imageGallery"
            />
          ) : (
            <video
              src={imageUrl}
              style={{ width: "100%", objectFit: "cover" }}
              alt="imageGallery"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Gallary;
