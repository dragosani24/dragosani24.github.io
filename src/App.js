import "./App.css";
import "./styles/portfolio.css";
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyHireMe from './components/WhyHireMe';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <WhyHireMe />
          <Timeline />
          <Skills />
          <Education />
        </main>
        <Footer />
        <Toaster />
      </div>
    </LanguageProvider>
  );
}

export default App;
