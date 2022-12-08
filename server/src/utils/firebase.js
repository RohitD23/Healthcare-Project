const firebase = require("firebase/compat/app");
require("firebase/compat/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBg2GgfWWa9k1mB_TW7QCOX4soXrsifBUQ",
  authDomain: "healthcare-project-2ea91.firebaseapp.com",
  projectId: "healthcare-project-2ea91",
  storageBucket: "healthcare-project-2ea91.appspot.com",
  messagingSenderId: "203871386703",
  appId: "1:203871386703:web:6c4088fbcca3088b05fe3a",
  measurementId: "G-HQXTSWE71F",
};

firebase.initializeApp(firebaseConfig); //initialize firebase app
module.exports = { firebase };
