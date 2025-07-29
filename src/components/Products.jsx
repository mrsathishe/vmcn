import React from "react";
import { FaRocket, FaShieldAlt, FaCloud, FaMobile } from "react-icons/fa";
import "./Products.css";

const Products = () => {
  const products = [
    {
      icon: <FaRocket />,
      title: "Business Accelerator Suite",
      description:
        "Complete business management platform with CRM, project management, and analytics.",
      price: "Starting at $299/month",
      features: [
        "Customer Relationship Management",
        "Project & Task Management",
        "Advanced Analytics Dashboard",
        "Team Collaboration Tools",
        "Automated Reporting",
        "24/7 Customer Support",
      ],
      popular: true,
    },
    {
      icon: <FaShieldAlt />,
      title: "Security Management Pro",
      description:
        "Enterprise-grade security solution for protecting your business data and operations.",
      price: "Starting at $199/month",
      features: [
        "Multi-layer Security Protection",
        "Real-time Threat Monitoring",
        "Compliance Management",
        "Access Control System",
        "Security Audit Reports",
        "Emergency Response Protocol",
      ],
      popular: false,
    },
    {
      icon: <FaCloud />,
      title: "Cloud Infrastructure Manager",
      description:
        "Scalable cloud solutions for modern businesses with automatic scaling and backup.",
      price: "Starting at $149/month",
      features: [
        "Auto-scaling Infrastructure",
        "Daily Automated Backups",
        "Load Balancing",
        "CDN Integration",
        "Performance Monitoring",
        "Cost Optimization Tools",
      ],
      popular: false,
    },
    {
      icon: <FaMobile />,
      title: "Mobile Business App",
      description:
        "Custom mobile applications designed to enhance your business operations and customer engagement.",
      price: "Custom Pricing",
      features: [
        "Cross-platform Development",
        "Real-time Synchronization",
        "Offline Functionality",
        "Push Notifications",
        "User Analytics",
        "App Store Deployment",
      ],
      popular: false,
    },
  ];

  return (
    <section id="products" className="section products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">
          Innovative solutions designed to streamline your business operations
        </p>

        <div className="products-grid">
          {products.map((product, index) => (
            <div
              key={index}
              className={`product-card ${product.popular ? "popular" : ""}`}
            >
              {product.popular && (
                <div className="popular-badge">Most Popular</div>
              )}

              <div className="product-header">
                <div className="product-icon">{product.icon}</div>
                <h3>{product.title}</h3>
                <p className="product-description">{product.description}</p>
              </div>

              <div className="product-pricing">
                <div className="price">{product.price}</div>
              </div>

              <div className="product-features">
                <h4>Features Include:</h4>
                <ul>
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="product-actions">
                <button
                  className={`btn ${
                    product.popular ? "btn-primary" : "btn-outline"
                  } product-btn`}
                >
                  Get Started
                </button>
                <button className="btn-link">Learn More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="products-info">
          <div className="info-grid">
            <div className="info-item">
              <h4>30-Day Free Trial</h4>
              <p>
                Try any of our products risk-free for 30 days with full access
                to all features.
              </p>
            </div>
            <div className="info-item">
              <h4>Custom Solutions</h4>
              <p>
                Need something specific? We create custom solutions tailored to
                your unique requirements.
              </p>
            </div>
            <div className="info-item">
              <h4>Enterprise Support</h4>
              <p>
                24/7 dedicated support team to ensure your business operations
                run smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
