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
                <div className="flex gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div
                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                        style="animation-delay: 0.2s"
                    ></div>
                    <div
                        className="w-2 h-2 bg-white rounded-full animate-bounce"
                        style="animation-delay: 0.4s"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>
