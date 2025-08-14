import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";
import {FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram, FaFileAlt, FaQuestionCircle } from "react-icons/fa";

// Footer component
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-columns">

        {/* Location */}
        <div className="footer-col">
        <h3>Our Location</h3>
        <p>
            <FaMapMarkerAlt className="footer-icon-sm" />
            No. 66, 5th Street,<br />
            Padmanabha Nagar,<br />
            Adyar, Chennai - 600020
        </p>
        </div>

        {/* Policy */}
        <div className="footer-col">
          <h3>Our Policy</h3>
          <ul>
            <li>
              <Link to="/terms"><FaFileAlt className="footer-icon-sm" /> Terms &amp; Conditions</Link>
            </li>
            <li>
              <Link to="/faq"><FaQuestionCircle className="footer-icon-sm" /> FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Customer Service</h3>
          <ul>
            <li>
              <a href="mailto:theadyarhouse@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className="footer-icon-sm" /> theadyarhouse@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+919500615567">
                <FaPhone className="footer-icon-sm" /> +91 95006 15567
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/theadyarhouse" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="footer-icon-sm" /> @theadyarhouse
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
