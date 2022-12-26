const { getEmployeeType } = require("../model/employee.model");
const { getUserData, modifyUserData } = require("../model/user.model");

const getAccountType = async (req, res) => {
  try {
    if (req.session.user.type === "patient")
      return res.status(200).json({ type: "patient" });
    else {
      const type = await getEmployeeType(req);
      return res.status(200).json({ type: type });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await getUserData(req);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const changeUserData = async (req, res) => {
  try {
    const user = req.body;
    await modifyUserData(req, user);

    return res.status(200).json({ ok: true, msg: "Data changed successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ ok: false, msg: "Internal Server Error" });
  }
};

module.exports = { getAccountType, getUser, changeUserData };
