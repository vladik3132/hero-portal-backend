const admin = require("../firebase/firebase-admin");
const db = admin.firestore();

exports.getGallery = async (req, res) => {
  try {
    const snapshot = await db.collection("gallery").get();
    const items = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    res.json(items);
  } catch (error) {
    console.error("Gallery error:", error);
    res.status(500).json({ error: "Error loading gallery" });
  }
};
