import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          Have questions or need help? Reach out to us and we’ll get back to you
          as soon as possible.
        </p>

      
        <div className="contact-info">
          <div className="info-item">
            <strong>Email:</strong> support@example.com
          </div>
          <div className="info-item">
            <strong>Phone:</strong> +41 123 456 789
          </div>
          <div className="info-item">
            <strong>Location:</strong> Zurich, Switzerland
          </div>
        </div>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;