import React, { useState } from "react";
import sendSMSTwilio from "../../services/sms.service";
import Button from "./Button";
import CustomInput from "./input";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    setErrorMessage("");

    const emailValid = validateEmail(email);
    const phoneValid = validatePhone(phone);

    if (!name || !email || !phone || !message) {
      console.log("All Feilds are required.");
      setErrorMessage("All Feilds are required");
    } else if (!emailValid) {
      setErrorMessage("Email is not valid");
    } else if (!phoneValid) {
      setErrorMessage("Phone is not valid");
    } else {
      const data = {
        phone,
        message,
        email,
        name,
      };

      sendSMSTwilio(data)
        .then((resp) => {
          console.log(resp);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div id="contact" class="main-contact">
      <div class="main-contact-container">
        <div class="main-contact-container-content">
          <h4>Contact US</h4>
        </div>
        <div class="contact-card">
          <div class="images">
            <img src="./images/image2.png" alt="" />
          </div>
          <div class="form">
            <p style={{ color: "red" }}>{errorMessage ? errorMessage : ""}</p>
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
                rows="5"
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <Button
              onpress={(e) => submitForm(e)}
              text={"Submit"}
              className={"contact-button"}
            ></Button>

            {/* <button onclick="submit">Send messages</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
