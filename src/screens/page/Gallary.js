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
    if(item.filetype.includes("image")) {
        let imageModal = document.getElementById("imageModal");
        let imageElement = document.createElement("img");
        imageElement.src = item.media.url;
        imageElement.style.height = "500px";
        imageElement.style.width = "100%";
        imageElement.style.objectFit = "cover";
        imageModal.children[0].appendChild(imageElement);
        imageModal.classList.toggle("show-modal");
    }else {
        let imageModal = document.getElementById("imageModal");
        let videoElement = document.createElement("video");
        videoElement.src = item.media.url;
        videoElement.style.height = "500px";
        videoElement.style.width = "100%";
        videoElement.style.objectFit = "cover";
        videoElement.controls = true
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
     
      <div id="gallery" class="main-Gallery">
        <div class="main-Gallery-container">
          <div class="main-Gallery-container-content">
            <h3>Gallery</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
              doloremque id dolorem earum culpa perspiciatis soluta dolor vitae
              nobis a? Maxime, iste. Deleniti, consequatur vitae nisi dolorem
              soluta magnam eum veniam corrupti nemo reprehenderit quae delectus
              sequi? Repellat mollitia, culpa provident blanditiis sunt,
              accusantium soluta deleniti nemo tempore assumenda vitae.
            </p>
          </div>

          <div class="mosary">
            {mediaList &&
              mediaList.map((item, index) => {
                return (
                  <>
                    <div key={item.id}
                      onClick={() => showImageModal(item)}
                      class="items"
                    >
                        
                     
                       
                        {item.filetype.includes("image") ? <img src={item.media.url} alt="" />  :     <video controls src={item.media.url}/> }
                    </div>
                  </>
                );
              })}
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
