const { db } = require("../utils/admin");

const employeesDB = db.collection("Employees");
module.exports = { employeesDB };
