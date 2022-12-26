const bcrypt = require("bcrypt");

const { db } = require("../utils/admin");

const employeesDB = db.collection("Employees");

const checkEmployeeExists = async (employee) => {
  return await employeesDB
    .doc(employee.username)
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
    .doc(employee.username)
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
  await employeesDB.doc(employee.username).update({
    resetPasswordToken: token,
    resetPasswordExpires: Date.now() + 3600000,
  });

  return await (await employeesDB.doc(employee.username).get()).get("email");
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

const getEmployeeType = async (req) => {
  return await employeesDB
    .doc(req.session.user.username)
    .get()
    .then(async (doc) => {
      return doc.get("accountType");
    });
};

const getDoctorsData = async () => {
  return await employeesDB
    .where("accountType", "==", "doctor")
    .get()
    .then((docs) => {
      let data = [];
      docs.forEach((doc) => {
        data.push({
          name: doc.data().name,
          field: doc.data().field,
          imgSrc: doc.data().img,
          rating: Math.round(doc.data().totalStars / doc.data().totalReviews),
        });
      });

      return data;
    });
};

const getDoctor = async (name) => {
  return await employeesDB
    .doc(name)
    .get()
    .then((doc) => {
      return {
        name: doc.data().name,
        field: doc.data().field,
        imgSrc: doc.data().img,
        rating: Math.round(doc.data().totalStars / doc.data().totalReviews),
      };
    });
};

module.exports = {
  checkEmployeeExists,
  verifyEmployee,
  addEmpPasswordResetToken,
  resetEmpPassword,
  getEmployeeType,
  getDoctorsData,
  getDoctor,
};
