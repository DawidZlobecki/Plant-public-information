import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import 'intl-pluralrules';

import enTranslation from './en.json';
import plTranslation from './pl.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  pl: {
    translation: plTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pl',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
