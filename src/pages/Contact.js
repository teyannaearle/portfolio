import React from 'react'
import "./Contact.scss"
import Resume from "../components/Resume"
import ContactForm from "../components/ContactForm"
import caterpillar from "../assets/caterpillar.png"

function Contact() {
    return (
        <div className="contactPage">
            <Resume />
            <img src={caterpillar} alt="alice in wonderland caterpillar saying who are you"/>
            <ContactForm />
        </div>
    )
}

export default Contact
