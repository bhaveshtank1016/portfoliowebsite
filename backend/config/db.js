// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI); // ✅ simplified, no options
//     console.log("MongoDB Connected");
//   } catch (error) {
//     console.error("Connection Error", error.message);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


// const mongoose = require("mongoose");
// require("dotenv").config(); // ✅ This line is important!
// URI = "mongodb://localhost:27017"

// const connectDB = async () => {
//   console.log("connectdb");
//   try {
//     const conn = mongoose.connect(process.env.MONGO_URI);

//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (err) {
//     console.error("Connection Error", err.message);
//     process.exit(1); // Stop the server if DB fails
//   }
// };

// module.exports = connectDB;


const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    console.log("connectdb");

    const conn = await mongoose.connect(process.env.MONGO_URI);
    
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

