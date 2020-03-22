import i18n from 'i18n-js';
import * as RNLocalize from "react-native-localize";

// All our languages
import en from './locales/en.json';
import fr from './locales/fr.json'
// Default
i18n.defaultLocale = 'en';
i18n.missingBehaviour = 'guess'; // It will convert HOME_noteTitle to "HOME note title" if the value of HOME_noteTitle doesn't exist in any of the translation files.
// Find the best one for the user
i18n.locale = RNLocalize.findBestAvailableLanguage(['en']).languageTag;
i18n.fallbacks = true;
i18n.translations = { en,fr };

export default i18n;