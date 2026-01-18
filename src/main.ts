import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { i18n } from './i18n';
import App from './App.vue';
import './styles/style.css';

import Button from 'primevue/button';
import Select from 'primevue/select';
import Rating from 'primevue/rating';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Fieldset from 'primevue/fieldset';
import Panel from 'primevue/panel';
import Drawer from 'primevue/drawer';
import Tooltip from 'primevue/tooltip';
import ToastService from 'primevue/toastservice';
import Carousel from 'primevue/carousel';
import Galleria from 'primevue/galleria';
import Image from 'primevue/image';
import Chip from 'primevue/chip';
import ProgressBar from 'primevue/progressbar';

import AnimateOnScroll from 'primevue/animateonscroll';

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.documentElement.classList.add('my-app-dark');
} else if (savedTheme === 'light') {
    document.documentElement.classList.remove('my-app-dark');
} else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.documentElement.classList.add('my-app-dark');
    }
}

const app = createApp(App);
app.use(i18n);

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

app.component('Button', Button);
app.component('Select', Select);
app.component('Rating', Rating);
app.component('InputText', InputText);
app.component('Textarea', Textarea);
app.component('ToggleSwitch', ToggleSwitch);
app.component('Timeline', Timeline);
app.component('Card', Card);
app.component('Divider', Divider);
app.component('Fieldset', Fieldset);
app.component('Panel', Panel);
app.component('Drawer', Drawer);
app.component('Carousel', Carousel);
app.component('Galleria', Galleria);
app.component('Image', Image);
app.component('Chip', Chip);
app.component('ProgressBar', ProgressBar);

app.directive('tooltip', Tooltip);
app.directive('animateonscroll', AnimateOnScroll);

app.mount('#app');
