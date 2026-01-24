import type { App } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import ToggleMode from '@/components/toggleMode.vue';
import ToggleLocale from '@/components/toggleLocale.vue';
import HeaderSection from '@/components/@sections/header.vue';
import HeroSection from '@/components/@sections/hero.vue';
import AboutSection from '@/components/@sections/about.vue';
import WorkProcessSection from '@/components/@sections/workProcess.vue';
import ExperienceSection from '@/components/@sections/experience.vue';
import ProjectSection from '@/components/@sections/project.vue';
import ServiceSection from '@/components/@sections/service.vue';
import SkillSection from '@/components/@sections/skill.vue';
import ContactSection from '@/components/@sections/contact.vue';
import FooterSection from '@/components/@sections/footer.vue';
import ContactCard from '@/components/ContactCard.vue';
import SocialIcon from '@/components/SocialIcon.vue';

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
        app.component('ExperienceSection', ExperienceSection);
        app.component('ProjectSection', ProjectSection);
        app.component('ServiceSection', ServiceSection);
        app.component('SkillSection', SkillSection);
        app.component('ContactSection', ContactSection);
        app.component('ContactCard', ContactCard);
        app.component('FooterSection', FooterSection);
        app.component('SocialIcon', SocialIcon);
    },
};
