import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      content:
        "VMCN transformed our business operations completely. Their consulting services helped us increase our efficiency by 40% and their team was incredibly professional throughout the process.",
      rating: 5,
      image: "👩‍💼",
    },
    {
      name: "Michael Chen",
      position: "Operations Director",
      company: "Global Solutions Ltd.",
      content:
        "The automation solutions provided by VMCN saved us countless hours and significantly reduced our operational costs. I would highly recommend their services to any business.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Emily Rodriguez",
      position: "Founder",
      company: "Innovation Hub",
      content:
        "Working with VMCN was a game-changer for our startup. Their strategic guidance and technical expertise helped us scale our business rapidly and efficiently.",
      rating: 5,
      image: "👩‍💻",
    },
    {
      name: "David Williams",
      position: "VP of Technology",
      company: "Enterprise Corp",
      content:
        "VMCN's technology solutions are top-notch. They delivered exactly what we needed on time and within budget. Their ongoing support has been exceptional.",
      rating: 5,
      image: "👨‍🔧",
    },
    {
      name: "Lisa Anderson",
      position: "Marketing Manager",
      company: "Growth Dynamics",
      content:
        "The marketing strategy developed by VMCN increased our lead generation by 150%. Their data-driven approach and creative solutions exceeded our expectations.",
      rating: 5,
      image: "👩‍🎨",
    },
    {
      name: "Robert Taylor",
      position: "Business Owner",
      company: "Local Services Co.",
      content:
        "As a small business owner, I was skeptical about consulting services. VMCN proved me wrong with their practical solutions and genuine care for our success.",
      rating: 5,
      image: "👨‍🏢",
    },
  ];

  const renderStars = (rating) => {
    return Array(rating)
      .fill(0)
      .map((_, index) => <FaStar key={index} className="star" />);
  };

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it - hear from our satisfied clients
        </p>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>

              <div className="testimonial-content">
                <p>"{testimonial.content}"</p>
              </div>

              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>

              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>{testimonial.image}</span>
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-stats">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>98%</h3>
              <p>Satisfaction Rate</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-item">
              <h3>10+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
