const express = require("express");
const router = express.Router();

const { db } = require("../index");

router.get("/", async (req, res) => {
  try {
    const snapshot = await db.collection("heroes").get();
    const heroes = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.json(heroes);
  } catch (error) {
    console.error("Heroes error:", error);
    res.status(500).json({ error: "Failed to load heroes" });
  }
});

module.exports = router;
