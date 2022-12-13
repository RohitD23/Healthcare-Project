const { db } = require("../utils/admin");

const feedbackDB = db.collection("Feedbacks");

const storeFeedback = async (feedback) => {
  await feedbackDB.add(feedback);
};

module.exports = { storeFeedback };
