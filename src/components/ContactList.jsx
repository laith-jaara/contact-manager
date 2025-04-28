import React from 'react';
// import ContactItem from './ContactItem';  // Temporarily commented

function ContactList({ contacts, deleteContact }) {
    return (
        <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
            {contacts.map((contact, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                    <strong>{index + 1}.</strong> {contact.name} — {contact.email}
                </li>
            ))}
        </ul>
    );
}

export default ContactList;