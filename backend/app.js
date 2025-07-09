const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const MONGO_URI = "mongodb+srv://johnlestercueto:johnlestercueto@cluster0.rasbmbj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = 5000;

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.get("/", (req, res) => {
    res.send("Hello world")

})

//routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/auth", require("./routes/authRoute"));

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});