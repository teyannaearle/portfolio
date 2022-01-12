import React from "react";
import "./Contact.scss";
import Resume from "../components/Resume";
import ContactForm from "../components/ContactForm";
import caterpillar from "../assets/caterpillar.png";

function Contact() {
  return (
    <div className="contactPage">
      <Resume />
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
    </div>
  );
}

export default Contact;
