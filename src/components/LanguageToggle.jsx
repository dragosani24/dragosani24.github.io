import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="language-toggle"
      aria-label="Toggle language"
    >
      <Globe size={20} />
      <span className="language-text">{language.toUpperCase()}</span>
    </button>
  );
};

export default LanguageToggle;