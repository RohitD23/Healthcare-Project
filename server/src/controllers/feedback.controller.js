const { feedbackDB } = require("../model/feedback.model");

const addFeedback = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);

    await feedbackDB.add(data);

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(400).json({ ok: false });
  }
};

module.exports = { addFeedback };
