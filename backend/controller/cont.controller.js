// const Contact = require("../models/contactModel");

// exports.createContact = async (req, res) => {
//   const { name, email, phone, subject, message } = req.body;

//   if (!name || !email || !phone || !subject || !message) {
//     return res.status(400).json({ error: "All fields are required." });
//   }

//   try {
//     const newContact = new Contact({
//       name,
//       email,
//       phone,
//       subject,
//       message,
//     });

//     await newContact.save();
//     res.status(201).json({ message: "Message received successfully!" });
//   } catch (err) {
//     console.error("Error saving message:", err);
//     res.status(500).json({ error: "Failed to save message." });
//   }
// };

// exports.getContacts = async (req, res) => {
//   try {
//     const contacts = await Contact.find().sort({ createdAt: -1 }); 
//     res.status(200).json(contacts);
//   } catch (err) {
//     console.error("Error fetching messages:", err);
//     res.status(500).json({ error: "Failed to retrieve messages." });
//   }
// };
