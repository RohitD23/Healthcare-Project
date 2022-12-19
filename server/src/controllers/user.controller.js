const { getEmployeeType } = require("../model/employee.model");

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

module.exports = { getAccountType };
