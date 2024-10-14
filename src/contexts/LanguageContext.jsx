import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage(prevLang => {
      switch(prevLang) {
        case 'pt': return 'en';
        case 'en': return 'sv';
        case 'sv': return 'pt';
        default: return 'pt';
      }
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);