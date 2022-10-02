const { Router } = require("express");
const bodyPartRoute = Router();
const fs = require("fs");
const { BodyModel } = require("../models/Bodypart.models");
bodyPartRoute.post("/", async (req, res) => {
  const newdata = fs.readFileSync("./data/databody.json", "utf-8");
  await BodyModel.insertMany(newdata);
  //   await newData.save();

  //   const data = BodyModel([...newdata]);
  //   await data.save();
  res.send(newdata);
});

module.exports = {
  bodyPartRoute,
};
