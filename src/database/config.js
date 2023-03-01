const mongoose = require("mongoose");
const config = require("../env");

const dbConnection = async () => {
  try {
    let conn = await mongoose.connect(config.DB_NAME, {
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
      keepAlive: true, 
      keepAliveInitialDelay: 300000
    });

    console.log("Connected to DB");
    return conn;
  } catch (error) {
    console.error(error);
    throw new Error("Error connecting to DB");
  }
};

mongoose.set('strictQuery', false)

module.exports = {
  dbConnection
};