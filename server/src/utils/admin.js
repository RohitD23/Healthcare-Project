var admin = require("firebase-admin");

var serviceAccount = require("D:/cllg-project/server/healthcare-project-2ea91-firebase-adminsdk-29ato-48df9867b6.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { admin, db };
