const { getDoctorsData, getDoctor } = require("../model/employee.model");

const getDoctors = async (req, res) => {
  try {
    const data = await getDoctorsData();
    return res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getDoctorInfo = async (req, res) => {
  try {
    const name = req.params.name;
    const data = await getDoctor(name);
    return res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = { getDoctors, getDoctorInfo };
