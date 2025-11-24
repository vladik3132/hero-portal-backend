const express = require("express");
const router = express.Router();

const { db } = require("../index");

router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("news").get();
    const news = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(news);
  } catch (error) {
    console.error("News error:", error);
    res.status(500).json({ error: "Error loading news" });
  }
});

module.exports = router;
