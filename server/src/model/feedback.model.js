const { db } = require("../utils/admin");

const feedbackDB = db.collection("feedbacks");

module.exports = { feedbackDB };
