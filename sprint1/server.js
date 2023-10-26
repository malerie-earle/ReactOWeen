require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;
const Scaledrone = require("scaledrone-node-push");
CHANNEL_ID = process.env.CHANNEL_ID;
CHANNEL_SECRET = process.env.SECRET_KEY;
const sd = new Scaledrone({
  channelId: CHANNEL_ID,
  secretKey: CHANNEL_SECRET
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.post("/vote", (req, res) => {
  const { body } = req;
  const room = "live-votes";
  const response = { playerId: body.vote.player_id };
  const message = response.playerId;
  sd.publish(room, message, error => {
    if (error) {
      console.log(error);
    } else {
      res.json({
        player_id: body
      });
    }
  });
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});