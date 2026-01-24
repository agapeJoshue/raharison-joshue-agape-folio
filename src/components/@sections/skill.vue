<script lang="ts">
    import { defineComponent } from 'vue';
    import { Pagination } from 'swiper/modules';
    import { useThemeStore } from '../../hooks/useThemeStore';
    import { useI18n } from 'vue-i18n';
    import { skills, softSkill, frameworks } from '../../data/skill.data';

    export default defineComponent({
        name: 'SkillSection',

        setup() {
            const { t } = useI18n();
            const { isDark } = useThemeStore();

            return { t, isDark, Pagination, skills, softSkill, frameworks };
        },
    });
</script>

<template>
    <section id="skill" class="relative bg-white dark:bg-black py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6">
            <div class="text-center mb-8 space-y-4">
                <h2
                    class="text-2xl md:text-3xl font-semibold tracking-widest uppercase text-gray-900 dark:text-gray-100"
                >
                    {{ t('skill.title') }}
                </h2>

                <p
                    class="max-w-2xl mx-auto text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed"
                >
                    {{ t('skill.subtitle') }}
                </p>

                <div
                    class="mx-auto h-1 w-24 bg-linear-to-r from-transparent via-emerald-500 to-transparent"
                />
            </div>

            <Vue3Marquee
                class="mt-15"
                gradient
                pauseOnHover
                :gradientColor="isDark ? [0, 0, 0] : [255, 255, 255]"
            >
                <Chip
                    v-for="(framework, i) in frameworks"
                    :key="i"
                    :label="framework.name"
                    :image="framework.icon"
                    class="mr-5 pl-4 pr-5 overflow-hidden rounded-4xl font-medium"
                />
            </Vue3Marquee>

            <Swiper
                :modules="[Pagination]"
                :grabCursor="true"
                :pagination="{ clickable: true }"
                class="pb-24 mt-20"
            >
                <SwiperSlide v-for="(skill, index) in skills" :key="index" class="px-1">
                    <article class="group relative px-0 md:px-10 py-5 mb-15">
                        <h3
                            class="mb-5 text-center text-2xl font-semibold text-gray-900 dark:text-gray-100"
                        >
                            {{ t(skill.title) }}
                        </h3>

                        <p
                            class="text-neutral-600 dark:text-neutral-400 font-medium pb-12 text-center max-w-200 mx-auto"
                        >
                            {{ t(skill.subtitle) }}
                        </p>

                        <div
                            class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 sm:gap-x-10 md:gap-x-12 gap-y-8"
                        >
                            <div v-for="tech in skill.techs" :key="tech.name" class="space-y-2">
                                <div class="flex justify-between items-center">
                                    <span
                                        class="text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        {{ tech.name }}
                                    </span>

                                    <span class="text-xs font-semibold text-gray-400">
                                        {{ tech.value }}%
                                    </span>
                                </div>

                                <ProgressBar :value="tech.value" class="h-3.75 rounded-2xl" />
                            </div>
                        </div>
                    </article>
                </SwiperSlide>
            </Swiper>

            <div class="mt-20">
                <h3
                    class="text-center text-xl md:text-2xl font-semibold mb-10 text-gray-900 dark:text-gray-100"
                >
                    {{ t('skill.soft_skill') }}
                </h3>

                <div class="flex flex-wrap justify-center gap-4">
                    <span
                        v-for="(skill, index) in softSkill"
                        :key="index"
                        class="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium bg-gray-50 dark:bg-zinc-900 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-800 transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:scale-105"
                    >
                        {{ t(skill) }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>
