import React from "react";
import { FaRocket } from "react-icons/fa";
import websiteImage from "../../assets/website-application-devlopment.png";
import "./WebsiteDevelopment.scss";

const WebsiteDevelopment = () => {
  const capabilities = [
    {
      title: "Custom Development",
      description:
        "Tailored websites and web applications built with modern technologies",
    },
    {
      title: "Responsive Design",
      description:
        "Mobile-first approach ensuring perfect performance across all devices",
    },
    {
      title: "AI Integration",
      description:
        "Smart chatbots and AI-driven features for enhanced user experience",
    },
    {
      title: "Secure & Scalable",
      description:
        "Built with security best practices and designed to grow with your business",
    },
    {
      title: "Analytics & Insights",
      description:
        "Intelligent analytics to understand user behavior and optimize performance",
    },
    {
      title: "Personalized Content",
      description:
        "AI-powered content personalization for better user engagement",
    },
  ];

  return (
    <section id="website-development" className="website-development">
      <div className="container">
        <div className="website-development-content">
          <div className="website-development-text">
            <h2>Website & Web App Development</h2>
            <p className="website-development-description">
              We offer professional website and web application development
              services tailored to your business needs, enhanced with the power
              of AI tools. Whether you need a sleek, responsive website to
              showcase your brand or a smart web application to automate and
              optimize your operations, we build secure, scalable, and
              user-friendly solutions using the latest technologies. Key
              capabilities include custom development, mobile-friendly design,
              AI integration, advanced analytics, and content personalization to
              deliver a modern, adaptive digital experience.
            </p>
            <p className="website-development-ai">
              By integrating AI-driven features such as chatbots, personalized
              content, and intelligent analytics, we ensure a modern digital
              experience that is efficient, adaptive, and future-ready.
            </p>
          </div>

          <div className="website-development-image">
            <img
              src={websiteImage}
              alt="Website and Web Application Development"
              className="service-image"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <FaRocket className="overlay-icon" />
                <h4>Future-Ready Solutions</h4>
                <p>AI-Enhanced Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDevelopment;
