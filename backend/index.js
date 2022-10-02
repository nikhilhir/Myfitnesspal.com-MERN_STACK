const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const { authRouter } = require("./routes/auth.routes");
const { authenication } = require("./middlewares/authentication");
const { connection } = require("./configs/db");
const { appRouter } = require("./routes/apps.routes");

app.use(cors());
app.use(express.json());
app.get("/", async (req, res) => {
  res.send("hello");
});
app.use("/auth", authRouter);
app.use("/apps", appRouter);
app.use(authenication);
app.listen(PORT, async () => {
  await connection;
  console.log("Connected to database");
  console.log("listening to port http://localhost:8080");
});
