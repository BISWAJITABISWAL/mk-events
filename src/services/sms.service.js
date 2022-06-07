import { Buffer } from "buffer";
export const sendSMSTwilio = (message) => {
  const url =
    "https://api.twilio.com/2010-04-01/Accounts/xxxxxxxxxxxxxxx/Messages.json";

  const accountSid = "xxxxxxxxxxxxx";
  const authToken = "xxxxxxxxxxxxxxx";
  const auth =
    "Basic " + new Buffer(accountSid + ":" + authToken).toString("base64");

  const details = {
    To: "+917304541557",
    From: process.env.REACT_APP_TWILIO_PHONE_NUMBER,
    MessagingServiceSid: "xxxxxxxxxxxxxxxxxxx",
    Body: message.message,
  };

  const formBody = [];
  for (var property in details) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  const body = formBody.join("&");

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      Authorization: auth,
    },
    body,
  };

  return new Promise((resolve, reject) => {
    return fetch(url, options)
      .then((response) => {
        return resolve(response);
      })
      .then((responseJson) => {
        return resolve(responseJson);
      })
      .catch((error) => {
        return reject(error);
      });
  });
};
