const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  gender: { type: String, enum: ["male", "female", "transgender"] },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = {UserModel}
