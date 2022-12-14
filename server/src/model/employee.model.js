const bcrypt = require("bcrypt");

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
    .then(async (doc) => {
      if (doc.exists) {
        const isPasswordValid = await bcrypt.compare(
          employee.password,
          doc.data().password
        );

        return isPasswordValid && true;
      } else {
        return false;
      }
    });
};

const addEmpPasswordResetToken = async (employee, token) => {
  await employeesDB.doc(employee.email).update({
    resetPasswordToken: token,
    resetPasswordExpires: Date.now() + 3600000,
  });
};

const resetEmpPassword = async (token, newPassword) => {
  return await employeesDB
    .where("resetPasswordToken", "==", token)
    .get()
    .then(async (docs) => {
      if (!docs.empty) {
        let id;
        docs.forEach((doc) => {
          id = doc.id;
        });

        if (
          (await employeesDB.doc(id).get()).data().resetPasswordExpires <
          Date.now()
        ) {
          return false;
        }

        let saltRounds = 10;
        const hashedPassword = await bcrypt.hash(newPassword, saltRounds);
        await employeesDB.doc(id).update({
          password: hashedPassword,
        });

        return true;
      } else return false;
    });
};

module.exports = {
  checkEmployeeExists,
  verifyEmployee,
  addEmpPasswordResetToken,
  resetEmpPassword,
};
