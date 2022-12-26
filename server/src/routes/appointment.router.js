const express = require("express");

const {
  submitAppointment,
  getDocAppoints,
  getPatientAppoints,
  cancelAppointment,
} = require("../controllers/appointment.controller");

const appointmentRouter = express.Router();

appointmentRouter.post("/submit", submitAppointment);
appointmentRouter.post("/cancel", cancelAppointment);

appointmentRouter.get("/:doctorName", getDocAppoints);
appointmentRouter.get("/", getPatientAppoints);

module.exports = appointmentRouter;
