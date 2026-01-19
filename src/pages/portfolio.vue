<script lang="ts">
    import { defineComponent } from 'vue';
    import { useI18n } from 'vue-i18n';

    export default defineComponent({
        setup() {
            const { t } = useI18n();
            return { t };
        },
    });
</script>

<template>
    <main class="relative w-screen min-h-screen">
        <ToggleMode />
    </main>
</template>
