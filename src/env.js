const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`) });
module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  APP_URL: process.env.REACT_APP_URL,
  DB_NAME: process.env.DB_CNN,
  PORT: process.env.PORT,
  ENVIRONMENT: process.env.ENVIRONMENT,
};
