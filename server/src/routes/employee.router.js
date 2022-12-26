const express = require("express");

const {
  getDoctors,
  getDoctorInfo,
} = require("../controllers/employee.controller");

const employeeRouter = express.Router();

employeeRouter.get("/", getDoctors);
employeeRouter.get("/:name", getDoctorInfo);

module.exports = employeeRouter;
