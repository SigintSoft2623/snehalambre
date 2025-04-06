import React from "react";
import { Container } from "react-bootstrap";
import "./contacts.css"; // Custom CSS for styling

function Contact() {
  return (
    <div className="home-container">
      <Container>
        {/* Background Text Section */}
        <div className="background-text">
          <span className="left-text">Snehal</span>
          <span className="right-text">Ambre</span>
        </div>

        {/* Scrolling Contact Info */}
        <div className="contact-container">
          <div className="contact-info scroll-text">
            <p>
              <strong>Phone:</strong> +1(571)464-3420
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:snehalambre@yahoo.com">snehalambre@yahoo.com</a>
            </p>
            <p>
              <strong>Address:</strong> Livonia, Michigan(USA)
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
