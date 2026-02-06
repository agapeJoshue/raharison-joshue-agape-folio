<script lang="ts">
    import { defineComponent } from 'vue';
    import { useThemeStore } from '../../hooks/useThemeStore';
    import { useI18n } from 'vue-i18n';
    import { scrollToSection } from '../../services/utilsService';
    import { projects } from '../../data/project.data';

    export default defineComponent({
        name: 'ProjectSection',

        setup() {
            const { t } = useI18n();
            const { isDark } = useThemeStore();

            return { t, isDark, projects, scrollToSection };
        },
    });
</script>

<template>
    <section
        id="project"
        :class="['w-full backdrop-blur-3xl pt-15 lg:pt-20', 'bg-white/90', 'dark:bg-black/90']"
    >
        <div class="max-w-7xl mx-auto px-4 mb-20">
            <div class="text-center space-y-6 mb-14">
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
                    {{ t('project.title') }}
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
                    {{ t('project.subtitle') }}
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

            <div
                :class="[
                    'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:px-20 md:px-0 lg:px-20 xl:px-0',
                ]"
            >
                <article
                    v-for="project in projects"
                    :key="project.name"
                    :class="[
                        'group relative rounded-2xl border aspect-auto shadow-sm hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1 overflow-hidden',
                        'bg-white border-white',
                        'dark:bg-gray-950 dark:border-zinc-700',
                    ]"
                    v-animateonscroll="{
                        enterClass: 'animate-enter fade-in-10 zoom-in-50 animate-duration-1000',
                    }"
                >
                    <div :class="['relative overflow-hidden']">
                        <img
                            :src="isDark ? project.images.dark : project.images.light"
                            :alt="project.name"
                            :class="[
                                'h-52 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105',
                            ]"
                        />

                        <div
                            :class="[
                                'absolute inset-0 bg-linear-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                                'from-black/20 via-black/10 to-transparent',
                            ]"
                        />
                    </div>

                    <div class="p-5">
                        <p
                            :class="[
                                'text-xs font-medium uppercase tracking-wide',
                                'text-orange-500',
                                'dark:text-yellow-400',
                            ]"
                        >
                            {{ t(project.category) }}
                        </p>

                        <h3
                            :class="['mt-1 text-lg font-semibold', 'text-black', 'dark:text-white']"
                        >
                            {{ project.name }}
                        </h3>

                        <p
                            :class="[
                                'mt-3 text-sm leading-relaxed line-clamp-3',
                                'text-neutral-600',
                                'dark:text-neutral-300',
                            ]"
                        >
                            {{ t(project.description) }}
                        </p>

                        <div class="mt-8 flex items-center justify-between">
                            <router-link
                                :to="project.links.demo || '#'"
                                :class="[
                                    'inline-flex items-center gap-2 rounded-lg pl-5 pr-4 py-3 text-sm font-medium transition-all duration-300 group-hover:gap-3',
                                    'bg-orange-50 text-orange-600 hover:bg-orange-100',
                                    'dark:bg-yellow-500/10 dark:text-yellow-400 dark:hover:bg-yellow-500/20',
                                ]"
                            >
                                {{ t('project.action.demo') }}
                                <ArrowRight :size="16" />
                            </router-link>

                            <Rating :defaultValue="project.rating" class="custom-rating" />
                        </div>
                    </div>
                </article>
            </div>

            <div class="flex justify-center mt-16">
                <Button
                    :class="[
                        'py-2.5 px-5 text-sm font-semibold',
                        'bg-orange-500 border-orange-500 hover:bg-orange-500/90 hover:border-orange-500/90',
                        'dark:bg-yellow-500 dark:border-yellow-500 dark:hover:bg-yellow-500/90 dark:hover:border-yellow-500/90',
                    ]"
                    :label="t('project.action.more_projects')"
                    v-animateonscroll="{
                        enterClass: 'animate-enter fade-in-10 animate-duration-1000',
                    }"
                />
            </div>
        </div>

        <div
            :class="['w-full px-4 py-20 text-center space-y-8', 'bg-zinc-200', 'dark:bg-zinc-800']"
        >
            <h1
                :class="[
                    'text-[2rem] md:text-[2.5rem] font-bold tracking-[-0.02em] max-w-150 mx-auto',
                    'text-neutral-900',
                    'dark:text-neutral-100',
                ]"
                v-animateonscroll="{
                    enterClass: 'animate-enter fade-in-10 animate-duration-1000',
                }"
            >
                {{ t('project.project_idea') }}
            </h1>
            <p
                :class="['text-lg max-w-150 mx-auto', 'text-neutral-700', 'dark:text-neutral-300']"
                v-animateonscroll="{
                    enterClass: 'animate-enter fade-in-10 animate-duration-1000',
                }"
            >
                {{ t('project.open_to_project') }}
            </p>

            <Button
                @click="() => scrollToSection('contact')"
                :class="[
                    'pl-8 pr-6 py-3 mt-15 text-base font-medium flex items-center gap-x-2.5 justify-center mx-auto hover:gap-x-4 hover:scale-[1.1] group transition',
                    'bg-orange-500 border-orange-500 hover:bg-orange-500/90 hover:border-orange-500/90',
                    'dark:bg-yellow-500 dark:border-yellow-500 dark:hover:bg-yellow-500/90 dark:hover:border-yellow-500/90',
                ]"
                v-animateonscroll="{
                    enterClass: 'animate-enter fade-in-10 animate-duration-1000',
                }"
            >
                {{ t('project.action.lets_work_together') }} <ArrowRight :size="20" />
            </Button>
        </div>
    </section>
</template>

<style scoped>
    .custom-rating {
        --p-rating-icon-color: #d1d5db;
        --p-rating-icon-active-color: oklch(70.5% 0.213 47.604);
        --p-rating-icon-hover-color: oklch(70.5% 0.213 47.604);
    }
    .dark .custom-rating {
        --p-rating-icon-color: #d1d5db;
        --p-rating-icon-active-color: oklch(85.2% 0.199 91.936);
        --p-rating-icon-hover-color: oklch(85.2% 0.199 91.936);
    }
</style>
