const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();

app.use(cors());
app.use(express.json());
const authRoutes = require("./routes/authRoutes");

app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
    res.send("Backend Running");
});

connectDB();
app.listen(5000, () => {
    console.log("Server running on port 5000");
});