<script setup>
    defineProps({
        title: String,
    });
</script>

<template>
    <div
        :class="[
            'group flex items-center gap-5 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer',
            'border-neutral-200 hover:border-orange-400',
            'dark:border-neutral-700 dark:hover:border-yellow-400',
        ]"
    >
        <div
            :class="[
                'w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110',
                'bg-orange-500/10 text-orange-600',
                'dark:bg-yellow-400/15 dark:text-yellow-400',
            ]"
        >
            <slot name="icon" />
        </div>

        <div class="space-y-1">
            <h6
                :class="[
                    'text-xs font-semibold uppercase tracking-wider',
                    'text-neutral-500',
                    'dark:text-neutral-400',
                ]"
            >
                {{ title }}
            </h6>
            <div :class="['font-medium', 'text-black', 'dark:text-white']">
                <slot />
            </div>
        </div>
    </div>
</template>
