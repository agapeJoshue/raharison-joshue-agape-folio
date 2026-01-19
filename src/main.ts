import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/routes';
import i18n from '@/i18n';
import '@/styles/style.css';

import PrimeVueConfigPlugin from '@/plugins/config';
import iconsPlugin from '@/plugins/icons';
import ComponentsPlugin from '@/plugins/components';
import PrimeVueComponentsPlugin from '@/plugins/primevue';
import DirectivesPlugin from '@/plugins/directives';

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.classList.add('my-app-dark');
} else if (savedTheme === 'light') {
    document.documentElement.classList.remove('my-app-dark');
} else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.documentElement.classList.add('my-app-dark');
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

const app = createApp(App);
app.use(router);
app.use(i18n);

app.use(iconsPlugin);
app.use(DirectivesPlugin);
app.use(ComponentsPlugin);
app.use(PrimeVueConfigPlugin);
app.use(PrimeVueComponentsPlugin);

app.mount('#app');
