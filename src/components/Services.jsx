import React from "react";
import {
  FaChartLine,
  FaCogs,
  FaUsers,
  FaLaptopCode,
  FaShieldAlt,
  FaBullhorn,
} from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: <FaChartLine />,
      title: "Business Consulting",
      description:
        "Strategic planning and business optimization to help your company achieve its goals and maximize growth potential.",
      features: [
        "Strategic Planning",
        "Market Analysis",
        "Growth Strategies",
        "Performance Optimization",
      ],
    },
    {
      icon: <FaCogs />,
      title: "Process Automation",
      description:
        "Streamline your operations with cutting-edge automation solutions that increase efficiency and reduce costs.",
      features: [
        "Workflow Automation",
        "System Integration",
        "Cost Reduction",
        "Efficiency Improvement",
      ],
    },
    {
      icon: <FaUsers />,
      title: "Team Management",
      description:
        "Expert guidance on team building, leadership development, and organizational structure optimization.",
      features: [
        "Leadership Training",
        "Team Building",
        "HR Solutions",
        "Performance Management",
      ],
    },
    {
      icon: <FaLaptopCode />,
      title: "Technology Solutions",
      description:
        "Custom software development and IT infrastructure solutions tailored to your business needs.",
      features: [
        "Custom Software",
        "IT Infrastructure",
        "Cloud Solutions",
        "Technical Support",
      ],
    },
    {
      icon: <FaShieldAlt />,
      title: "Risk Management",
      description:
        "Comprehensive risk assessment and mitigation strategies to protect your business interests.",
      features: [
        "Risk Assessment",
        "Compliance",
        "Security Audits",
        "Crisis Management",
      ],
    },
    {
      icon: <FaBullhorn />,
      title: "Marketing Strategy",
      description:
        "Data-driven marketing strategies and campaigns to boost your brand visibility and customer engagement.",
      features: [
        "Digital Marketing",
        "Brand Strategy",
        "Customer Analytics",
        "Campaign Management",
      ],
    },
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive business solutions designed to drive your success
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <button className="btn btn-outline service-btn">
                Learn More
              </button>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Transform Your Business?</h3>
            <p>
              Let's discuss how our services can help you achieve your business
              objectives.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
