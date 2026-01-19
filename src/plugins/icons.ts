import type { App } from 'vue';
import { Moon, Sun, SunMoon, Gem, Terminal, Menu, X, Download, ChevronUp } from 'lucide-vue-next';

export default {
    install(app: App) {
        app.component('Moon', Moon);
        app.component('Sun', Sun);
        app.component('SunMoon', SunMoon);
        app.component('Gem', Gem);
        app.component('Menu', Menu);
        app.component('CloseIcon', X);
        app.component('ChevronUp', ChevronUp);
        app.component('Download', Download);
        app.component('TerminalIcon', Terminal);
    },
};
