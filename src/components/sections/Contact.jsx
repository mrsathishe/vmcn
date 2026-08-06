import React, { useState, useRef } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaFile,
} from "react-icons/fa";
import { sendContactMessage, HONEYPOT_FIELD, MIN_SUBMIT_SECONDS } from "../../services/mailApi";
import "./Contact.scss";

const SERVICE_OPTIONS = [
  "Free Network Consultation",
  "Enterprise Network Setup",
  "Home Network Solutions",
  "Network Security Solutions",
  "Server Setup & Configuration",
  "IT Support & Maintenance",
  "Computer Repair Services",
  "Hardware Procurement",
  "Backup & Recovery Solutions",
  "CCTV & Surveillance Systems",
  "PC Build and Upgrade",
  "Other Inquiry",
];

const Contact = () => {
  const formRef = useRef();
  // Set when the section first renders and read at submit, to satisfy the mail API's
  // minimum fill time. Because the whole page renders at once, this clock starts on
  // page load rather than when the visitor reaches the form.
  const renderedAtRef = useRef(Date.now());
  // Read from the DOM, not from state: a bot that fills the hidden input does it
  // directly, which never runs React's onChange.
  const honeypotRef = useRef(null);
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
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Commented out file handling functionality
  // const handleFileChange = (e) => {
  //   const files = Array.from(e.target.files);
  //   setFormData((prev) => ({
  //     ...prev,
  //     attachments: files,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus("");
    setErrorMessage("");

    try {
      // The server's spam guard refuses anything sent before its minimum fill time,
      // so an early submit has to wait it out. Wait here instead of rejecting and
      // asking for a second click: one click sends, whenever it happens.
      const remainingMs =
        MIN_SUBMIT_SECONDS * 1000 - (Date.now() - renderedAtRef.current);
      if (remainingMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, remainingMs));
      }

      await sendContactMessage({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        service: formData.subject,
        // Measured after the wait, or it would still be the too-early value.
        elapsedMs: Date.now() - renderedAtRef.current,
        honeypot: honeypotRef.current?.value ?? "",
      });

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        attachments: [],
      });
      // A fresh window for the next message, so the timing check doesn't keep
      // measuring from the original page load.
      renderedAtRef.current = Date.now();

      // Reset file input
      if (formRef.current) {
        const fileInput = formRef.current.querySelector('input[type="file"]');
        if (fileInput) fileInput.value = "";
      }
    } catch (error) {
      console.error("Mail API Error:", error);
      setErrorMessage(
        error.name === "AbortError"
          ? "The request timed out."
          : error.message
      );
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

              {/* Bot bait: a real visitor never sees this, so anything in it means the
                  submission was automated. Positioned off-screen rather than
                  `display: none`, which some bots skip. */}
              <div className="honeypot" aria-hidden="true">
                <label htmlFor={HONEYPOT_FIELD}>Company URL</label>
                <input
                  type="text"
                  id={HONEYPOT_FIELD}
                  name={HONEYPOT_FIELD}
                  ref={honeypotRef}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

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
                    {SERVICE_OPTIONS.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
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
                <div className="form-message error" role="alert">
                  {errorMessage ||
                    "Failed to send message. Please try again or contact us directly."}
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
