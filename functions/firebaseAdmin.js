const admin = require("firebase-admin");

const serviceAccountPath = process.env.SERVICE_ACCOUNT_PATH || "./diamond-hub-firebase.json";
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = { admin, db };
