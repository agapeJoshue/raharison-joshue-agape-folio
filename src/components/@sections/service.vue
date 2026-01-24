<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import { useI18n } from 'vue-i18n';

    interface Role {
        id: number;
        title: string;
        description: string;
    }

    export default defineComponent({
        name: 'ServiceSection',
        setup() {
            const { t } = useI18n();
            const rolesData: Role[] = [
                {
                    id: 1,
                    title: 'service.full_stack.title',
                    description: 'service.full_stack.description',
                },
                {
                    id: 3,
                    title: 'service.designer.title',
                    description: 'service.designer.description',
                },
                {
                    id: 4,
                    title: 'service.ops.title',
                    description: 'service.ops.description',
                },
            ];

            const hoveredIndex = ref<number | null>(null);

            const setMouseHover = (index: number | null) => {
                hoveredIndex.value = index;
            };

            return { t, rolesData, hoveredIndex, setMouseHover };
        },
    });
</script>

<template>
    <section id="service" class="w-full py-20 bg-gray-100 dark:bg-gray-900/70">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid xl:grid-cols-2 gap-10 lg:gap-20 items-center">
                <div class="flex flex-col justify-center text-center md:text-left">
                    <p
                        class="text-emerald-600 dark:text-emerald-400 text-xl md:text-[22px] lg:text-2xl xl:text-3xl font-semibold uppercase tracking-wide mb-6 md:mb-8 lg:mb-10 xl:mb-16"
                    >
                        {{ t('service.what_i_do') }}
                    </p>
                    <div
                        class="space-y-4 font-medium text-neutral-600 dark:text-neutral-400 text-base"
                    >
                        <p>{{ t('service.response.r1') }}</p>
                        <p>{{ t('service.response.r2') }}</p>
                    </div>

                    <Button
                        :label="t('service.say_hello')"
                        class="w-fit mt-6 md:mt-10 font-semibold rounded-lg px-6 py-3 text-sm mx-auto md:mx-0 sm:text-base transition-colors duration-300"
                    />
                </div>

                <div class="grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-5 xl:grid-cols-1">
                    <div
                        v-for="(role, index) in rolesData"
                        :key="role.id"
                        @mouseenter="setMouseHover(index)"
                        @mouseleave="setMouseHover(null)"
                        class="relative p-6 border-2 border-emerald-50 dark:border-emerald-950 dark:hover:border-emerald-600 bg-white/30 dark:bg-gray-950/30 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                        <div
                            class="absolute left-0 top-0 h-full bg-emerald-500 dark:bg-emerald-600 transition-all duration-300"
                            :class="hoveredIndex === index ? 'w-1' : 'w-0'"
                        ></div>

                        <div class="ml-4">
                            <h3
                                class="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2"
                            >
                                {{ t(role.title) }}
                            </h3>
                            <p
                                class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed"
                            >
                                {{ t(role.description) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
