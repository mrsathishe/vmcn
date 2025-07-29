import React from 'react'
import { FaAward, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa'
import './About.css'

const About = () => {
  const values = [
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'We strive for excellence in every project and service we deliver.'
    },
    {
      icon: <FaUsers />,
      title: 'Teamwork',
      description: 'Collaborative approach with our clients and internal teams.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Cutting-edge solutions and creative problem-solving approaches.'
    },
    {
      icon: <FaHandshake />,
      title: 'Trust',
      description: 'Building long-term relationships based on trust and reliability.'
    }
  ]

  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About VMCN</h2>
            <p className="section-subtitle">
              Leading the way in business solutions with over a decade of experience
            </p>
            
            <div className="about-description">
              <p>
                Founded with a vision to transform businesses through innovative solutions, 
                VMCN has been at the forefront of business consulting and services. Our 
                dedicated team brings together expertise from various industries to deliver 
                comprehensive solutions.
              </p>
              
              <p>
                We believe in building lasting partnerships with our clients, understanding 
                their unique challenges, and crafting tailored strategies that drive growth 
                and success. Our commitment to excellence and innovation has made us a 
                trusted partner for businesses of all sizes.
              </p>
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <h4>Our Mission</h4>
                  <p>To empower businesses with innovative solutions that drive growth and create lasting value.</p>
                </div>
                
                <div className="highlight-item">
                  <h4>Our Vision</h4>
                  <p>To be the leading provider of business solutions, recognized for excellence and innovation.</p>
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
                <div className="value-icon">
                  {value.icon}
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
