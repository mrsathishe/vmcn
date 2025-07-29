import React from "react";
import { FaAward, FaUsers, FaLightbulb, FaHandshake } from "react-icons/fa";
import "./About.css";

const About = () => {
  const values = [
    {
      icon: <FaAward />,
      title: "Excellence",
      description:
        "We strive for excellence in every project and service we deliver.",
    },
    {
      icon: <FaUsers />,
      title: "Teamwork",
      description:
        "Collaborative approach with our clients and internal teams.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description:
        "Cutting-edge solutions and creative problem-solving approaches.",
    },
    {
      icon: <FaHandshake />,
      title: "Trust",
      description:
        "Building long-term relationships based on trust and reliability.",
    },
  ];

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About VMCN</h2>
            <p className="section-subtitle">
              Vignesh Mahalingam Consulting Network - Your trusted partner in
              business transformation
            </p>

            <div className="about-description">
              <p>
                Founded by Vignesh Mahalingam, VMCN represents a decade of
                excellence in business consulting and strategic transformation.
                We specialize in helping organizations navigate complex
                challenges and unlock their full potential through data-driven
                insights and innovative methodologies.
              </p>

              <p>
                Our approach combines deep industry knowledge with cutting-edge
                technology to deliver sustainable solutions. We work closely
                with leadership teams to implement strategies that not only
                drive immediate results but also build long-term competitive
                advantages in today's dynamic marketplace.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <h4>Our Mission</h4>
                  <p>
                    To empower businesses with innovative solutions that drive
                    growth and create lasting value.
                  </p>
                </div>

                <div className="highlight-item">
                  <h4>Our Vision</h4>
                  <p>
                    To be the leading provider of business solutions, recognized
                    for excellence and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="image-content">
                <h3>10+ Years</h3>
                <p>of Excellence</p>
              </div>
            </div>
          </div>
        </div>

        <div className="values-section">
          <h3 className="values-title">Our Core Values</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
