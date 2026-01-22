import type { App } from 'vue';
import {
    Moon,
    Sun,
    SunMoon,
    Gem,
    Terminal,
    Menu,
    X,
    Download,
    ChevronUp,
    CircleCheckBig,
    CalendarFold,
    CalendarRange,
    ChartSpline,
    CodeXml,
    Server,
    ArrowRight,
} from 'lucide-vue-next';

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
        app.component('CircleCheckBig', CircleCheckBig);
        app.component('CalendarFold', CalendarFold);
        app.component('CalendarRange', CalendarRange);
        app.component('ChartSpline', ChartSpline);
        app.component('CodeXml', CodeXml);
        app.component('Server', Server);
        app.component('ArrowRight', ArrowRight);
    },
};
