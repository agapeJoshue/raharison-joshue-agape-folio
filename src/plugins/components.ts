import type { App } from 'vue';
import LongText from '@/components/@sections/LongText.vue';
import ToggleMode from '@/components/toggleMode.vue';
import ToggleLocale from '@/components/toggleLocale.vue';
import HeaderSection from '@/components/@sections/header.vue';

export default {
    install(app: App) {
        app.component('LongText', LongText);
        app.component('ToggleMode', ToggleMode);
        app.component('ToggleLocale', ToggleLocale);
        app.component('HeaderSection', HeaderSection);
    },
};
