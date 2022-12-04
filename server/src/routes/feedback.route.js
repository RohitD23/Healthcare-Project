const express = require("express");

const { addFeedback } = require("../controllers/feedback.controller");

const feedbackRouter = express.Router();

feedbackRouter.post("/", addFeedback);

module.exports = feedbackRouter;
