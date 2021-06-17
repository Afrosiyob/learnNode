const express = require("express");
const logger = require("morgan");
const app = express();

app.use(logger("tiny"));

app.get("/", (req, res) => {
  res.send("salom");
});

app.get("/articles/:year/:month", (req, res) => {
  res.send(req.params);
  res.send(req.query);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("port is running...");
});
