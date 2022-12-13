const { db } = require("../utils/admin");

const employeesDB = db.collection("Employees");

const checkEmployeeExists = async (employee) => {
  return await employeesDB
    .doc(employee.email)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return true;
      } else {
        // doc.data() will be undefined in this case
        return false;
      }
    });
};

const verifyEmployee = async (employee) => {
  return await employeesDB
    .doc(employee.email)
    .get()
    .then((doc) => {
      if (doc.exists && doc.data().password == employee.password) {
        return true;
      } else {
        return false;
      }
    });
};

module.exports = { checkEmployeeExists, verifyEmployee };
