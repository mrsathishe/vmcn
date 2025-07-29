import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import EnterpriseNetworking from "./components/EnterpriseNetworking";
import IoT from "./components/IoT";
import HomeNetwork from "./components/HomeNetwork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowHeader(window.scrollY > heroBottom - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      {showHeader && <Header />}
      {showHeader && <Navigation />}
      <main>
        <Hero />
        <EnterpriseNetworking />
        <IoT />
        <HomeNetwork />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
