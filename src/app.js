import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";
import QuemSomosSection from "./components/QuemSomosSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <QuemSomosSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}

export default App;
