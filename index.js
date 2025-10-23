import express from "express";
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.status(200).send("✅ SmartMeal läuft auf Cloud Run!");
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
