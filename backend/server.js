const express = require('express');
const cors = require('cors'); // 1. Import cors
const app = express();

// 2. Configure CORS
app.use(cors({
  origin: "https://ecommerce-medicare-p4c3.vercel.app", // Your Vercel URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// ROUTES
app.use("/auth", require("./routes/authRoutes"));

// TEST
app.get("/", (req, res) => {
  res.send("Backend Working");
});

// SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});