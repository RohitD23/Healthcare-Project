const { storeFeedback, getAllFeedbacks } = require("../model/feedback.model");
const { getPagination } = require("../utils/pagination");

const addFeedback = async (req, res) => {
  try {
    const feedback = req.body;

    await storeFeedback(feedback);

    return res.status(200).json({ ok: true, msg: "Feedback Registered" });
  } catch (error) {
    return res
      .status(500)
      .json({ ok: false, msg: "Failed to register feedback" });
  }
};

const getFeedback = async (req, res) => {
  try {
    const { skip, limit } = getPagination(req.query);

    return res.status(200).json(await getAllFeedbacks(skip, limit));
  } catch (error) {
    console.log(error);
    return res.status(500).json({ ok: false, msg: "Failed to load feedback" });
  }
};

module.exports = { addFeedback, getFeedback };
