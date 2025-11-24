const admin = require("firebase-admin");

const projectId = process.env.FIREBASE_PROJECT_ID;
let privateKey = process.env.FIREBASE_PRIVATE_KEY;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

// Render екранує \n → повертаємо
privateKey = privateKey.replace(/\\n/g, "\n");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      privateKey,
      clientEmail,
    }),
  });
}

module.exports = admin;
