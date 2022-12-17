const express = require("express");

const {
  loginUser,
  addNewUser,
  forgotPassword,
  resetPassword,
  checkUserLoggedIn,
} = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/login", loginUser);
authRouter.post("/register", addNewUser);
authRouter.post("/forgot", forgotPassword);
authRouter.post("/reset", resetPassword);

authRouter.get("/session", checkUserLoggedIn);

module.exports = authRouter;
