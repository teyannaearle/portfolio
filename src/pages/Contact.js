import React from "react";
import "./Contact.scss";
import Resume from "../components/resume/Resume";
import ContactForm from "../components/contactForm/ContactForm";
import caterpillar from "../assets/caterpillar.png";

function Contact() {
  return (
    <div className="contactPage">
      <Resume />
      <span className="contactPage__container"> 
      <div className="contactPage__greeting">
        {" "}
        <h1>I'm so happy that you're here.</h1>
      </div>

      <div className="contactPage__bottomHalf">
        <img
          src={caterpillar}
          alt="alice in wonderland caterpillar saying who are you"
        />
        <ContactForm />
      </div>
      </span>
    </div>
  );
}

export default Contact;
