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
                    title: "Automatisation de l'analyse des e-mails via IA et n8n",
                    description:
                        "Conception et développement d'une solution complète assurant la fiabilité et la performance. Mise en place d'une interface dynamique pour visualiser les e-mails analysés et intégration des données traitées par les workflows n8n avec filtrage et organisation.",
                    company: "Projet de fin d'année ENI",
                    period: 'Oct. 2025 - Nov. 2025',
                    location: 'Fianarantsoa, Madagascar',
                    technologies: [
                        'React.js',
                        'Shadcn UI',
                        'TypeScript',
                        'PostgreSQL',
                        'Flask',
                        'Redis',
                        'N8N',
                        'Docker',
                    ],
                },
                {
                    title: 'Développement de l’application Mandika',
                    description:
                        "Développement complet de l'application incluant la capture et l’amélioration d’images. Création des interfaces de visualisation, d’édition et d’export de données et mise en place d’un moteur OCR adaptable pour extraire les informations conformément au cahier des charges.",
                    company: 'RafalTech',
                    period: 'Oct. 2025 - Nov. 2025',
                    location: 'Antananarivo, Madagascar',
                    technologies: [
                        'Flutter',
                        'Django',
                        'PostgreSQL',
                        'Tesseract OCR',
                        'OpenAI API',
                    ],
                },
                {
                    title: 'Gestion de rendez-vous synchronisée avec Google Agenda',
                    description:
                        "Conception et développement d'une application de gestion de rendez-vous synchronisée avec Google Agenda. Mise en place d’une API RESTful et WebSocket pour la communication temps réel et développement front-end et back-end pour une interface utilisateur fluide et réactive.",
                    company: 'Stage - SfyriTech',
                    period: 'Août 2024 - Déc. 2024',
                    location: 'Antananarivo, Madagascar (remote)',
                    technologies: [
                        'Vue.js',
                        'Quasar',
                        'TypeScript',
                        'PostgreSQL',
                        'Nest.js',
                        'Prisma ORM',
                        'WebSocket',
                        'Google Calendar API',
                    ],
                },
                {
                    title: "Développement de l'API de la plateforme Hello Archi",
                    description:
                        'Optimisation du code existant pour améliorer performance et ergonomie. Développement de nouvelles fonctionnalités selon les besoins clients et correction des bugs pour améliorer l’expérience utilisateur.',
                    company: 'SfyriTech',
                    period: 'Mai 2024 - Sept. 2024',
                    location: 'Antananarivo, Madagascar (remote)',
                    technologies: ['Node.js', 'Express', 'Docker'],
                },
                {
                    title: 'Développeur Full-Stack',
                    description:
                        'Conception et développement des aspects front-end et back-end de sites et applications web. Mise en œuvre de solutions logicielles adaptées aux besoins clients et développement de fonctionnalités personnalisées selon le cahier des charges.',
                    company: 'Stage - Open Data / Delivery',
                    period: 'Sept. 2023 - Nov. 2023',
                    location: 'Antsirabe, Madagascar',
                    technologies: ['PHP', 'Laravel', 'jQuery', 'MySQL'],
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
                    <div class="flex items-start gap-4 mb-4">
                        <div
                            class="max-w-11 h-11 sm:max-w-16 sm:h-16 w-full flex items-center justify-center bg-emerald-100/80 dark:bg-emerald-500/15 group-hover:bg-emerald-400 dark:group-hover:bg-emerald-700 text-xl text-emerald-600 dark:text-emerald-400 group-hover:text-white font-semibold text-center center rounded-md transition-all"
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
