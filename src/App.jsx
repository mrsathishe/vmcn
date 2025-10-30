import React, { useState, useEffect } from "react";
import PrivacyPolicyPopup from "./components/PrivacyPolicyPopup";
import { privacyPolicyContent } from "./privacyPolicyContent";
import Navigation from "./components/layout/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import EnterpriseNetworking from "./components/services/EnterpriseNetworking";
import IoT from "./components/services/IoT";
import HomeNetwork from "./components/services/HomeNetwork";
import WebsiteDevelopment from "./components/services/WebsiteDevelopment";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import BrochureButton from "./components/BrochureButton";
import "./styles/main.scss";

function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  // const [policyContent, setPolicyContent] = useState(privacyPolicyContent);

  const handlePrivacyPolicyClick = () => {
    setShowPrivacyPolicy(true);
  };

  const handleClosePopup = () => {
    setShowPrivacyPolicy(false);
  };

  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <About />
        <EnterpriseNetworking />
        <IoT />
        <HomeNetwork />
        <WebsiteDevelopment />
        <Contact />
      </main>
      <Footer onPrivacyPolicyClick={handlePrivacyPolicyClick} />
      <BrochureButton />
      {showPrivacyPolicy && (
        <PrivacyPolicyPopup content={privacyPolicyContent} onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default App;
