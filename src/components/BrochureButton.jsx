import React, { useState } from "react";
import { FaDownload, FaFilePdf, FaTimes } from "react-icons/fa";
import "./BrochureButton.scss";

const BrochureButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDownload = () => {
    // Create a temporary link element to download the PDF from public folder
    const link = document.createElement("a");
    link.href = "/VMCN_BROCHURE.pdf";
    link.download = "VMCN_Company_Brochure.pdf";
    link.target = "_blank"; // Optional: opens in new tab for viewing
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsExpanded(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`brochure-button-container ${isExpanded ? "expanded" : ""}`}
    >
      {isExpanded ? (
        <div className="brochure-expanded">
          <div className="brochure-header">
            <FaFilePdf className="pdf-icon" />
            <span>Company Brochure</span>
            <button className="close-btn" onClick={toggleExpanded}>
              <FaTimes />
            </button>
          </div>
          <div className="brochure-content">
            <p>Download our complete services brochure</p>
            <ul>
              <li>Enterprise Networking Solutions</li>
              <li>Home Network Setup</li>
              <li>IoT Solutions</li>
              <li>Security Systems</li>
              <li>IT Support Services</li>
              <li>Website or Web Application Development</li>
            </ul>
            <button className="download-btn" onClick={handleDownload}>
              <FaDownload />
              Download Brochure
            </button>
          </div>
        </div>
      ) : (
        <button className="brochure-toggle" onClick={toggleExpanded}>
          <FaFilePdf />
          <span>Brochure</span>
        </button>
      )}
    </div>
  );
};

export default BrochureButton;
