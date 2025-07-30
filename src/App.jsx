import React from "react";
import Navigation from "./components/layout/Navigation";
import Hero from "./components/sections/Hero";
import EnterpriseNetworking from "./components/services/EnterpriseNetworking";
import IoT from "./components/services/IoT";
import HomeNetwork from "./components/services/HomeNetwork";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <Navigation />
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
