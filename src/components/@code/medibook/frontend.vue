<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'MediBookFrontend',
        setup() {
            return {};
        },
    });
</script>

<template>
    <div
        class="relative grid grid-cols-[15rem_auto] w-full h-120 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-zinc-100 dark:bg-zinc-900 overflow-hidden"
    >
        <div
            class="px-4 py-2 border-r border-zinc-200 dark:border-zinc-700 sticky top-0 overflow-x-hidden overflow-y-auto"
        ></div>
        <div class="px-4 py-2 min-w-150 overflow-auto">
            <p>lorem999</p>
        </div>
    </div>
</template>
