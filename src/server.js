const express = require("express");
const { dbConnection } = require("./database/config");

const app = express();
app.use(express.json());

dbConnection();

app.use(require("./routes/index"));

app.listen(process.env.PORT || 8888, () => {
  console.log("Server running");
});

module.exports = app;