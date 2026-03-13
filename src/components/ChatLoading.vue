<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ChatLoading',
        setup() {
            return {};
        },
    });
</script>

<template>
    <div :class="['w-full flex items-end gap-4 justify-start']">
        <div
            :class="[
                'w-8 h-8 flex items-center justify-center rounded-full border overflow-hidden',
                'border-orange-500 bg-orange-500 text-white',
                'dark:border-yellow-500 dark:bg-yellow-600',
            ]"
        >
            <Bot :size="18" />
        </div>

        <div class="max-w-[75%] space-y-1">
            <div
                :class="[
                    'relative h-7 flex items-center px-4 rounded-lg group text-white',
                    'bg-orange-500',
                    'dark:bg-yellow-600',
                ]"
            >
                <span
                    :class="[
                        'w-3 h-3 absolute rotate-45 bottom-2 -left-1.5 hidden group-last:block',
                        'bg-orange-500',
                        'dark:bg-yellow-600',
                    ]"
                />
                <div class="loader"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .loader {
        width: 30px;
        aspect-ratio: 2;
        --_g: no-repeat radial-gradient(circle closest-side, #fff 90%, #0000);
        background:
            var(--_g) 0% 50%,
            var(--_g) 50% 50%,
            var(--_g) 100% 50%;
        background-size: calc(100% / 3) 50%;
        animation: l3 1s infinite linear;
    }
    @keyframes l3 {
        20% {
            background-position:
                0% 0%,
                50% 50%,
                100% 50%;
        }
        40% {
            background-position:
                0% 100%,
                50% 0%,
                100% 50%;
        }
        60% {
            background-position:
                0% 50%,
                50% 100%,
                100% 0%;
        }
        80% {
            background-position:
                0% 50%,
                50% 50%,
                100% 100%;
        }
    }
</style>
