require("dotenv").config();

const mongoose = require("mongoose");
const DATABASE_URL = process.env.DATABASE_URL;

const connectDb = () => {
  return mongoose.connect(
    DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        console.log("Connection to DB failed");
      } else {
        console.log("Connection to DB success");
      }
    }
  );
};

const db = mongoose.connection;
db.on("error", () => console.error("MongoDB connection error"));

module.exports = connectDb;
