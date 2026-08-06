import React from "react";
import "./LegalPopup.scss";

const LegalPopup = ({ content, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="legal-text">{content}</div>
        <button className="close-button-bottom" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default LegalPopup;
