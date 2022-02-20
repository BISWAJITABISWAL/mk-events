const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();

const cors = require("cors");
const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(pino);
app.use(
  cors({
    origin: "*",
  })
);

app.post("/api/messages", (req, res) => {
  console.log(req.body);
  res.header("Content-Type", "application/json");
  client.messages
    .create({
      from: process.env.REACT_APP_TWILIO_PHONE_NUMBER,
      to: "+917304541557",
      body: req.body.message,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);
