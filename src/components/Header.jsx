import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1>VMCN</h1>
            <span>Business Solutions</span>
          </div>
          <div className="header-contact">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>info@vmcn.com</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>123 Business Ave, City, State</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
