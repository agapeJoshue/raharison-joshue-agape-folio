<script lang="ts">
    import { defineComponent } from 'vue';
    import { useI18n } from 'vue-i18n';

    type Experience = {
        title: string;
        description: string;
        company: string;
        period: string;
        location: string;
        technologies: string[];
    };

    export default defineComponent({
        name: 'ExperienceSection',

        setup() {
            const { t } = useI18n();

            const experiences: Experience[] = [
                {
                    title: 'experience.auto_flow.title',
                    description: 'experience.auto_flow.description',
                    company: 'experience.auto_flow.company',
                    period: 'experience.auto_flow.period',
                    location: 'experience.auto_flow.location',
                    technologies: [
                        'React.js',
                        'Shadcn UI',
                        'TypeScript',
                        'PostgreSQL',
                        'Flask',
                        'WebSocket',
                        'Redis',
                        'N8N',
                        'Docker',
                    ]
                },
                {
                    title: 'experience.mandika_apk.title',
                    description: 'experience.mandika_apk.description',
                    company: 'experience.mandika_apk.company',
                    period: 'experience.mandika_apk.period',
                    location: 'experience.mandika_apk.location',
                    technologies: [
                        'Flutter',
                        'Django',
                        'PostgreSQL',
                        'Tesseract OCR',
                        'OpenAI API',
                    ]
                },
                {
                    title: 'experience.sfyritech_meeting.title',
                    description: 'experience.sfyritech_meeting.description',
                    company: 'experience.sfyritech_meeting.company',
                    period: 'experience.sfyritech_meeting.period',
                    location: 'experience.sfyritech_meeting.location',
                    technologies: [
                        'Vue.js',
                        'Quasar',
                        'TypeScript',
                        'PostgreSQL',
                        'Nest.js',
                        'Prisma ORM',
                        'WebSocket',
                        'Google Calendar API',
                    ]
                },
                {
                    title: 'experience.hello_archi.title',
                    description: 'experience.hello_archi.description',
                    company: 'experience.hello_archi.company',
                    period: 'experience.hello_archi.period',
                    location: 'experience.hello_archi.location',
                    technologies: ['Node.js', 'Express', 'Docker']
                },
                {
                    title: 'experience.open_delivery.title',
                    description: 'experience.open_delivery.description',
                    company: 'experience.open_delivery.company',
                    period: 'experience.open_delivery.period',
                    location: 'experience.open_delivery.location',
                    technologies: ['PHP', 'Laravel', 'jQuery', 'MySQL']
                },
            ];

            return { t, experiences };
        },
    });
</script>

<template>
    <section id="experience" class="w-full bg-zinc-200/50 dark:bg-zinc-800/50">
        <div class="mx-auto max-w-375 px-4 py-20">
            <div class="text-center space-y-4 mb-14">
                <h1
                    class="text-xl md:text-2xl font-bold tracking-[0.25em] uppercase text-zinc-900 dark:text-zinc-100"
                >
                    Expérience Professionnelle
                </h1>

                <p class="text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
                    Découvrez mon parcours professionnel et les projets sur lesquels j’ai travaillé.
                </p>

                <div
                    class="mx-auto h-0.5 w-20 bg-linear-to-r from-transparent via-emerald-500 to-transparent"
                />
            </div>

            <div class="grid grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-0">
                <article
                    v-for="(exp, index) in experiences"
                    :key="index"
                    class="group relative rounded-2xl bg-white dark:bg-neutral-800/50 aspect-auto border-2 border-emerald-100 dark:border-emerald-950 dark:hover:border-emerald-800 p-6 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-xl"
                    :class="(index + 1) % 2 === 0 ? 'lg:ml-5 lg:mt-10' : 'lg:mr-5 lg:mb-10'"
                >
                    <div
                        class="absolute left-0 top-6 h-[calc(100%-3rem)] w-1 rounded-full bg-emerald-500/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    <div class="flex items-start gap-4 mb-4">
                        <div
                            class="shrink-0 p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        >
                            {{
                                experiences.length - index < 9
                                    ? `0${experiences.length - index}`
                                    : experiences.length - index
                            }}
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-zinc-900 dark:text-white">
                                {{ t(exp.title) }}
                            </h3>
                            <p class="text-sm text-zinc-500 dark:text-zinc-400">
                                {{ t(exp.company) }}
                            </p>
                        </div>
                    </div>

                    <div
                        class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400 mb-4"
                    >
                        <span>{{ t(exp.period) }}</span>
                        <span class="opacity-40">•</span>
                        <span>{{ t(exp.location) }}</span>
                    </div>

                    <p class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 mb-5">
                        {{ t(exp.description) }}
                    </p>

                    <div class="flex flex-wrap gap-2">
                        <span
                            v-for="tech in exp.technologies"
                            :key="tech"
                            class="px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 transition-colors hover:bg-emerald-500/10 hover:text-emerald-600"
                        >
                            {{ tech }}
                        </span>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
