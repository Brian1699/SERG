const express = require("express");
const helmet = require("helmet");
const fs= require("fs");
const path= require("path");
const morgan= require("morgan");
const env = require("./env");
const { dbConnection } = require("./database/config");
const corsConfig = require("./corsConfig");

const app = express();

//? CORS
app.use(corsConfig(env.NODE_ENV));

//? Enable raw body on request object
const rawBodySaver = (req, res, buf, encoding) => {
  if (buf && buf.length) {
    req.rawBody = buf.toString(encoding || "utf8");
  }
};

const options = {
  verify: rawBodySaver
};

app.use(express.json(options));
app.use(helmet());

app.set("trust proxy", true);

//* Access log
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "../access.log"),
  { flags: "a" }
);
app.use(morgan("combined", { stream: accessLogStream }));


dbConnection();

app.use(require("./routes/index"));

app.listen(process.env.PORT || 8888, () => {
  console.log("Server running");
});

module.exports = app;