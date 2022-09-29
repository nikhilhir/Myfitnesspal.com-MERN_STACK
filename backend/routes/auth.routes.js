const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/User.model");
const authRouter = Router();
require("dotenv").config();

authRouter.post("/signup", (req, res) => {
 
  const { name, username, email, password, gender, dob,country,zipcode,height,estweight,goalweight, } = req.body;
  try {
    bcrypt.hash(password, 6, async function (err, hash) {
      if (!err) {
        const user = new UserModel({
          name,
          username,
          email,
          password: hash,
          gender,
          dob,
          country,
          zipcode,
          height,
          estweight,
          goalweight,
        });
        await user.save();
        res.status(201).send({ msg: "signup successfull" });
      } else {
        res.status(222).send({msg:"Some error occured"});
      }
    });
  } catch (error) {
    console.log(error);
  }
});

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      let hash = user.password;
      bcrypt.compare(password, hash, function (err, result) {
        if (result === true) {
          let token = jwt.sign({ userId: user._id }, process.env.SECRET, {
            expiresIn: "1h",
          });
          res.status(202).send({ msg: "logged in", token });
        } else {
          res.status(222).send({msg:"Not a valid user"});
        }
      });
    } else {
      res.status(222).send({msg:"Invalid User"});
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = { authRouter };
