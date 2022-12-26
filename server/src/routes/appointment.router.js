const express = require("express");

const {
  submitAppointment,
  getDocAppoints,
} = require("../controllers/appointment.controller");

const appointmentRouter = express.Router();

appointmentRouter.post("/submit", submitAppointment);

appointmentRouter.get("/:doctorName", getDocAppoints);

module.exports = appointmentRouter;
