const admin = require("../firebase/firebase-admin");
const db = admin.firestore();

exports.getAllHeroes = async (req, res) => {
  try {
    const snapshot = await db.collection("heroes").get();
    const heroes = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    res.json(heroes);
  } catch (error) {
    console.error("Error loading heroes:", error);
    res.status(500).json({ error: "Failed to load heroes" });
  }
};
