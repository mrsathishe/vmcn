import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import vmLogo from "../../assets/vm-logo.svg";
import "./Navigation.scss";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Navigation height
      const elementPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { id: "hero", label: "Home" },
    { id: "enterprise-networking", label: "Enterprise" },
    { id: "iot", label: "IoT" },
    { id: "home-network", label: "Home Network" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`navigation ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <img src={vmLogo} alt="VM Logo" className="logo-icon" />
            <span onClick={() => scrollToSection("hero")}>VMCN</span>
          </div>

          <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
            {menuItems.map((item) => (
              <div key={item.id} className="nav-item">
                <button
                  className="nav-link"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
                {item.id === "contact" && (
                  <div className="contact-icons">
                    <div className="tooltip-container">
                      <div className="contact-icon phone-icon">📞</div>
                      <span className="tooltip">+91 9345305055</span>
                    </div>
                    <div className="tooltip-container">
                      <div className="contact-icon email-icon">✉️</div>
                      <span className="tooltip">
                        vmcomputersnetworking@gmail.com
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
