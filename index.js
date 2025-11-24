const express = require("express");
const cors = require("cors");
require("dotenv").config();

// ===== FIREBASE INIT USING SECRET FILE =====
const admin = require("firebase-admin");
const serviceAccount = require("/etc/secrets/firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Firestore instance
const db = admin.firestore();
module.exports.db = db;

// ========== EXPRESS ==========
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// ===== ROUTES =====
app.use("/api/news", require("./routes/newsRoutes"));
app.use("/api/gallery", require("./routes/galleryRoutes"));
app.use("/api/heroes", require("./routes/heroesRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
