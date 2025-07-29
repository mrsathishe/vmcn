import React from "react";
import homeNetworkImage from "../assets/Home Network Infrastructure.png";
import "./HomeNetwork.css";

const HomeNetwork = () => {
  return (
    <section id="home-network" className="section home-network">
      <div className="container">
        <div className="section-content">
          <div className="content-image">
            <img
              src={homeNetworkImage}
              alt="Home Network Infrastructure"
              loading="lazy"
            />
          </div>
          <div className="content-text">
            <h2>Stay Connected with Next Gen Home Network Infrastructure</h2>
            <p>
              Build a strong, secure, and seamless connection throughout your
              home with our range of home networking solutions. Whether you're
              streaming, gaming, working remotely, or managing smart devices,
              our selection of routers, mesh Wi-Fi systems, extenders, switches,
              and accessories ensures fast and reliable performance. Designed
              for homes of all sizes, our products help eliminate dead zones and
              deliver consistent coverage where you need it most—so you can stay
              connected, always.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNetwork;
