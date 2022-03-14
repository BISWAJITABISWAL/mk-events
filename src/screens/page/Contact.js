import React, { useState } from "react";
import Button from "../../component/view/Button";
import CustomInput from "../../component/view/input";
import { sendSMSTwilio } from "../../services/sms.service";
import { saveUserDetails } from "../../services/user.service";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const validateEmail = (value) => {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let regex = new RegExp(re);
    if (value.match(regex)) {
      return true;
    } else {
      return false;
    }
  };

  const validatePhone = (value) => {
    const re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let regex = new RegExp(re);
    if (value.match(regex)) {
      return true;
    } else {
      return false;
    }
  };
  const submitForm = (e) => {
    setLoader(true);
    setErrorMessage("");
    setSuccessMessage("");

    const emailValid = validateEmail(email);
    const phoneValid = validatePhone(phone);

    if (!name || !email || !phone || !message) {
      console.log("All Feilds are required.");
      setLoader(false);

      setErrorMessage("All Feilds are required");
    } else if (!emailValid) {
      setLoader(false);

      setErrorMessage("Email is not valid");
    } else if (!phoneValid) {
      setLoader(false);

      setErrorMessage("Phone is not valid");
    } else {
      const data = {
        to: phone.includes("+91") ? phone : "+91" + phone,
        message: `You have recieved a message for ${message} from ${name}.Kindly Contact Using ${phone} Or ${email}.`,
        email,
        name,
      };

      sendSMSTwilio(data)
        .then((res) => res.json())
        .then((resp) => {
          setLoader(false);

          if (resp.status === "accepted") {
            setLoader(false);

            setSuccessMessage(
              "Your response have been successfully recorded. Our team will get back to you shortly."
            );

            setTimeout(() => {
              setSuccessMessage("");

              setName("");
              setEmail("");
              setPhone("");
              setMessage("");
            }, 3500);
          } else {
            setLoader(false);
            setErrorMessage(
              "Error while making you request. We aplogize for the error occured."
            );

            setTimeout(() => {
              setSuccessMessage("");
              setName("");
              setEmail("");
              setPhone("");
              setMessage("");
            }, 3500);
          }
        })
        .catch((err) => {
          setLoader(false);
          setLoader(false);
          setErrorMessage(
            "Error while making you request. We aplogize for the error occured."
          );

          setTimeout(() => {
            setSuccessMessage("");

            Array.from(document.getElementsByTagName("input")).forEach(
              (item) => (item.value = "")
            );

            Array.from(document.getElementsByTagName("textarea")).forEach(
              (item) => (item.value = "")
            );
          }, 3500);
        });
      // fetch("api/messages", {
      //   method: "POST",

      //   headers: {
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //   },
      //   body: JSON.stringify(data),
      // })
      //   .then((res) => res.json())
      //   .then((resp) => {
      //     if (resp.success) {
      //       setLoader(false);
      //       setSuccessMessage(
      //         "Your response have been successfully recorded. Our team will get back to you shortly."
      //       );

      //       setTimeout(() => {
      //         setSuccessMessage("");

      //         Array.from(document.getElementsByTagName("input")).forEach(
      //           (item) => (item.value = "")
      //         );

      //         Array.from(document.getElementsByTagName("textarea")).forEach(
      //           (item) => (item.value = "")
      //         );
      //       }, 3500);
      //     } else {
      //       setLoader(false);
      //       setErrorMessage(
      //         "Error while making you request. We aplogize from the error occured."
      //       );
      //       console.log("Message Error");
      //     }
      //   });
    }
  };
  return (
    <>
      <div className="relative">
        <div className="bg-bubble bg-blue"></div>

        <div id="contact" class="main-contact">
          <div class="main-contact-container">
            <div class="main-contact-container-content">
              <h4>Contact US</h4>
            </div>
            <div class="contact-card ">
              <div class="images">
                <img src="./images/image2.jpg" alt="" />
              </div>
              <div class="form">
                <div
                  className="mb-4
                "
                >
                  <h4
                    style={{
                      fontWeight: "400",
                      margin: 0,
                      marginBottom: "5px",
                    }}
                    className="text-md text-dark"
                  >
                    We feel happy to help you
                  </h4>
                  <h4
                    style={{
                      fontWeight: "400",
                      margin: 0,
                      marginBottom: "5px",
                    }}
                    className="text-base text-dark-light"
                  >
                    Have an plan in your mind! Lets make it come true.
                  </h4>
                </div>

                <div class="form-group">
                  <CustomInput
                    type={"text"}
                    value={name}
                    inputClass={"full-name"}
                    placeholder={"Name"}
                    changeEvent={(e) => setName(e.target.value)}
                  ></CustomInput>
                  {/* <input class="full-name" type="text" placeholder="Name" /> */}
                </div>
                <div class="form-group">
                  <CustomInput
                    type={"text"}
                    value={email}
                    inputClass={"Email"}
                    placeholder={"Email"}
                    changeEvent={(e) => setEmail(e.target.value)}
                  ></CustomInput>

                  {/* <input class="email" type="text" placeholder="Email" /> */}
                </div>
                <div class="form-group">
                  <CustomInput
                    type={"text"}
                    value={phone}
                    inputClass={"Contact No"}
                    placeholder={"Contact No"}
                    changeEvent={(e) => setPhone(e.target.value)}
                  ></CustomInput>

                  {/* <input class="Contact no" type="text" placeholder="Contact no" /> */}
                </div>
                <div class="form-group">
                  <textarea
                    className="full-name"
                    name="messages"
                    id=""
                    rows="7"
                    placeholder="Message"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                {errorMessage ? (
                  <p style={{ color: "red" }}>
                    {errorMessage ? errorMessage : ""}
                  </p>
                ) : successMessage ? (
                  <p style={{ color: "green" }}>
                    {successMessage ? successMessage : ""}
                  </p>
                ) : (
                  ""
                )}

                {loader ? (
                  <Button
                    text={<img src={"images/loader.gif"} />}
                    className={"contact-button"}
                  ></Button>
                ) : (
                  <Button
                    onpress={(e) => submitForm(e)}
                    text={"Submit"}
                    className={"contact-button"}
                  ></Button>
                )}

                {/* <button onclick="submit">Send messages</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
