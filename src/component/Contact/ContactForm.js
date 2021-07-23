import React, { useState } from 'react'

function ContactForm() {
    const [status, setStatus] = useState('Submit')
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        const { name, email, message } = e.target.elements;
        const details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        const res = await fetch('http://localhost:3000/contact', {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus('Successfully sent!')
        const result = await res.json();
        alert(result.status)
        console.log(result)
    }

    return (
        <div>
          <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea id="message" required />
            </div>
            <button type="submit">{status}</button>
           </form>
        </div>
 
    );
};

export default ContactForm

