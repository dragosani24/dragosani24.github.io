import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, keywords } from '../data/mock';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const { language } = useLanguage();
  const info = personalInfo[language];
  const keywordsList = keywords[language];

  const scrollToNext = () => {
    const nextSection = document.querySelector('#about');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content-wrapper">
        <div className="hero-keywords">
          {keywordsList.map((keyword, index) => (
            <span key={index} className="keyword-badge">
              {keyword}
            </span>
          ))}
        </div>

        <h1 className="hero-title">
          {info.name}
        </h1>

        <p className="hero-subtitle">
          {info.title}
        </p>

        <p className="hero-description">
          {info.summary}
        </p>

        <div className="hero-cta-group">
          <a href="#why-me" className="btn-primary" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#why-me')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            {language === 'en' ? 'Why Hire Me' : 'Por Qué Contratarme'}
          </a>
        </div>

        <button className="scroll-indicator" onClick={scrollToNext} aria-label="Scroll down">
          <ArrowDown size={24} className="scroll-arrow" />
        </button>
      </div>
    </section>
  );
};

export default Hero;