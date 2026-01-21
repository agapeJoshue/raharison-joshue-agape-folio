<script lang="ts">
    import { defineComponent } from 'vue';
    import { Code, type LucideIcon } from 'lucide-vue-next';
    import { useI18n } from 'vue-i18n';

    type experience = {
        title: string;
        description: string;
        company: string;
        period: string;
        location: string;
        technologies: string[];
        icon: LucideIcon;
    };
    export default defineComponent({
        name: 'ExperienceSection',
        setup() {
            const { t } = useI18n();
            const experiences: experience[] = [
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
                    ],
                    icon: Code,
                },
                {
                    title: 'experience.planning.title',
                    description: 'experience.planning.description',
                    company: 'experience.planning.company',
                    period: 'experience.planning.period',
                    location: 'experience.planning.location',
                    technologies: [
                        'Next.js',
                        'HeroUI',
                        'TypeScript',
                        'TailwindCSS',
                        'Django',
                        'Redis',
                        'Celery',
                        'Docker',
                    ],
                    icon: Code,
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
                    ],
                    icon: Code,
                },
                {
                    title: 'experience.stock_flow.title',
                    description: 'experience.stock_flow.description',
                    company: 'experience.stock_flow.company',
                    period: 'experience.stock_flow.period',
                    location: 'experience.stock_flow.location',
                    technologies: [
                        'Next.js',
                        'HeroUI',
                        'TypeScript',
                        'PostgreSQL',
                        'Express.js',
                        'Node.js',
                    ],
                    icon: Code,
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
                        'Node.js',
                        'API Google Agenda',
                    ],
                    icon: Code,
                },
                {
                    title: 'experience.hello_archi.title',
                    description: 'experience.hello_archi.description',
                    company: 'experience.hello_archi.company',
                    period: 'experience.hello_archi.period',
                    location: 'experience.hello_archi.location',
                    technologies: ['Node.js', 'Express', 'Docker'],
                    icon: Code,
                },
                {
                    title: 'experience.open_delivery.title',
                    description: 'experience.open_delivery.description',
                    company: 'experience.open_delivery.company',
                    period: 'experience.open_delivery.period',
                    location: 'experience.open_delivery.location',
                    technologies: ['PHP', 'Laravel', 'JQuery', 'MySQL'],
                    icon: Code,
                },
            ];

            return { t, experiences };
        },
    });
</script>

<template>
    <section id="experience" class="w-full bg-zinc-200/50 dark:bg-zinc-800/50 md:py-10">
        <div class="max-w-400 mx-auto p-5">
            <div class="text-center space-y-5 mb-10">
                <h1
                    class="text-xl md:text-2xl font-bold tracking-[0.25em] uppercase text-zinc-900 dark:text-zinc-100"
                >
                    Expérience Professionnelle
                </h1>

                <p
                    class="text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                >
                    Découvrez mon parcours professionnel
                </p>

                <div
                    class="mx-auto h-0.5 w-100 bg-linear-to-r from-transparent via-emerald-400/70 dark:via-emerald-600/70 to-transparent"
                />
            </div>

            <div class="relative">
                <div
                    class="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-emerald-200 dark:bg-emerald-800/50"
                />

                <div class="space-y-4 md:space-y-0">
                    <div
                        v-for="(exp, index) in experiences"
                        :key="index"
                        class="relative md:grid md:grid-cols-2 md:gap-12"
                    >
                        <div
                            class="hidden md:flex absolute left-[50.15%] -translate-x-1/2 top-6 h-4 w-4 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20"
                        />

                        <div :class="index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'">
                            <div
                                class="bg-white dark:bg-neutral-900 aspect-auto rounded-2xl shadow-sm border-2 border-emerald-100 dark:border-emerald-950 dark:hover:border-emerald-800 p-6 hover:drop-shadow-2xl transition"
                            >
                                <div class="flex items-start gap-4 mb-4">
                                    <div
                                        class="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                                    >
                                        <component :is="exp.icon" class="h-6 w-6" />
                                    </div>

                                    <div>
                                        <h3
                                            class="text-lg font-semibold text-zinc-900 dark:text-zinc-100"
                                        >
                                            {{ t(exp.title) }}
                                        </h3>
                                        <p class="text-sm text-zinc-500 dark:text-zinc-400">
                                            {{ t(exp.company) }}
                                        </p>
                                    </div>
                                </div>

                                <div
                                    class="flex flex-wrap gap-4 text-sm text-zinc-500 dark:text-zinc-400 mb-4"
                                >
                                    <span>{{ t(exp.period) }}</span>
                                    <span>•</span>
                                    <span>{{ t(exp.location) }}</span>
                                </div>

                                <p
                                    class="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 mb-5"
                                >
                                    {{ t(exp.description) }}
                                </p>

                                <div class="flex flex-wrap gap-2">
                                    <span
                                        v-for="tech in exp.technologies"
                                        :key="tech"
                                        class="px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-200"
                                    >
                                        {{ tech }}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div v-if="index % 2 === 0" class="hidden md:block" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
