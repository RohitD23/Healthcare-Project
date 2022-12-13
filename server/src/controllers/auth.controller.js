const { verifyEmployee } = require("../model/employee.model");
const {
  checkUserExists,
  storeUser,
  verifyUser,
} = require("../model/user.model");

const loginUser = async (req, res, next) => {
  try {
    const data = req.body;
    let status;

    if (data.type === "employee") {
      status = await verifyEmployee(data);
    } else {
      status = await verifyUser(data);
    }

    if (status) {
      return res.status(200).json({ ok: true });
    } else {
      return res
        .status(400)
        .json({ ok: false, msg: "Incorrect Email Id or Password" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ ok: false, msg: "Internal Server Error" });
  }
};

const addNewUser = async (req, res) => {
  try {
    const user = req.body;

    let response = await checkUserExists(user);

    if (!response) {
      await storeUser(user);
      return res.status(201).json({ ok: true });
    } else {
      return res
        .status(400)
        .json({ ok: false, msg: "User with Email Id already exists" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ ok: false, msg: "Internal Server Error" });
  }
};

module.exports = { loginUser, addNewUser };
