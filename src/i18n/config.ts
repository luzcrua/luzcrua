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
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

// Adiciona um listener para mudanças de idioma
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('preferredLanguage', lng);
  console.log('Idioma alterado para:', lng);
});

export default i18n;