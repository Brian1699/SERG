const express = require("express");
const app = express();

app.use(express.json());

app.use(require("./src/routes/index"));

app.listen(process.env.PORT || 8888, () => {
  console.log("Server running");
});

module.exports = app;