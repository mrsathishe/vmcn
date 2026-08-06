import React, { useState } from "react";
import LegalPopup from "./components/LegalPopup";
import { privacyPolicyContent } from "./privacyPolicyContent";
import { termsContent } from "./termsContent";
import Navigation from "./components/layout/Navigation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import EnterpriseNetworking from "./components/services/EnterpriseNetworking";
import IoT from "./components/services/IoT";
import HomeNetwork from "./components/services/HomeNetwork";
import WebsiteDevelopment from "./components/services/WebsiteDevelopment";
import CCTVSecurity from "./components/services/CCTVSecurity";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import BrochureButton from "./components/BrochureButton";
import "./styles/main.scss";

function App() {
  // Only one legal document is ever on screen, so a single value covers both.
  const [openLegalDoc, setOpenLegalDoc] = useState(null);

  const legalDocs = {
    privacy: privacyPolicyContent,
    terms: termsContent,
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
        <CCTVSecurity />
        <Contact />
      </main>
      <Footer
        onPrivacyPolicyClick={() => setOpenLegalDoc("privacy")}
        onTermsClick={() => setOpenLegalDoc("terms")}
      />
      <BrochureButton />
      {openLegalDoc && (
        <LegalPopup
          content={legalDocs[openLegalDoc]}
          onClose={() => setOpenLegalDoc(null)}
        />
      )}
    </div>
  );
}

export default App;
