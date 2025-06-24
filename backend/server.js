const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db'); 
const contactRoutes = require('./routes/contact.routes');
const cors = require('cors');

const app = express();
app.use(express.json()); // To parse JSON bodies


app.use(cors());


connectDB();


app.use('/api', contactRoutes);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});