import React from "react";
import cctvSecurityImage from "../../assets/cctv-security.png";
import "./CCTVSecurity.scss";

const CCTVSecurity = () => {
  return (
    <section id="cctv-security" className="section cctv-security">
      <div className="container">
        <div className="section-content">
          <div className="content-image">
            <img
              src={cctvSecurityImage}
              alt="CCTV and Security Systems"
              loading="lazy"
            />
          </div>
          <div className="content-text">
            <h2>CCTV &amp; Security Systems</h2>
            <p>
              Protect your home, office, and business with advanced CCTV
              surveillance and smart security solutions. We provide professional
              installation, configuration, and maintenance services tailored to
              your security requirements.
            </p>
            <p>
              Our services include HD CCTV camera installation, biometric access
              control, video door phones, remote monitoring setup, networking,
              and annual maintenance support. With reliable technology and expert
              service, we help you monitor and secure your property 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CCTVSecurity;
