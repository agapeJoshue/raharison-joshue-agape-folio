import type { App } from 'vue';
import Tooltip from 'primevue/tooltip';
import AnimateOnScroll from 'primevue/animateonscroll';

export default {
    install(app: App) {
        app.directive('tooltip', Tooltip);
        app.directive('animateonscroll', AnimateOnScroll);
    },
};
