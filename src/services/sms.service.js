import { Buffer } from "buffer";

const sendSMSTwilio = (data) => {
  const url = `https://api.twilio.com/2010-04-01/Accounts`;
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  //   var headers = new Headers();

  // headers.append('Authorization', 'Basic ' + btoa('AC2453ad9c56e9c6608fcabf1b57a6591e' + ':' + '46d2064342be6f6080e2ae6a1a21a279'));
  //   const auth =
  //     "Basic " + new Buffer(accountSid + ":" + authToken).toString("base64");
  const details = {
    from: process.env.REACT_APP_TWILIO_PHONE_NUMBER,
    to: "+917304541557",
    body: data.message,
  };
  const formBody = [];
  for (var property in details) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  const body = formBody.join("&");
  var options = {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      Authorization:
        "Basic " +
        btoa(
          "AC2453ad9c56e9c6608fcabf1b57a6591e" +
            ":" +
            "46d2064342be6f6080e2ae6a1a21a279"
        ),
    }),
    body: body,
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

export default sendSMSTwilio;
