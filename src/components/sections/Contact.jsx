import React, { useState, useRef } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaFile,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import "./Contact.scss";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    attachments: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      attachments: files,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Note: For EmailJS to work with attachments, you need to configure it properly
      // This is a basic implementation that sends the form data

      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        title: formData.subject,
        message: formData.message,
        to_email: "vmcomputersnetworking@gmail.com", // Updated email from specifications
        attachments_count: formData.attachments.length,
        time: new Date().toLocaleString(),
      };

      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        "service_jbg94yk", // Replace with your EmailJS service ID
        "template_ebf9xtj", // Replace with your EmailJS template ID
        templateParams,
        "_ZAsC8EEW93dGjrwO" // Replace with your EmailJS public key
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        attachments: [],
      });

      // Reset file input
      if (formRef.current) {
        const fileInput = formRef.current.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = "";
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: ["+91 9345305055"],
      link: "tel:+919345305055",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: ["vmcomputersnetworking@gmail.com"],
      link: "mailto:vmcomputersnetworking@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Locations",
      details: ["Tamil Nadu, Puducherry", "Kerala & Karnataka"],
      link: "#",
    },
    {
      icon: <FaClock />,
      title: "Business Hours",
      details: ["Monday–Friday: 9 AM – 6 PM", "Saturday–Sunday: 10 AM – 5 PM"],
      link: "#",
    },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">VM COMPUTERS AND NETWORKING</h2>
        <p className="section-subtitle">Owner: Vignesh Mahalingam</p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              We're here to help you succeed. Reach out to us through any of the
              following channels:
            </p>

            <div className="contact-items">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-info-icon">{item.icon}</div>
                  <div className="contact-details">
                    <h4>{item.title}</h4>
                    {item.details.map((detail, detailIndex) => (
                      <p key={detailIndex}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-cta">
              <h4>Need Immediate Assistance?</h4>
              <p>
                Call us directly for urgent matters or schedule a consultation.
              </p>
              <a
                href="tel:+919345305055"
                className="btn btn-secondary call-now-btn"
              >
                <FaPhone className="phone-icon" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          <div className="contact-form-section">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <h3>Send Us a Message</h3>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Required Service *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="consultation">
                      Free Network Consultation
                    </option>
                    <option value="enterprise-networking">
                      Enterprise Network Setup
                    </option>
                    <option value="home-networking">
                      Home Network Solutions
                    </option>
                    <option value="security-solutions">
                      Network Security Solutions
                    </option>

                    <option value="server-setup">
                      Server Setup & Configuration
                    </option>
                    <option value="it-support">IT Support & Maintenance</option>
                    <option value="computer-repair">
                      Computer Repair Services
                    </option>
                    <option value="hardware-procurement">
                      Hardware Procurement
                    </option>
                    <option value="backup-solutions">
                      Backup & Recovery Solutions
                    </option>
                    <option value="cctv-installation">
                      CCTV & Surveillance Systems
                    </option>
                    <option value="pc-build-and-upgrade">
                      PC Build and Upgrade
                    </option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              {/* <div className="form-group">
                <label htmlFor="attachments">Attachments</label>
                <div className="file-input-wrapper">
                  <input
                    type="file"
                    id="attachments"
                    onChange={handleFileChange}
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt"
                  />
                  <label htmlFor="attachments" className="file-input-label">
                    <FaFile /> Choose Files
                  </label>
                  {formData.attachments.length > 0 && (
                    <div className="file-list">
                      {Array.from(formData.attachments).map((file, index) => (
                        <span key={index} className="file-item">
                          {file.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <small>
                  Supported formats: PDF, DOC, DOCX, JPG, PNG, TXT (Max 10MB
                  each)
                </small>
              </div> */}

              <button
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>

              {submitStatus === "success" && (
                <div className="form-message success">
                  Message sent successfully! We'll get back to you within 24
                  hours.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="form-message error">
                  Failed to send message. Please try again or contact us
                  directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
