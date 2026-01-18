import { createI18n } from 'vue-i18n';
import en from './EN/en.json';
import fr from './FR/fr.json';
import mg from './MG/mg.json';

export type Locale = 'fr' | 'en' | 'mg';

const DEFAULT_LOCALE: Locale = 'fr';

const getSavedLocale = (): Locale => {
    const saved = localStorage.getItem('locale');
    return saved === 'fr' || saved === 'en' || saved === 'mg' ? saved : DEFAULT_LOCALE;
};

const i18n = createI18n({
    legacy: false,
    locale: getSavedLocale(),
    fallbackLocale: 'en',
    messages: { fr, en, mg },
});

export default i18n;
