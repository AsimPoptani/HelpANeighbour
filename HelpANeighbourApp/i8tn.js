import i18n from 'i18n-js';
import * as RNLocalize from "react-native-localize";

// All our languages
import en from './locales/en.json';

// Default
i18n.defaultLocale = 'en';
// Find the best one for the user
i18n.locale = RNLocalize.findBestAvailableLanguage(['en']).languageTag;
i18n.fallbacks = true;
i18n.translations = { en };

export default i18n;