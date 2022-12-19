const express = require("express");

const { getAccountType } = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/account-type", getAccountType);

module.exports = userRouter;
