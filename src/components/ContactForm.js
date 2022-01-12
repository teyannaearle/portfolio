import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";

function ContactForm() {
  const form = useRef();
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${serviceId}`, `${templateId}`, form.current, `${userId}`)
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset()
  };

  return (
    <div className="contactFormSection">
        <div className="contactFormSection__card">
        <p>Feel free to contact me (and/or tell me a little about yourself) if you'd like to work together!</p>

      
      <form ref={form} className="contactFormSection__form" onSubmit={sendEmail}>
        <label for="fullName"> Your Name :</label>
        <input
          className="contactForm__input"
          type="text"
          name="fullName"
          placeholder="(Required)"
          required
        />
        <label for="email">Your Email : </label>
        <input
          className="contactForm__input"
          type="text"
          name="email"
          placeholder="(Required)"
          required
        />
        <label for="message">Your Message : </label>
        <textarea name="message" placeholder="Your Message ... " required />
        <button type="submit">Let's Connect !</button>
      </form>
      </div>
  </div>
  );
}

export default ContactForm;
