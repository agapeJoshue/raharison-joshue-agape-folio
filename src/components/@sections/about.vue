<script lang="ts">
    import { defineComponent } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { scrollToSection } from '../../services/utilsService';

    export default defineComponent({
        name: 'AboutSection',

        setup() {
            const { t } = useI18n();

            const formations = [
                {
                    year: '2024',
                    title: 'about.education_degree',
                    place: 'about.education_institution',
                },
                {
                    year: '2021',
                    title: 'about.secondary_degree',
                    place: 'about.secondary_institution',
                },
            ];

            return { t, formations, scrollToSection };
        },
    });
</script>

<template>
    <section
        id="about"
        class="relative pt-10 w-full bg-linear-to-b from-gray-100/80 to-gray-100/90 dark:from-gray-900/80 dark:to-gray-900/90"
    >
        <div class="max-w-400 mx-auto pb-15 lg:pb-0">
            <div
                class="bg-linear-to-b from-white to-transparent dark:from-black rounded-4xl lg:rounded-[4rem] personal-shadow px-6 pt-10 lg:p-16 2xl:px-25 space-y-16"
            >
                <div class="text-center space-y-5 mb-10">
                    <h1
                        class="text-xl md:text-2xl font-bold tracking-[0.35em] uppercase text-zinc-900 dark:text-zinc-100"
                    >
                        {{ t('about.about_title') }}
                    </h1>

                    <p
                        class="text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        {{ t('about.about_subtitle') }}
                    </p>

                    <div
                        class="mx-auto h-0.5 w-100 bg-linear-to-r from-transparent via-emerald-400/70 dark:via-emerald-600/70 to-transparent"
                    />
                </div>

                <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 2xl:gap-25 items-center">
                    <div class="relative">
                        <div
                            class="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
                        >
                            <img
                                src="/imgs/19362653.jpg"
                                alt="Portrait"
                                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                        <div class="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
                            <Button
                                @click="() => scrollToSection('project')"
                                :label="t('about.projects_cta')"
                                class="px-6 bg-emerald-600 text-white dark:text-black dark:bg-emerald-400"
                            />

                            <Button
                                :label="t('about.download_cv')"
                                outlined
                                class="px-6 border-black text-black dark:border-white dark:text-white"
                            >
                                <template #icon>
                                    <Download class="mr-1" />
                                </template>
                            </Button>
                        </div>
                    </div>

                    <div class="space-y-16">
                        <div class="space-y-6">
                            <h2 class="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                                {{ t('about.career_title') }}
                            </h2>

                            <p class="text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-prose">
                                {{ t('about.career_description') }}
                            </p>
                        </div>

                        <section class="space-y-10">
                            <h3
                                class="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-900 dark:text-zinc-100"
                            >
                                {{ t('about.education_title') }}
                            </h3>

                            <ul
                                className="space-y-8 border-l-2 border-neutral-300 dark:border-neutral-700 ml-2"
                            >
                                <li
                                    v-for="(formation, i) in formations"
                                    :key="i"
                                    className="relative space-y-1 pl-6"
                                >
                                    <span
                                        class="absolute w-5 h-5 right-full bottom-full translate-x-2 translate-y-6 backdrop-blur-3xl flex items-center justify-center rounded-full"
                                    >
                                        <CircleCheckBig
                                            :size="20"
                                            class="text-emerald-600 dark:text-emerald-400"
                                        />
                                    </span>
                                    <p
                                        className="text-sm flex items-center gap-2 tracking-widest uppercase text-neutral-500 dark:text-neutral-300"
                                    >
                                        <CalendarFold :size="18" /> {{ formation.year }}
                                    </p>
                                    <h3
                                        className="font-semibold mt-2 text-neutral-900 dark:text-neutral-100 text-base"
                                    >
                                        {{ t(formation.title) }}
                                    </h3>
                                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                                        {{ t(formation.place) }}
                                    </p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .personal-shadow {
        box-shadow: 0 -50px 100px -100px rgba(0, 0, 0, 0.15);
    }
</style>
