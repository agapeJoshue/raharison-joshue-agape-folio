<script lang="ts">
    import { defineComponent } from 'vue';
    import { Pagination } from 'swiper/modules';
    import { useThemeStore } from '../../hooks/useThemeStore';

    type Skill = {
        title: string;
        subtitle?: string;
        techs: { name: string; value: number }[];
    };

    export default defineComponent({
        name: 'SkillSection',

        setup() {
            const { isDark } = useThemeStore();
            const skills: Skill[] = [
                {
                    title: 'Front-End web & mobile',
                    subtitle:
                        'Conception et développement d’interfaces performantes, responsives et accessibles pour applications web et mobiles. Maîtrise des frameworks modernes, intégration UI, performances, accessibilité, animations, consommation d’API optimisée.',
                    techs: [
                        { name: 'Vue.js', value: 90 },
                        { name: 'React', value: 90 },
                        { name: 'Next.js', value: 90 },
                        { name: 'Angular', value: 80 },
                        { name: 'Flutter', value: 80 },
                        { name: 'React Native', value: 90 },
                        { name: 'Bootstrap', value: 90 },
                        { name: 'Tailwind CSS', value: 90 },
                    ],
                },
                {
                    title: 'Back-End',
                    subtitle:
                        'Architecture et développement de services backend sécurisés et scalables. Conception d’API, bases de données, authentification, performance, tests, intégrations, déploiement cloud fiable orienté métier, résilience, monitoring.',
                    techs: [
                        { name: 'Node.js', value: 90 },
                        { name: 'Express.js', value: 90 },
                        { name: 'NestJS', value: 90 },
                        { name: 'Django', value: 90 },
                        { name: 'Flask', value: 80 },
                        { name: 'FastAPI', value: 90 },
                        { name: 'Laravel', value: 70 },
                        { name: 'Symfony', value: 70 },
                    ],
                },
                {
                    title: 'UI / UX Design & DevOps',
                    subtitle:
                        'Design centré utilisateur et pratiques DevOps pour livraisons fiables. Prototypage, tests utilisateurs, design systems, automatisation, CI/CD, sécurité, surveillance, amélioration continue performance, collaboration, qualité, scalabilité, documentation.',
                    techs: [
                        { name: 'Figma', value: 50 },
                        { name: 'Adobe XD', value: 40 },
                        { name: 'Photoshop', value: 25 },
                        { name: 'Git', value: 90 },
                        { name: 'Docker', value: 90 },
                        { name: 'AWS', value: 60 },
                        { name: 'SEO', value: 50 },
                    ],
                },
            ];

            const softSkill = [
                'Résolution de problèmes',
                "Travail d'équipe",
                'Communication',
                'Gestion du temps',
                'Adaptabilité',
                'Créativité',
                'Attention aux détails',
                'Autonomie',
            ];

            const bibliotheques = [
                { name: 'IA N8N', icon: '/imgs/techs/n8n.png' },
                { name: 'Tailwind css', icon: '/imgs/techs/tailwindcss.png' },
                { name: 'Bootstrap', icon: '/imgs/techs/bootstrap.jpeg' },
                { name: 'Nuxt', icon: '/imgs/techs/nuxt.png' },
                { name: 'Primevue', icon: '/imgs/techs/primevue.png' },
                { name: 'Quasar', icon: '/imgs/techs/quasar.png' },
                { name: 'Nest', icon: '/imgs/techs/nestjs.png' },
                { name: 'Vuetify', icon: '/imgs/techs/vuetify.jpeg' },
                { name: 'Material UI', icon: '/imgs/techs/material-ui.jpg' },
                { name: 'Hero UI', icon: '/imgs/techs/heroUI.png' },
                { name: 'React bootstrap', icon: '/imgs/techs/React-bootstrap.webp' },
                { name: 'Shadcn ui', icon: '/imgs/techs/shadcs.png' },
                { name: 'Chakra UI', icon: '/imgs/techs/chakraui.jpeg' },
                { name: 'Ant design', icon: '/imgs/techs/ant-design.jpg' },
                { name: 'Primereact', icon: '/imgs/techs/primereact.jpg' },
                { name: 'Element Plus', icon: '/imgs/techs/element-plus.png' },
                { name: 'Bootstrap vue', icon: '/imgs/techs/bootstrapvue.jpg' },
                { name: 'PrimeNG', icon: '/imgs/techs/primeng.png' },
                { name: 'Angular Material', icon: '/imgs/techs/angular-material.svg' },
                { name: 'Lucide Icon', icon: '/imgs/techs/lucide.jpg' },
                { name: 'Flaticon', icon: '/imgs/techs/flaticon.jpeg' },
                { name: 'Native Expo', icon: '/imgs/techs/native-expo.jpeg' },
                { name: 'Prisma ORM', icon: '/imgs/techs/prisma.png' },
                { name: 'Sequelize', icon: '/imgs/techs/sequelize.jpg' },
            ];

            return { isDark, skills, Pagination, softSkill, bibliotheques };
        },
    });
</script>

<template>
    <section id="skill" class="relative bg-white dark:bg-black py-20">
        <div class="mx-auto max-w-7xl px-6">
            <div class="text-center mb-8 space-y-4">
                <h2
                    class="text-2xl md:text-3xl font-semibold tracking-widest uppercase text-gray-900 dark:text-gray-100"
                >
                    Compétences
                </h2>

                <p
                    class="max-w-2xl mx-auto text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed"
                >
                    Une synthèse claire de mon expertise technique et de mes outils.
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
                    v-for="(bibl, i) in bibliotheques"
                    :key="i"
                    :label="bibl.name"
                    :image="bibl.icon"
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
                    <article class="group relative px-6 md:px-10 py-5 mb-8">
                        <h3
                            class="mb-5 text-center text-2xl font-semibold text-gray-900 dark:text-gray-100"
                        >
                            {{ skill.title }}
                        </h3>

                        <p
                            class="text-neutral-600 dark:text-neutral-400 font-medium pb-12 text-center max-w-200 mx-auto"
                        >
                            {{ skill.subtitle }}
                        </p>

                        <div
                            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-12 gap-y-8"
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
                    Compétences relationnelles
                </h3>

                <div class="flex flex-wrap justify-center gap-4">
                    <span
                        v-for="(skill, index) in softSkill"
                        :key="index"
                        class="inline-flex items-center rounded-full px-5 py-2 text-sm font-medium bg-gray-50 dark:bg-zinc-900 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-800 transition-all duration-300 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:scale-105"
                    >
                        {{ skill }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>
