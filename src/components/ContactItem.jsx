import React from 'react';

function ContactItem({ contact, index, deleteContact }) {
    return (
        <li style={{ marginBottom: "10px" }}>
            <strong>{index + 1}.</strong> {contact.name} — {contact.email}
            <button
                onClick={() => deleteContact(contact.id)}
                style={{ marginLeft: "10px" }}
            >
                Delete
            </button>
        </li>
    );
}

export default ContactItem;