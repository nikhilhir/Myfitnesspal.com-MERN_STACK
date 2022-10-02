const mongoose = require("mongoose");

const appSchema = mongoose.Schema(
  {
    id: { type: Number, require: true },
    name: { type: String, require: true },
    img: { type: String, require: true },
    type: { type: String, require: true },
    link: { type: String, require: true },
  },
  { timestamps: true }
);

const AppModel = mongoose.model("app", appSchema);
module.exports = {
  AppModel,
};
