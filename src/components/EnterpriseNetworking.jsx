import React from "react";
import enterpriseImage from "../assets/Enterprise Networking Solutions.png";
import "./EnterpriseNetworking.css";

const EnterpriseNetworking = () => {
  return (
    <section
      id="enterprise-networking"
      className="section enterprise-networking"
    >
      <div className="container">
        <div className="section-content">
          <div className="content-image">
            <img
              src={enterpriseImage}
              alt="Enterprise Networking Solutions"
              loading="lazy"
            />
          </div>
          <div className="content-text">
            <h2>Enterprise Networking and Office IT Infrastructure</h2>
            <p>
              Ensure seamless communication and maximum productivity with our
              comprehensive Office Networking solutions. We specialize in
              designing, installing, and maintaining secure, high-speed networks
              tailored to your business needs. Our services include structured
              cabling, wireless networking, LAN/WAN setup, server configuration,
              network security, and cloud integration. Whether you're setting up
              a new office or upgrading existing infrastructure, we provide
              scalable solutions that grow with your business. Trust us to keep
              your team connected, your data secure, and your operations running
              smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseNetworking;
