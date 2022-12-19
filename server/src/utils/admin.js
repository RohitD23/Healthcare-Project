var admin = require("firebase-admin");
require("dotenv").config();

var serviceAccount = require(process.env.SERVICE_ACCOUNT_URL);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { admin, db };
