const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    console.log("connectdb");

    const conn = await mongoose.connect(process.env.MONGO_URI); //mongooose connect with database using mongoose.connect and save conn variable 
    
    if (!conn || !conn.connection) {
      throw new Error("Failed to establish a connection");
    }

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Connection Error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

