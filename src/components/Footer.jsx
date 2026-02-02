import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { personalInfo, footer } from '../data/mock';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const { language } = useLanguage();
  const info = personalInfo[language];
  const footerContent = footer[language];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column">
            <h3 className="footer-name">{info.name}</h3>
            <p className="footer-title">{info.title}</p>
            <p className="footer-location">{info.location}</p>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">
              {language === 'en' ? 'Contact' : 'Contacto'}
            </h4>
            <div className="footer-links">
              <a href={`mailto:${info.email}`} className="footer-link">
                <Mail size={18} />
                <span>{info.email}</span>
              </a>
              <a href={`tel:${info.phone}`} className="footer-link">
                <Phone size={18} />
                <span>{info.phone}</span>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h4 className="footer-heading">
              {language === 'en' ? 'Connect' : 'Redes'}
            </h4>
            <div className="footer-social">
              <a
                href={info.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={info.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {info.name}. {footerContent.rights}
          </p>
          <p className="footer-credit">{footerContent.designed}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;