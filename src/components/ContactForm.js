import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";

function ContactForm() {
  const form = useRef();
  const userId = process.env.REACT_APP_EMAILJS_USER_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const [messageSent, setMessageSent] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`${serviceId}`, `${templateId}`, form.current, `${userId}`)
      .then(
        (result) => {
          setMessageError(false);
          setMessageSent(true);
        },
        (error) => {
          console.log("error");
          setMessageSent(false);
          setMessageError(true);
        }
      );

    e.target.reset();
  };

  return (
    <div className="contactFormSection">
      <div className="contactFormSection__card">
        <p>
          Feel free to contact me (and/or tell me a little about yourself) if
          you'd like to work together!
        </p>

        <form
          ref={form}
          className="contactFormSection__form"
          onSubmit={sendEmail}
        >
          <label htmlFor="fullName"> Your Name :</label>
          <input
            className="contactForm__input"
            type="text"
            name="fullName"
            placeholder="(Required)"
            required
          />
          <label htmlFor="email">Your Email : </label>
          <input
            className="contactForm__input"
            type="text"
            name="email"
            placeholder="(Required)"
            required
          />
          <label htmlFor="message">Your Message : </label>
          <textarea name="message" placeholder="Your Message ... " required />
          <button type="submit">Let's Connect !</button>
          <div
            className={
              messageSent
                ? "contactFormSection__message-sent"
                : "contactFormSection__message"
            }
          >
            {" "}
            {messageSent ? (
              <>
                Message sent! <br></br>I'll get back to you as soon as possible!
              </>
            ) : null}
          </div>
          <div
            className={
              messageError
                ? "contactFormSection__message-error"
                : "contactFormSection__message"
            }
          >
            {messageError ? (
              <>
                Uh Oh! Something went wrong. <br></br>Feel free to email me
                instead!
              </>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
