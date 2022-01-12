import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import "./ContactForm.scss"

function ContactForm() {
    const form = useRef();
    const userId = process.env.REACT_APP_EMAILJS_USER_ID
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(`${serviceId}`, `${templateId}` , form.current, `${userId}`)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <form ref={form} className="contactForm" onSubmit={sendEmail}>
           <input className="contactForm__input" type="text" name="fullName" placeholder ="Enter Full Name" required />
           <input className="contactForm__input" type="text" name="email" placeholder ="Enter Email" required />
           <textarea name="message" required />
           <button type="submit">Submit </button>
        </form>
    )
}

export default ContactForm
