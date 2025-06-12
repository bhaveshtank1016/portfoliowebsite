const express = require("express");
// const dotenv = require("dotenv");
const connectDB = require("./config/db");
const contactRoutes = require("./routes/route");
const cors = require("cors");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", contactRoutes);

module.exports = app;
