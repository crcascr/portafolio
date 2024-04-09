// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa los archivos de traducción
import translationEN from './locales/en.json';
import translationES from './locales/es.json';

// Configuración de i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      es: {
        translation: translationES,
      },
    },
    lng: 'es', // Idioma por defecto
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
