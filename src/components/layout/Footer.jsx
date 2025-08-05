import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  const serviceLinks = [
    { id: "enterprise-networking", label: "Enterprise Networking" },
    { id: "iot", label: "IoT Solutions" },
    { id: "home-network", label: "Home Network" },
    { id: "website-development", label: "Website Development" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: "#", label: "Facebook" },
    { icon: <FaTwitter />, url: "#", label: "Twitter" },
    { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
    { icon: <FaInstagram />, url: "#", label: "Instagram" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">VM Computers and Networking</h3>
            <p className="footer-description">
              Professional networking solutions for modern businesses. From
              enterprise networking to smart home solutions - we deliver
              cutting-edge technology infrastructure that keeps your business
              connected and your home automated.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="footer-link"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Our Services</h4>
            <ul className="footer-links">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(service.id)}
                    className="footer-link"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon phone-icon">📞</span>
                <span>+91 9345305055</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon email-icon">✉️</span>
                <span className="email-address">
                  vmcomputersnetworking
                  <br />
                  @gmail.com
                </span>
              </div>
              <div className="contact-item">
                <span className="contact-icon location-icon">📍</span>
                <span>
                  Chennai, Tamil Nadu
                  <br />
                  India
                </span>
              </div>
            </div>
            <div className="newsletter">
              <h5>Get In Touch</h5>
              <p>
                Contact us for professional networking solutions and IT support.
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              &copy; {currentYear} VM Computers and Networking. All rights
              reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">
                Privacy Policy
              </a>
              <a href="#" className="footer-bottom-link">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
