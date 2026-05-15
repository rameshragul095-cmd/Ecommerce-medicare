const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "https://ecommerce-medicare-p4c3.vercel.app",
    methods: ["GET", "POST"],
    credentials: true
  })
);

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