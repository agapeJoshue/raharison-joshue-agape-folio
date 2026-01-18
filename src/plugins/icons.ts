import type { App } from 'vue';
import { Moon, Sun, SunMoon } from 'lucide-vue-next';

export default {
    install(app: App) {
        app.component('Moon', Moon);
        app.component('Sun', Sun);
        app.component('SunMoon', SunMoon);
    },
};
