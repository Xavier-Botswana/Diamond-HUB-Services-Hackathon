const admin = require("firebase-admin");

const serviceAccountPath = "./diamond-hub-firebase.json";
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

module.exports = {admin, db};
