import React, { useState } from "react";
import sendSMSTwilio from "../../services/sms.service";
import { saveUser } from "../../services/user.service";
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
          saveUser(data).then((resp) => {
            console.log(resp);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div id="contact" className="main-contact">
      <div className="main-contact-container">
        <div className="main-contact-container-content">
          <h1 className="font-bold text-xl mb-4">Contact US</h1>
          <br />
        </div>
        <div className="contact-card">
          <div className="images relative">
            <div className="contact-overlay">
              <p>
                We are always ready to help you for your dream event come true.
              </p>
            </div>
            <img src="./images/team1.webp" alt="team" />
          </div>
          <div className="form">
            <p style={{ color: "red" }}>{errorMessage ? errorMessage : ""}</p>
            <div className="form-group">
              <CustomInput
                type={"text"}
                value={name}
                inputClass={"full-name"}
                placeholder={"Name"}
                changeEvent={(e) => setName(e.target.value)}
              ></CustomInput>
              {/* <input className="full-name" type="text" placeholder="Name" /> */}
            </div>
            <div className="form-group">
              <CustomInput
                type={"text"}
                value={email}
                inputClass={"Email"}
                placeholder={"Email"}
                changeEvent={(e) => setEmail(e.target.value)}
              ></CustomInput>

              {/* <input className="email" type="text" placeholder="Email" /> */}
            </div>
            <div className="form-group">
              <CustomInput
                type={"text"}
                value={phone}
                inputClass={"Contact No"}
                placeholder={"Contact No"}
                changeEvent={(e) => setPhone(e.target.value)}
              ></CustomInput>

              {/* <input className="Contact no" type="text" placeholder="Contact no" /> */}
            </div>
            <div className="form-group">
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
