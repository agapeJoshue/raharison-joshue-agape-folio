import type { App } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import ToastService from 'primevue/toastservice';

export default {
    install(app: App) {
        app.use(PrimeVue, {
            theme: {
                preset: Aura,
                options: {
                    darkModeSelector: '.my-app-dark',
                    cssLayer: {
                        name: 'primevue',
                        order: 'theme, base, primevue',
                    },
                },
            },
        });
        app.use(ToastService);
    },
};
