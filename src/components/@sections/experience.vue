<script lang="ts">
    import { defineComponent } from 'vue';
    import { Pagination } from 'swiper/modules';
    import { useI18n } from 'vue-i18n';
    import { experiences } from '../../data/experience.data';

    export default defineComponent({
        name: 'ExperienceSection',

        setup() {
            const { t } = useI18n();

            const customBreakpoints = {
                535: { slidesPerView: 1.2, spaceBetween: 16 },
                640: { slidesPerView: 1.2, spaceBetween: 16 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1100: { slidesPerView: 2.5, spaceBetween: 20 },
                1220: { slidesPerView: 3, spaceBetween: 24 },
                1500: { slidesPerView: 4, spaceBetween: 20 },
            };

            return { t, Pagination, experiences, customBreakpoints };
        },
    });
</script>

<template>
    <section
        id="experience"
        :class="['w-full backdrop-blur-3xl', 'bg-white/90', 'dark:bg-black/80']"
    >
        <div class="mx-auto max-w-375 px-5 pt-20 pb-8">
            <div class="text-center space-y-4 mb-14">
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
                    {{ t('experience.title') }}
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
                    {{ t('experience.subtitle') }}
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

            <Swiper
                :modules="[Pagination]"
                :grabCursor="true"
                :breakpoints="customBreakpoints"
                :pagination="{ clickable: true }"
                class="pb-16"
            >
                <SwiperSlide v-for="(exp, index) in experiences" :key="index" class="h-auto">
                    <article
                        :class="[
                            'group relative overflow-hidden rounded-xl border shadow-lg hover:shadow-2xl transition-all duration-500 mb-16',
                            'bg-white/70 border-white/70 hover:border-orange-400',
                            'dark:bg-zinc-900/70 dark:border-zinc-700 dark:hover:border-yellow-400',
                        ]"
                        v-animateonscroll="{
                            enterClass: 'animate-enter fade-in-10 zoom-in-8 animate-duration-1000',
                        }"
                    >
                        <div class="overflow-hidden">
                            <img
                                :src="exp.image"
                                :alt="t(exp.title)"
                                :class="[
                                    'h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110',
                                ]"
                            />
                        </div>

                        <div class="p-6 space-y-3">
                            <h3
                                :class="[
                                    'text-lg font-semibold line-clamp-2',
                                    'text-black',
                                    'dark:text-white',
                                ]"
                            >
                                {{ t(exp.title) }}
                            </h3>

                            <p
                                :class="[
                                    'text-sm line-clamp-5',
                                    'text-neutral-600',
                                    'dark:text-neutral-300',
                                ]"
                            >
                                {{ t(exp.description) }}
                            </p>

                            <div class="flex flex-wrap gap-2 pt-2">
                                <span
                                    v-for="tech in exp.technologies"
                                    :key="tech"
                                    :class="[
                                        'rounded-full px-3 py-1 text-xs font-medium border',
                                        'bg-orange-50 text-orange-600 border-orange-500',
                                        'dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-400',
                                    ]"
                                >
                                    {{ tech }}
                                </span>
                            </div>

                            <div
                                :class="[
                                    'flex justify-between text-xs  pt-4',
                                    'text-gray-400',
                                    'dark:text-gray-300',
                                ]"
                            >
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
