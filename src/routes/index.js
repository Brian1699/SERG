const express = require("express");
const app = express();

//* desktop
app.use("/desktop", require("./desktop/desktop"));

//* arduino
app.use("/arduino", require("./arduino/arduino"));



module.exports = app;