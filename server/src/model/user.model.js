const bcrypt = require("bcrypt");

const { db } = require("../utils/admin");

const usersDB = db.collection("Users");

const checkUserExists = async (user) => {
  return await usersDB
    .doc(user.email)
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

const verifyUser = async (user) => {
  return await usersDB
    .doc(user.email)
    .get()
    .then(async (doc) => {
      if (doc.exists) {
        const isPasswordValid = await bcrypt.compare(
          user.password,
          doc.data().password
        );

        return isPasswordValid && true;
      } else {
        return false;
      }
    });
};

const storeUser = async (user) => {
  let { firstName, lastName, email, phoneNumber, password } = user;

  let saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  await usersDB.doc(email).set({
    firstName,
    lastName,
    email,
    phoneNumber,
    password: hashedPassword,
  });
};

module.exports = { checkUserExists, storeUser, verifyUser };
