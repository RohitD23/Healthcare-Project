const { storeFeedback } = require("../model/feedback.model");

const addFeedback = async (req, res) => {
  try {
    const feedback = req.body;

    await storeFeedback(data);

    return res.status(200).json({ ok: true, msg: "Feedback Registered" });
  } catch (error) {
    return res
      .status(400)
      .json({ ok: false, msg: "Failed to register feedback" });
  }
};

module.exports = { addFeedback };
