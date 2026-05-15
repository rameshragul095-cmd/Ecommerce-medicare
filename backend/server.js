const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
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

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});