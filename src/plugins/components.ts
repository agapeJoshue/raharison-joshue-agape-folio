import type { App } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import ToggleMode from '@/components/toggleMode.vue';
import ToggleLocale from '@/components/toggleLocale.vue';
import HeaderSection from '@/components/@sections/header.vue';
import HeroSection from '@/components/@sections/hero.vue';
import AboutSection from '@/components/@sections/about.vue';
import WorkProcessSection from '@/components/@sections/workProcess.vue';
import ProjectSection from '@/components/@sections/project.vue';
import ExperienceSection from '@/components/@sections/experience.vue';

export default {
    install(app: App) {
        app.component('Swiper', Swiper);
        app.component('SwiperSlide', SwiperSlide);
        app.component('ToggleMode', ToggleMode);
        app.component('ToggleLocale', ToggleLocale);
        app.component('HeaderSection', HeaderSection);
        app.component('HeroSection', HeroSection);
        app.component('AboutSection', AboutSection);
        app.component('WorkProcessSection', WorkProcessSection);
        app.component('ProjectSection', ProjectSection);
        app.component('ExperienceSection', ExperienceSection);
    },
};
