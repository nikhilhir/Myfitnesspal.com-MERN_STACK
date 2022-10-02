const mongoose = require("mongoose");

const bodySchema = new mongoose.Schema({
  bodyPart: String,
  equipment: String,
  gifUrl: String,
  id: String,
  name: String,
  target: String,
});

const BodyModel = mongoose.model("bodypart", bodySchema);
module.exports = {
  BodyModel,
};
