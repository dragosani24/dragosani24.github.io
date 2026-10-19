import { useLanguage } from '../context/LanguageContext';
import { personalInfo, keywords } from '../data/mock';
import { ArrowDown, MapPin, Mail, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const { language } = useLanguage();
  const info = personalInfo[language];
  const keywordsList = keywords[language];

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
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

        {/* Quick Contact & Location Badges */}
        <div className="hero-meta-badges">
          <span className="meta-badge">
            <MapPin size={16} />
            <span>{info.location}</span>
          </span>
          <a href={`mailto:${info.email}`} className="meta-badge meta-link">
            <Mail size={16} />
            <span>{info.email}</span>
          </a>
          <a
            href={info.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="meta-badge meta-link"
          >
            <Linkedin size={16} />
            <span>LinkedIn</span>
          </a>
          <a
            href={info.github}
            target="_blank"
            rel="noopener noreferrer"
            className="meta-badge meta-link"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>

        <p className="hero-description">
          {info.summary}
        </p>

        <div className="hero-cta-group">
          <a
            href="#why-me"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#why-me');
            }}
          >
            {language === 'en' ? 'Why Hire Me' : 'Por Qué Contratarme'}
          </a>
          <a
            href="#journey"
            className="btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#journey');
            }}
          >
            {language === 'en' ? 'Career Journey' : 'Ver Trayectoria'}
          </a>
          <a
            href="#skills"
            className="btn-secondary"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#skills');
            }}
          >
            {language === 'en' ? 'Technical Skills' : 'Habilidades Técnicas'}
          </a>
          <a
            href={`mailto:${info.email}`}
            className="btn-secondary"
          >
            {language === 'en' ? 'Get In Touch' : 'Contactar'}
          </a>
        </div>

        <button
          className="scroll-indicator"
          onClick={() => scrollToSection('#why-me')}
          aria-label="Scroll down"
        >
          <ArrowDown size={24} className="scroll-arrow" />
        </button>
      </div>
    </section>
  );
};

export default Hero;