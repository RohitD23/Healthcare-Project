const express = require("express");

const {
  loginUser,
  addNewUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/login", loginUser);
authRouter.post("/register", addNewUser);
authRouter.post("/forgot", forgotPassword);
authRouter.post("/reset", resetPassword);

module.exports = authRouter;
