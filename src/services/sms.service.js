import { Buffer } from "buffer";
export const sendSMSTwilio = (message) => {
  const url =
    "https://api.twilio.com/2010-04-01/Accounts/AC2453ad9c56e9c6608fcabf1b57a6591e/Messages.json";

  const accountSid = "AC2453ad9c56e9c6608fcabf1b57a6591e";
  const authToken = "46d2064342be6f6080e2ae6a1a21a279";
  const auth =
    "Basic " + new Buffer(accountSid + ":" + authToken).toString("base64");

  const details = {
    To: message.to,
    From: process.env.REACT_APP_TWILIO_PHONE_NUMBER,
    MessagingServiceSid: "MG4eca9db05dc6468de9f6d72a67e20fb4",
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
