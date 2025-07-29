import React from "react";
import "./Hero.css";
import mainLogo from "../assets/Main logo.jpg";

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="logo-section">
              <div className="company-header">
                <img
                  src={mainLogo}
                  alt="VM Computers and Networking Logo"
                  className="company-logo"
                />
                <div className="company-info">
                  <h1 className="company-name">VM COMPUTERS</h1>
                  <h1 className="company-name-line2">AND NETWORKING</h1>
                </div>
              </div>
            </div>
            <h2 className="hero-title">
              Professional Networking Solutions for{" "}
              <span className="highlight">Modern Businesses</span>
            </h2>
            <p className="hero-description">
              From Enterprise Networking to Smart Home Solutions - We deliver
              cutting-edge technology infrastructure that keeps your business
              connected and your home automated. Our expertise spans network
              design, IoT implementation, and comprehensive IT support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
