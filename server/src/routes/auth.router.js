const express = require("express");

const {
  loginUser,
  addNewUser,
  forgotPassword,
  resetPassword,
  checkUserLoggedIn,
  logout,
} = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/login", loginUser);
authRouter.post("/register", addNewUser);
authRouter.post("/forgot", forgotPassword);
authRouter.post("/reset", resetPassword);

authRouter.get("/session", checkUserLoggedIn);
authRouter.get("/logout", logout);

module.exports = authRouter;
