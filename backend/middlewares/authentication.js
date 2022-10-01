const jwt = require("jsonwebtoken");
require("dotenv").config();
const authenication = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Not Authorized");
  } else {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET, function (err, decoded) {
      if (!err) {
        req.body.userId = decoded.userId;
        next();
      } else {
        res.status(401).send("Some error");
      }
    });
  }
};

module.exports = { authenication };
