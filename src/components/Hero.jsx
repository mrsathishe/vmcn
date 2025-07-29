import React from 'react'
import { FaArrowRight, FaPlay } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Excellence in <span className="highlight">Business Solutions</span>
            </h1>
            <p className="hero-subtitle">
              We provide comprehensive business services and innovative solutions 
              to help your company grow and succeed in today's competitive market.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat-item">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Get Started <FaArrowRight />
              </button>
              <button className="btn btn-outline" onClick={scrollToAbout}>
                <FaPlay /> Learn More
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-card">
              <h3>Professional Services</h3>
              <p>Tailored solutions for your business needs</p>
              <div className="features-list">
                <div className="feature-item">✓ Consultation</div>
                <div className="feature-item">✓ Implementation</div>
                <div className="feature-item">✓ Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
