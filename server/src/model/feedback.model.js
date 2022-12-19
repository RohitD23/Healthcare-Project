const { db } = require("../utils/admin");

const feedbackDB = db.collection("Feedbacks");

const storeFeedback = async (feedback) => {
  await feedbackDB.add(feedback);
};

const getAllFeedbacks = async (skip, limit) => {
  const page = await feedbackDB.limit(limit).offset(skip);
  let documents = [];

  await page
    .get()
    .then((docs) => docs.forEach((doc) => documents.push(doc.data())));

  const count = await feedbackDB.get().then((docs) => {
    return docs.size;
  });

  return { documents, count };
};

module.exports = { storeFeedback, getAllFeedbacks };
