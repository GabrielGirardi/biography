import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { en, ptBR } from '../locales';

type Language = 'en' | 'pt-BR';
type TranslationKey = keyof typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage ||
      (navigator.language.startsWith('pt') ? 'pt-BR' : 'en');
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR';
  }, [language]);

  const t = (key: TranslationKey): string => {
    if (language === 'en') {
      return en[key];
    } else {
      return ptBR[key] || en[key];
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
