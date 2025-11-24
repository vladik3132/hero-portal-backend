const express = require("express");
const router = express.Router();

const { db } = require("../index");

router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("gallery").get();
    const items = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(items);
  } catch (error) {
    console.error("Gallery error:", error);
    res.status(500).json({ error: "Error loading gallery" });
  }
});

module.exports = router;
