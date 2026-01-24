<script lang="ts">
    import { defineComponent } from 'vue';
    import { Pagination } from 'swiper/modules';
    import { useI18n } from 'vue-i18n';

    type Experience = {
        title: string;
        description: string;
        company: string;
        period: string;
        technologies: string[];
        image: string;
    };

    export default defineComponent({
        name: 'ExperienceSection',

        setup() {
            const { t } = useI18n();

            const experiences: Experience[] = [
                {
                    title: 'experience.auto_flow.title',
                    description: 'experience.auto_flow.description',
                    company: 'ENI',
                    period: 'experience.auto_flow.period',
                    technologies: ['React.js', 'PostgreSQL', 'Flask', 'N8N', 'Docker'],
                    image: '/imgs/experiences/n8n-autoflow.png',
                },
                {
                    title: 'experience.mandika_apk.title',
                    description: 'experience.mandika_apk.description',
                    company: 'RafalTech',
                    period: 'experience.mandika_apk.period',
                    technologies: [
                        'Flutter',
                        'Django',
                        'PostgreSQL',
                        'Tesseract OCR',
                        'OpenAI API',
                    ],
                    image: '/imgs/experiences/flutter-django.png',
                },
                {
                    title: 'experience.sfyritech_meeting.title',
                    description: 'experience.sfyritech_meeting.description',
                    company: 'SfyriTech',
                    period: 'experience.sfyritech_meeting.period',
                    technologies: [
                        'Quasar',
                        'PostgreSQL',
                        'Nest.js',
                        'Prisma ORM',
                        'Google Calendar API',
                    ],
                    image: '/imgs/experiences/nest-vue.webp',
                },
                {
                    title: 'experience.hello_archi.title',
                    description: 'experience.hello_archi.description',
                    company: 'SfyriTech',
                    period: 'experience.hello_archi.period',
                    technologies: ['Node.js', 'Express', 'Docker', 'websocket'],
                    image: '/imgs/experiences/node-express.jpg',
                },
                {
                    title: 'experience.open_delivery.title',
                    description: 'experience.open_delivery.description',
                    company: 'Open Data / Delivery',
                    period: 'experience.open_delivery.period',
                    technologies: ['vue.js', 'PHP', 'Laravel', 'jQuery', 'MySQL'],
                    image: '/imgs/experiences/laravel.png',
                },
            ];

            const customBreakpoints = {
                535: { slidesPerView: 1.2, spaceBetween: 16 },
                640: { slidesPerView: 1.2, spaceBetween: 16 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1100: { slidesPerView: 2.5, spaceBetween: 20 },
                1220: { slidesPerView: 3, spaceBetween: 24 },
                1500: { slidesPerView: 4, spaceBetween: 24 },
            };

            return { t, Pagination, experiences, customBreakpoints };
        },
    });
</script>

<template>
    <section id="experience" class="w-full bg-white dark:bg-black">
        <div class="mx-auto max-w-375 px-4 pt-20 pb-8">
            <div class="text-center space-y-4 mb-14">
                <h1
                    class="text-xl md:text-2xl font-bold tracking-[0.25em] uppercase text-zinc-900 dark:text-zinc-100"
                >
                    {{ t('experience.title') }}
                </h1>

                <p class="text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
                    {{ t('experience.subtitle') }}
                </p>

                <div
                    class="mx-auto h-0.5 w-20 bg-linear-to-r from-transparent via-emerald-500 to-transparent"
                />
            </div>

            <Swiper
                :modules="[Pagination]"
                :grabCursor="true"
                :breakpoints="customBreakpoints"
                :pagination="{ clickable: true }"
                class="pb-16"
            >
                <SwiperSlide v-for="(exp, index) in experiences" :key="index" class="h-auto">
                    <article
                        class="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-950 border border-emerald-100 dark:border-emerald-800 shadow-sm hover:shadow-2xl transition-all duration-500 mb-16"
                    >
                        <div class="overflow-hidden">
                            <img
                                :src="exp.image"
                                :alt="t(exp.title)"
                                class="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        <div class="p-6 space-y-3">
                            <h3
                                class="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2"
                            >
                                {{ t(exp.title) }}
                            </h3>

                            <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                                {{ t(exp.description) }}
                            </p>

                            <div class="flex flex-wrap gap-2 pt-2">
                                <span
                                    v-for="tech in exp.technologies"
                                    :key="tech"
                                    class="rounded-full bg-emerald-50 dark:bg-emerald-900/30 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400"
                                >
                                    {{ tech }}
                                </span>
                            </div>

                            <div class="flex justify-between text-xs text-gray-400 pt-4">
                                <span>{{ exp.company }}</span>
                                <span>{{ t(exp.period) }}</span>
                            </div>
                        </div>
                    </article>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>
