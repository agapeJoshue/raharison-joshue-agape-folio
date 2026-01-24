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
    <section id="project" class="w-full bg-white dark:bg-black pt-15 lg:pt-20">
        <div class="max-w-7xl mx-auto px-4 mb-20">
            <div class="text-center space-y-6 mb-14">
                <h1
                    class="text-xl md:text-2xl font-bold tracking-[0.35em] uppercase text-zinc-900 dark:text-zinc-100"
                >
                    {{ t('project.title') }}
                </h1>

                <p
                    class="text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                >
                    {{ t('project.subtitle') }}
                </p>

                <div
                    class="mx-auto h-0.5 w-24 bg-linear-to-r from-transparent via-emerald-500 to-transparent"
                />
            </div>

            <div
                class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:px-20 md:px-0 lg:px-20 xl:px-0"
            >
                <article
                    v-for="project in projects"
                    :key="project.name"
                    class="group relative rounded-2xl border border-neutral-200/60 dark:border-neutral-800 bg-white dark:bg-gray-950 aspect-auto shadow-sm hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1 overflow-hidden"
                >
                    <div class="relative overflow-hidden">
                        <img
                            :src="isDark ? project.images.dark : project.images.light"
                            :alt="project.name"
                            class="h-52 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        <div
                            class="absolute inset-0 bg-linear-to-t from-black/20 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>

                    <div class="p-5">
                        <p class="text-xs font-medium uppercase tracking-wide text-emerald-500">
                            {{ t(project.category) }}
                        </p>

                        <h3 class="mt-1 text-lg font-semibold text-neutral-900 dark:text-white">
                            {{ project.name }}
                        </h3>

                        <p
                            class="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 line-clamp-3"
                        >
                            {{ t(project.description) }}
                        </p>

                        <div class="mt-6 flex items-center justify-between">
                            <router-link
                                :to="project.links.demo || '#'"
                                class="inline-flex items-center gap-2 rounded-lg pl-5 pr-4 py-3 text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-all duration-300 group-hover:gap-3"
                            >
                                {{ t('project.action.demo') }}
                                <ArrowRight :size="16" />
                            </router-link>

                            <Rating :defaultValue="project.rating" />
                        </div>
                    </div>
                </article>
            </div>

            <div class="flex justify-center mt-16">
                <Button class="px-5" :label="t('project.action.more_projects')" />
            </div>
        </div>

        <div class="w-full py-20 bg-emerald-950 dark:bg-emerald-950/60 text-center space-y-8">
            <h1
                class="text-[2.5rem] font-bold tracking-[-0.02em] text-neutral-100 max-w-150 mx-auto"
            >
                {{ t('project.project_idea') }}
            </h1>
            <p class="text-lg max-w-150 text-neutral-400 mx-auto">
                {{ t('project.open_to_project') }}
            </p>

            <Button
                @click="() => scrollToSection('contact')"
                class="pl-8 pr-6 py-3 mt-15 text-base font-medium flex items-center gap-x-2.5 justify-center mx-auto hover:gap-x-4 hover:scale-[1.1] group transition"
            >
                {{ t('project.action.lets_work_together') }} <ArrowRight :size="20" />
            </Button>
        </div>
    </section>
</template>
