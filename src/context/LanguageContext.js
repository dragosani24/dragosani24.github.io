import { createContext, useContext, useState, useEffect, useMemo } from 'react';

const LANGUAGE_CONTEXT_KEY = 'portfolio-language';
const SUPPORTED_LANGUAGES = ['es', 'en'];
const DEFAULT_LANGUAGE = 'es';

// localStorage puede lanzar SecurityError (Safari privado, storage bloqueado)
const readStoredLanguage = () => {
  try {
    const saved = localStorage.getItem(LANGUAGE_CONTEXT_KEY);
    return SUPPORTED_LANGUAGES.includes(saved) ? saved : null;
  } catch {
    return null;
  }
};

const storeLanguage = (value) => {
  try {
    localStorage.setItem(LANGUAGE_CONTEXT_KEY, value);
  } catch {
    /* storage no disponible: se ignora */
  }
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => readStoredLanguage() ?? DEFAULT_LANGUAGE);

  useEffect(() => {
    storeLanguage(language);
    // Mantiene el atributo lang del documento sincronizado con el idioma activo
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  // Objeto estable para no re-renderizar a los consumidores en cada render del provider
  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;