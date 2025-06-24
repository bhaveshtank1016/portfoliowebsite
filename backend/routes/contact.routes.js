const express = require ('express');
const router = express.Router();
const Contact = require('../models/contact'); // adjust path as needed 

// router.post('/create', async (req, res) => {
//   try {
//     const { name, email, phone, subject, description } = req.body;
//     const contact = new Contact({ name, email, phone, subject, description });
//     await contact.save();
//     res.status(201).json({ message: 'Contact saved' });
//   } catch (err) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });

router.post('/form', async (req, res) => {
  try {
    console.log("Received POST:", req.body); // log data

    const { name, email, phone, subject, description } = req.body;

    if (!name || !email || !phone || !subject || !description) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const contact = new Contact({ name, email, phone, subject, description });
    await contact.save();

    console.log("Saved successfully");
    res.status(201).json({ message: 'Contact saved' });
  } catch (err) {
    console.error("Server error:", err.message);
    res.status(500).json({ error: 'Server error' });
  }
});


router.get('/all', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching contacts' });
  }
});

module.exports = router;