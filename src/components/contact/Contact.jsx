import React from "react";
import "./contact.css";
import copy from "copy-to-clipboard";
import ContactForm from "../contact form/ContactForm";

const copyToClipboard = () => {
  copy("brwothmio@gmail.com");
  alert("the address has been copied to your clipboard");
};

function Contact() {
  return (
    <section id="contact">
      <div className="contact__content nice-text">
        <p id="contact__content-p1">
          If you'd like to reach out to me, <br />
          I'll be more than happy to hear from you.
        </p>

        <p id="contact__content-p2">
          If you have a message with file attachments, <br />I suggest you use
          {"  "}
          <button onClick={copyToClipboard}>
            this email address - <i>(click to copy)</i>
          </button>{" "}
        </p>

        <p id="contact__content-p2">
          Alternatively, <br />
          you can use the form to send your quick email with no attachments.
        </p>
      </div>

      <p id="contact__content-mobile">
        You can use{" "}
        <button onClick={copyToClipboard}>this email address</button> or form
        below to reach out to me
      </p>
      
      <div className="contact__form">
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;
