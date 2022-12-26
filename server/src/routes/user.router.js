const express = require("express");

const {
  getAccountType,
  getUser,
  changeUserData,
} = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/account-type", getAccountType);
userRouter.get("/", getUser);

userRouter.post("/changeData", changeUserData);

module.exports = userRouter;
