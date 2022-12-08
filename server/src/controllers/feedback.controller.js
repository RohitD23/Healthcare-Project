const { feedbackDB } = require("../model/feedback.model");

const addFeedback = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);

    await feedbackDB.add(data);

    return res.status(200).json({ mssg: "Feedback Registered" });
  } catch (error) {
    console.log(error.message);
    return res.status(400).send(error.message);
  }
};

module.exports = { addFeedback };
