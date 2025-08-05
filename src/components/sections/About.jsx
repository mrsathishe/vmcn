import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-header">
            <h2 className="section-title">About Us</h2>
            <p className="section-subtitle">
              Your Trusted Technology Partner Since 2024
            </p>
          </div>

          <div className="about-intro">
            <p>
              Welcome to <strong>VM Computers and Networking (VMCN)</strong>—a
              thriving one-year-old startup based in Chennai, Tamil Nadu.
              Founded in 2024, VMCN was born from a passion for connecting
              people and businesses through reliable, innovative IT
              infrastructure.
            </p>
          </div>

          <div className="about-sections">
            <div className="about-card mission-vision">
              <div className="card-header">
                <div className="card-icon">🎯</div>
                <h3>Our Mission & Vision</h3>
              </div>
              <div className="card-content">
                <div className="mission">
                  <h4>Mission</h4>
                  <p>
                    Our mission is to empower local businesses and individuals
                    with seamless IT-managed services, computer networking
                    solutions, and hardware support. We believe everyone
                    deserves access to efficient, secure, and scalable
                    technology.
                  </p>
                </div>
                <div className="vision">
                  <h4>Vision</h4>
                  <p>
                    Our vision is to become the region's go-to technology
                    partner—delivering professional, modern, and cost-effective
                    solutions that help clients thrive in an ever-evolving
                    digital era.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-card story">
              <div className="card-header">
                <div className="card-icon">📖</div>
                <h3>Our Story</h3>
              </div>
              <div className="card-content">
                <p>
                  VMCN was launched by a team of IT professionals who shared a
                  common vision: to provide high-quality, affordable networking
                  services in a region often underserved by big players. Over
                  the past year, we've helped local ventures—from educational
                  institutions to small offices—move forward with confidence and
                  connectivity.
                </p>
              </div>
            </div>

            <div className="about-card values">
              <div className="card-header">
                <div className="card-icon">💎</div>
                <h3>Our Values</h3>
              </div>
              <div className="card-content">
                <div className="values-grid">
                  <div className="value-item">
                    <div className="value-icon">🤝</div>
                    <h4>Integrity</h4>
                    <p>Clear communication, honest service</p>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">💡</div>
                    <h4>Innovation</h4>
                    <p>Staying current with tools and standards</p>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">⚡</div>
                    <h4>Reliability</h4>
                    <p>Delivering on promises, every time</p>
                  </div>
                  <div className="value-item">
                    <div className="value-icon">🏘️</div>
                    <h4>Community</h4>
                    <p>Building useful solutions for growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="why-choose-us-section">
            <h3>Why Choose Us</h3>
            <div className="choose-us-table">
              <div className="table-header">
                <div className="header-cell">What Sets Us Apart</div>
                <div className="header-cell">Why It Matters</div>
              </div>
              <div className="table-row">
                <div className="cell feature">
                  <strong>Local Focus</strong>
                </div>
                <div className="cell description">
                  Deep understanding of the needs of businesses according to the
                  region
                </div>
              </div>
              <div className="table-row">
                <div className="cell feature">
                  <strong>Personalized Support</strong>
                </div>
                <div className="cell description">
                  We treat every client as a partner—swift response and tailored
                  care are our promise
                </div>
              </div>
              <div className="table-row">
                <div className="cell feature">
                  <strong>Future-Ready Infrastructure</strong>
                </div>
                <div className="cell description">
                  From basic LAN to enterprise-level setups, we build networks
                  ready to grow with you
                </div>
              </div>
              <div className="table-row">
                <div className="cell feature">
                  <strong>Transparent Pricing</strong>
                </div>
                <div className="cell description">
                  No hidden fees—just clear, honest communication and fair
                  service
                </div>
              </div>
            </div>
          </div>

          <div className="about-cta">
            <h3>Ready to Get Started?</h3>
            <p>
              Let's discuss how we can help transform your technology
              infrastructure and drive your business forward.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
