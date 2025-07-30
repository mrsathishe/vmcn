import React from "react";
import iotImage from "../../assets/iot-solutions.png";
import "./IoT.scss";

const IoT = () => {
  return (
    <section id="iot" className="section iot">
      <div className="container">
        <div className="section-content">
          <div className="content-image">
            <img src={iotImage} alt="IoT Solutions" loading="lazy" />
          </div>
          <div className="content-text">
            <h2>Smarter Connections, Smarter Decisions</h2>
            <p>
              Transform your business with intelligent IoT solutions that
              connect devices, systems, and people like never before. Our IoT
              services enable real-time data collection, remote monitoring, and
              smart automation across various industries. From smart office
              environments and industrial automation to energy management and
              asset tracking, we deliver custom IoT solutions that enhance
              efficiency, reduce operational costs, and drive innovation. With
              secure connectivity and advanced analytics, we help you unlock the
              full potential of connected technology to make smarter, faster
              business decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IoT;
