const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.use("/api/news", require("./routes/newsRoutes"));
app.use("/api/gallery", require("./routes/galleryRoutes"));
app.use("/api/heroes", require("./routes/heroesRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
