import type { App } from 'vue';
import ToggleMode from '@/components/toggleMode.vue';
import ToggleLocale from '@/components/toggleLocale.vue';
import HeaderSection from '@/components/@sections/header.vue';
import HeroSection from '@/components/@sections/hero.vue';
import AboutSection from '@/components/@sections/about.vue';
import WorkProcessSection from '@/components/@sections/workProcess.vue';

export default {
    install(app: App) {
        app.component('ToggleMode', ToggleMode);
        app.component('ToggleLocale', ToggleLocale);
        app.component('HeaderSection', HeaderSection);
        app.component('HeroSection', HeroSection);
        app.component('AboutSection', AboutSection);
        app.component('WorkProcessSection', WorkProcessSection);
    },
};
