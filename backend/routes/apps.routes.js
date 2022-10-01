const { Router } = require("express");

const appRouter = Router();

appRouter.post("/create", (req, res) => {
  res.send("app post page");
});

appRouter.get("/", (req, res) => {
  res.send("app page");
});

module.exports = {
  appRouter,
};
