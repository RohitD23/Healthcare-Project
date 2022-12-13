const express = require("express");

const { loginUser, addNewUser } = require("../controllers/auth.controller");

const authRouter = express.Router();

authRouter.post("/login", loginUser);
authRouter.post("/register", addNewUser);

module.exports = authRouter;
