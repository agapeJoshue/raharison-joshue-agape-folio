import type { App } from 'vue';
import ToggleMode from '@/components/toggleMode.vue';
import ToggleLocale from '@/components/toggleLocale.vue';

export default {
    install(app: App) {
        app.component('ToggleMode', ToggleMode);
        app.component('ToggleLocale', ToggleLocale);
    },
};
