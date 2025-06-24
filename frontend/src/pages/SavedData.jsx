import React, { useEffect, useState } from "react";

const  SaveData= () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/api/all")
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.error("Error fetching contacts", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Saved Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div key={contact._id} className="p-4 bg-gray-100 rounded-md">
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Phone:</strong> {contact.phone}</p>
              <p><strong>Subject:</strong> {contact.subject}</p>
              <p><strong>Description:</strong> {contact.description}</p>
              <p className="text-sm text-gray-500">
                Submitted on: {new Date(contact.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SaveData;
