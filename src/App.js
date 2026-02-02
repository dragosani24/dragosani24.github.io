import React from "react";
import "./App.css";
import "./styles/portfolio.css";
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyHireMe from './components/WhyHireMe';
import Timeline from './components/Timeline';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <div id="about"></div>
          <WhyHireMe />
          <Timeline />
          <ContactForm />
        </main>
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

export default App;
