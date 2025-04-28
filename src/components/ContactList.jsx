import React from 'react';
import ContactItem from './ContactItem';

function ContactList({ contacts, deleteContact }) {
    return (
        <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
            {contacts.map((contact, index) => (
                <ContactItem
                    key={index}
                    contact={contact}
                    index={index}
                    deleteContact={deleteContact}
                />
            ))}
        </ul>
    );
}

export default ContactList;