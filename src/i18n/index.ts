import { createI18n } from 'vue-i18n';
import type { LocaleMessageDictionary } from 'vue-i18n';
import en from './EN/en.json';
import fr from './FR/fr.json';
import ml from './ML/ml.json';

type MessageSchema = typeof en;

const messages: Record<string, LocaleMessageDictionary<MessageSchema>> = { en, fr, ml };

const userLocale = navigator.language?.split('-')[0] ?? 'en';

export const i18n = createI18n({
    legacy: false,
    locale: userLocale in messages ? userLocale : 'en',
    fallbackLocale: 'en',
    messages,
});
