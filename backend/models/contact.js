
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  description: String,
}, { timestamps: true });



const User = mongoose.model('Contact', contactSchema);
module.exports = User;