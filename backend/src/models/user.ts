const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  // type
});

const User = mongoose.model("User", userSchema);

module.exports = User;
