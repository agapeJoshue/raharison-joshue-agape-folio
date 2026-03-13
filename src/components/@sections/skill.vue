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
    <section id="skill" :class="['relative py-20', 'bg-white', 'dark:bg-black']">
        <div class="mx-auto max-w-7xl px-4 sm:px-6">
            <div class="text-center mb-8 space-y-4">
                <h1
                    :class="[
                        'text-xl md:text-2xl font-bold tracking-[0.35em] uppercase',
                        'text-orange-600',
                        'dark:text-yellow-400',
                    ]"
                    v-animateonscroll="{
                        enterClass: 'animate-enter fade-in-10 animate-duration-1000',
                    }"
                >
                    {{ t('skill.title') }}
                </h1>

                <p
                    :class="[
                        'text-base md:text-lg max-w-2xl mx-auto leading-relaxed',
                        'text-zinc-600',
                        'dark:text-zinc-300',
                    ]"
                    v-animateonscroll="{
                        enterClass: 'animate-enter fade-in-10 animate-duration-1000',
                    }"
                >
                    {{ t('skill.subtitle') }}
                </p>

                <div
                    :class="[
                        'mx-auto h-0.5 w-100 bg-linear-to-r from-transparent to-transparent',
                        'via-orange-500',
                        'dark:via-yellow-500',
                    ]"
                    v-animateonscroll="{
                        enterClass: 'animate-enter fade-in-10 animate-duration-1000',
                    }"
                />
            </div>

            <Vue3Marquee
                class="mt-15"
                gradient
                pauseOnHover
                :gradientColor="isDark ? [0, 0, 0] : [255, 255, 255]"
                v-animateonscroll="{
                    enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-1000',
                }"
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
                v-animateonscroll="{
                    enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000',
                }"
            >
                <SwiperSlide v-for="(skill, index) in skills" :key="index" class="px-1">
                    <article :class="['group relative px-0 md:px-10 py-5 mb-15']">
                        <h3
                            :class="[
                                'mb-8 text-center text-2xl md:text-3xl font-semibold',
                                'text-black',
                                'dark:text-white',
                            ]"
                        >
                            {{ t(skill.title) }}
                        </h3>

                        <p
                            :class="[
                                'text-base md:text-lg font-medium pb-20 text-center max-w-200 mx-auto',
                                'text-neutral-600',
                                'dark:text-neutral-300',
                            ]"
                        >
                            {{ t(skill.subtitle) }}
                        </p>

                        <div
                            :class="[
                                'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 sm:gap-x-10 md:gap-x-12 gap-y-8',
                            ]"
                        >
                            <div v-for="tech in skill.techs" :key="tech.name" class="space-y-2">
                                <div :class="['flex justify-between items-center']">
                                    <span
                                        :class="[
                                            'text-sm font-semibold',
                                            'text-gray-700',
                                            'dark:text-gray-200',
                                        ]"
                                    >
                                        {{ tech.name }}
                                    </span>

                                    <span
                                        :class="[
                                            'text-xs font-semibold',
                                            'text-gray-500',
                                            'dark:text-gray-300',
                                        ]"
                                    >
                                        {{ tech.value }}%
                                    </span>
                                </div>

                                <ProgressBar
                                    :value="tech.value"
                                    class="h-3.75 rounded-2xl custom-progress"
                                />
                            </div>
                        </div>
                    </article>
                </SwiperSlide>
            </Swiper>

            <div class="mt-20">
                <h3
                    :class="[
                        'text-xl text-center mb-10 font-bold tracking-[0.35em] uppercase',
                        'text-orange-600',
                        'dark:text-yellow-400',
                    ]"
                    v-animateonscroll="{
                        enterClass:
                            'animate-enter fade-in-10 zoom-in-50 slide-in-from-t-20 animate-duration-1000',
                    }"
                >
                    {{ t('skill.soft_skill') }}
                </h3>

                <div class="flex flex-wrap justify-center gap-4">
                    <span
                        v-for="(skill, index) in softSkill"
                        :key="index"
                        :class="[
                            'inline-flex items-center rounded-full px-5 py-2 text-sm font-medium border transition-all duration-300 hover:scale-105',
                            'bg-gray-50 text-gray-700 border-gray-200 hover:bg-orange-600 hover:text-white hover:border-orange-600',
                            'dark:bg-zinc-900 dark:text-gray-200 dark:border-zinc-800 dark:hover:bg-yellow-600 dark:hover:text-white dark:hover:border-yellow-600',
                        ]"
                        v-animateonscroll="{
                            enterClass:
                                'animate-enter fade-in-10 zoom-in-50 slide-in-from-t-20 animate-duration-1000',
                        }"
                    >
                        {{ t(skill) }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .custom-progress {
        --p-progressbar-value-background: oklch(70.5% 0.213 47.604);
    }
    .dark .custom-progress {
        --p-progressbar-value-background: oklch(85.2% 0.199 91.936);
    }
</style>
