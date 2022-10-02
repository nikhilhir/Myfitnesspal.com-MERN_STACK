const { Router } = require("express");
const { AppModel } = require("../models/App.model");
const appRouter = Router();

appRouter.post("/create", async (req, res) => {
  const payload = req.body;
  const newData = new AppModel(payload);
  await newData.save();
  res.send("Data added successfully");
});

appRouter.get("/", async (req, res) => {
  const data = await AppModel.find({});
  res.send(data);
});

module.exports = {
  appRouter,
};
