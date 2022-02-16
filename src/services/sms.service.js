import { Buffer } from "buffer";

const sendSMSTwilio = (message) => {
  const url = `https://AC2453ad9c56e9c6608fcabf1b57a6591e:46d2064342be6f6080e2ae6a1a21a279@api.twilio.com/2010-04-01/Accounts`;
  const accountSid = process.env.TEST_T_A_SID;
  const authToken = process.env.TEST_T_A_TOKEN;
  const auth =
    "Basic " + new Buffer(accountSid + ":" + authToken).toString("base64");
  const details = {
    To: "whatsapp:+917304541557",
    From: "whatsapp:XE0000000000000000000000",
    Body: `You have recieved a message from ${message.name} for ${message.message}. Kindly contact on ${message.phone} or ${message.email}.`,
  };
  const formBody = [];
  for (var property in details) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  const body = formBody.join("&");
  return new Promise((resolve, reject) => {
    return fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        Authorization: auth,
      },
      body,
    })
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
