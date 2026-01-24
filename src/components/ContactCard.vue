<script setup>
    defineProps({
        title: String,
    });
</script>

<template>
    <div
        class="group flex items-center gap-5 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:shadow-lg"
    >
        <div
            class="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-100 dark:bg-emerald-800/40 text-emerald-600 dark:text-emerald-400 transition-transform duration-300 group-hover:scale-110"
        >
            <slot name="icon" />
        </div>

        <div class="space-y-1">
            <h6
                class="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
            >
                {{ title }}
            </h6>
            <p class="font-medium text-neutral-800 dark:text-neutral-200">
                <slot />
            </p>
        </div>
    </div>
</template>
