import { ref, watch } from 'vue';

const isDark = ref(false);

function toggleTheme(option?: 'light' | 'dark' | 'system') {
    if (option === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        isDark.value = prefersDark;
    } else if (option) {
        isDark.value = option === 'dark';
    } else {
        isDark.value = !isDark.value;
    }

    document.documentElement.classList.toggle('my-app-dark', isDark.value);
    document.body.classList.toggle('dark', isDark.value);

    localStorage.setItem('theme', isDark.value ? 'dark' : 'light');
}

function initializeTheme() {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark') {
        isDark.value = true;
    } else if (storedTheme === 'light') {
        isDark.value = false;
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        isDark.value = prefersDark;
    }

    document.documentElement.classList.toggle('my-app-dark', isDark.value);
    document.body.classList.toggle('dark', isDark.value);
}

initializeTheme();

watch(isDark, (val) => {
    localStorage.setItem('theme', val ? 'dark' : 'light');
});

export function useThemeStore() {
    return { isDark, toggleTheme };
}
