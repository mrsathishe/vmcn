import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>VM Computers and Networking</h1>
          </div>
          <div className="header-contact">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+91 9345305055</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>vmcomputersnetworking@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
