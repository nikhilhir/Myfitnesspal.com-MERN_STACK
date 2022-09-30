const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  dob:String,
  country:String,
  zipcode:String,
  height:String,
  estweight:String,
  goalweight:String,
  gender: { type: String, enum: ["male", "female"] },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = {UserModel}
