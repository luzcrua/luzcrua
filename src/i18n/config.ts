import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './translations';

// Recupera o idioma preferido do localStorage ou usa 'pt' como padrão
const savedLanguage = localStorage.getItem('preferredLanguage') || 'pt';

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;