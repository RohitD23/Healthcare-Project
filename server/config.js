const firebase = require("firebase/compat/app");
require("firebase/compat/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBg2GgfWWa9k1mB_TW7QCOX4soXrsifBUQ",
  authDomain: "healthcare-project-2ea91.firebaseapp.com",
  projectId: "healthcare-project-2ea91",
  storageBucket: "healthcare-project-2ea91.appspot.com",
  messagingSenderId: "203871386703",
  appId: "1:203871386703:web:e05bdfe79454653505fe3a",
  measurementId: "G-8V4LY58T0Z",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const User = db.collection("Users");

module.exports = { db, User };
