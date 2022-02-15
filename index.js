const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hi SHiwang");
});

app.listen(8080, () => {
  console.log("Server Running");
});
