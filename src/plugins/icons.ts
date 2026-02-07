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
    MapPin,
    Mail,
    Phone,
    SendHorizonal,
    Facebook,
    Linkedin,
    Gitlab,
    Github,
    Instagram,
    Euro,
    Bot,
    Sparkles,
    UserRound,
    Check,
    CheckCheck,
} from 'lucide-vue-next';

export default {
    install(app: App) {
        app.component('Moon', Moon);
        app.component('Sun', Sun);
        app.component('SunMoon', SunMoon);
        app.component('Gem', Gem);
        app.component('Menu', Menu);
        app.component('Check', Check);
        app.component('CheckCheck', CheckCheck);
        app.component('UserRound', UserRound);
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
        app.component('MapPin', MapPin);
        app.component('Mail', Mail);
        app.component('Phone', Phone);
        app.component('SendIcon', SendHorizonal);
        app.component('Facebook', Facebook);
        app.component('Linkedin', Linkedin);
        app.component('Gitlab', Gitlab);
        app.component('Github', Github);
        app.component('Instagram', Instagram);
        app.component('Sparkles', Sparkles);
        app.component('Euro', Euro);
        app.component('Bot', Bot);
    },
};
