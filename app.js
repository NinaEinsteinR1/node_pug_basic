const express = require("express");
const path = require("path");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.listen(3000);
