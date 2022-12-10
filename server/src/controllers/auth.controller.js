const { employessDB } = require("../model/employee.model");

const loginUser = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(400).json({ ok: false });
  }
};

module.exports = { loginUser };
