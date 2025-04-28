import { useState } from "react";

function ContactForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const addContactHandler = (e) => {
        e.preventDefault();
        const newContact = {
            name,
            email
        };

        props.addContact(newContact);

        // Clear the fields after adding
        setName('');
        setEmail('');
    }

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <hr style={{ margin: "30px 0" }} />
            <h1>📇 Contact Manager</h1>

            <h2>Add a Contact</h2>

            <form onSubmit={addContactHandler}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ marginLeft: "10px" }}
                />

                <button type="submit" style={{ marginLeft: "10px" }}>
                    Add Contact
                </button>
            </form>
        </div>
    );
}

export default ContactForm;