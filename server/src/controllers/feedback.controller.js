require("firebase/compat/firestore");

const firebase = require("../config");
const firestore = firebase.firestore;

const addFeedback = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(data);
    await firebase.collection("Feedback").doc().set(data);
    return res.status(200).json({ mssg: "Feedback Registered" });
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = { addFeedback };
