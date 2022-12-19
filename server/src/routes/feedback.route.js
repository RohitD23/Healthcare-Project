const express = require("express");

const {
  addFeedback,
  getFeedback,
} = require("../controllers/feedback.controller");

const feedbackRouter = express.Router();

feedbackRouter.post("/", addFeedback);

feedbackRouter.get("/", getFeedback);

module.exports = feedbackRouter;
