<script lang="ts">
    import { defineComponent } from 'vue';
    import { useThemeStore } from '../hooks/useThemeStore';

    export default defineComponent({
        name: 'ToggleMode',

        setup() {
            const { isDark, toggleTheme } = useThemeStore();
            return { isDark, toggleTheme };
        },
    });
</script>

<template>
    <Button @click="() => toggleTheme()" size="small" severity="secondary" variant="outlined">
        <Sun v-if="isDark" :size="22" />
        <Moon v-else :size="22" />
    </Button>
</template>

<style scoped></style>
