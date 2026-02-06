<script lang="ts">
    import { defineComponent } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { scrollToSection } from '../../services/utilsService';
    import { CalendarRange, ChartSpline, CodeXml, Server, type LucideIcon } from 'lucide-vue-next';

    interface WorkStep {
        title: string;
        description: string;
        icon: LucideIcon;
    }

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
            const workStepData: WorkStep[] = [
                {
                    title: 'work_process.steps.s1.title',
                    description: 'work_process.steps.s1.description',
                    icon: CalendarRange,
                },
                {
                    title: 'work_process.steps.s2.title',
                    description: 'work_process.steps.s2.description',
                    icon: ChartSpline,
                },
                {
                    title: 'work_process.steps.s3.title',
                    description: 'work_process.steps.s3.description',
                    icon: CodeXml,
                },
                {
                    title: 'work_process.steps.s4.title',
                    description: 'work_process.steps.s4.description',
                    icon: Server,
                },
            ];

            return { t, formations, scrollToSection, workStepData };
        },
    });
</script>

<template>
    <section
        id="about"
        :class="[
            'relative pt-10 w-full bg-linear-to-b',
            'from-white/60 to-zinc-100/90',
            'dark:from-zinc-900/60 dark:to-zinc-900/90',
        ]"
    >
        <div
            :class="['max-w-400 mx-auto pb-15 lg:pb-0']"
            v-animateonscroll="{
                enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000',
            }"
        >
            <div
                :class="[
                    'rounded-4xl lg:rounded-[4rem] to-transparent bg-linear-to-b backdrop-blur-3xl personal-shadow px-6 pt-10 lg:p-16 2xl:p-25 space-y-16',
                    'from-white/60',
                    'dark:from-black/60',
                ]"
            >
                <div :class="['text-center space-y-5 mb-10']">
                    <h1
                        :class="[
                            'text-xl md:text-2xl font-bold tracking-[0.35em] uppercase',
                            'text-orange-600',
                            'dark:text-yellow-400',
                        ]"
                    >
                        {{ t('about.about_title') }}
                    </h1>

                    <p
                        :class="[
                            'text-base md:text-lg max-w-2xl mx-auto leading-relaxed',
                            'text-zinc-600',
                            'dark:text-zinc-300',
                        ]"
                    >
                        {{ t('about.about_subtitle') }}
                    </p>

                    <div
                        :class="[
                            'mx-auto h-0.5 w-100 bg-linear-to-r from-transparent to-transparent',
                            'via-orange-500',
                            'dark:via-yellow-500',
                        ]"
                    />
                </div>

                <div
                    :class="[
                        'w-full grid grid-cols-1 lg:grid-cols-2 gap-16 2xl:gap-25 items-center',
                    ]"
                >
                    <div class="relative">
                        <div
                            :class="[
                                'relative overflow-hidden rounded-3xl border',
                                'border-zinc-200',
                                'dark:border-zinc-800',
                            ]"
                        >
                            <img
                                src="/imgs/19362653.jpg"
                                alt="Portrait"
                                :class="[
                                    'w-full h-full object-cover transition-transform duration-700 hover:scale-105',
                                ]"
                            />
                        </div>

                        <div
                            :class="['mt-10 flex flex-wrap justify-center md:justify-start gap-4']"
                        >
                            <Button
                                @click="() => scrollToSection('project')"
                                :label="t('about.projects_cta')"
                                :class="[
                                    'py-2.5 px-5 text-sm font-semibold',
                                    'bg-orange-500 border-orange-500 hover:bg-orange-500/90 hover:border-orange-500/90',
                                    'dark:bg-yellow-500 dark:border-yellow-500 dark:hover:bg-yellow-500/90 dark:hover:border-yellow-500/90',
                                ]"
                            />

                            <Button
                                :label="t('about.download_cv')"
                                outlined
                                :class="[
                                    'py-2.5 px-5 text-sm font-semibold bg-transparent',
                                    'border-orange-500 text-orange-600 hover:border-orange-600 hover:text-orange-700 hover:bg-orange-500/5',
                                    'dark:border-yellow-500 dark:text-yellow-400  dark:hover:border-yellow-600 dark:hover:text-yellow-500 dark:hover:bg-yellow-400/5',
                                ]"
                            >
                                <template #icon>
                                    <Download class="mr-1" />
                                </template>
                            </Button>
                        </div>
                    </div>

                    <div class="space-y-16">
                        <div class="space-y-6">
                            <h2
                                :class="['text-2xl font-semibold', 'text-black', 'dark:text-white']"
                            >
                                {{ t('about.career_title') }}
                            </h2>

                            <p
                                :class="[
                                    'text-base md:text-lg leading-relaxed max-w-prose',
                                    'text-zinc-600',
                                    'dark:text-zinc-300',
                                ]"
                            >
                                {{ t('about.career_description') }}
                            </p>
                        </div>

                        <section class="space-y-10">
                            <h3
                                :class="[
                                    'text-base font-semibold uppercase tracking-[0.35em]',
                                    'text-black',
                                    'dark:text-white',
                                ]"
                            >
                                {{ t('about.education_title') }}
                            </h3>

                            <ul className="space-y-8 ml-2">
                                <li
                                    v-for="(formation, i) in formations"
                                    :key="i"
                                    className="relative space-y-1 pl-6"
                                >
                                    <span
                                        :class="[
                                            'absolute w-5 h-5 right-full bottom-full translate-x-2 translate-y-6 backdrop-blur-3xl flex items-center justify-center rounded-full',
                                        ]"
                                    >
                                        <CircleCheckBig
                                            :size="20"
                                            :class="['text-orange-500', 'dark:text-yellow-400']"
                                        />
                                    </span>
                                    <div
                                        :class="[
                                            'absolute w-0.5 -left-0.5 top-4.75 h-[80%] bg-linear-to-b',
                                            'from-orange-500',
                                            'from-yellow-400',
                                        ]"
                                    />
                                    <p
                                        :class="[
                                            'text-sm md:text-base flex items-center gap-2 tracking-widest uppercase',
                                            'text-neutral-500',
                                            'dark:text-neutral-300',
                                        ]"
                                    >
                                        <CalendarFold :size="20" /> {{ formation.year }}
                                    </p>
                                    <h3
                                        className="  "
                                        :class="[
                                            'text-base md:text-lg font-semibold mt-2',
                                            'text-neutral-900',
                                            'dark:text-neutral-100',
                                        ]"
                                    >
                                        {{ t(formation.title) }}
                                    </h3>
                                    <p
                                        :class="[
                                            'text-sm',
                                            'text-neutral-600',
                                            'dark:text-neutral-400',
                                        ]"
                                    >
                                        {{ t(formation.place) }}
                                    </p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>

        <div class="max-w-400 mx-auto">
            <div
                :class="[
                    'bg-transparent rounded-4xl lg:rounded-[4rem] px-5 pt-10 pb-5 md:px-6 md:py-10 lg:py-12 xl:py-28 max-xxl:px-4 lg:p-16 2xl:px-25 space-y-16 grid xl:grid-cols-2 xl:items-center',
                ]"
            >
                <div :class="['lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8']">
                    <h1
                        :class="[
                            'max-xl:text-center mb-12 text-xl md:text-2xl xl:text-3xl font-bold tracking-[0.20rem] uppercase',
                            'text-orange-500',
                            'dark:text-yellow-400',
                        ]"
                        v-animateonscroll="{
                            enterClass:
                                'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000',
                        }"
                    >
                        {{ t('work_process.title') }}
                    </h1>
                    <p
                        :class="[
                            'mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center',
                            'text-gray-600',
                            'dark:text-neutral-300',
                        ]"
                        v-animateonscroll="{
                            enterClass:
                                'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000',
                        }"
                    >
                        {{ t('work_process.subtitle.s1') }}
                    </p>
                    <p
                        :class="[
                            'mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center',
                            'text-gray-600',
                            'dark:text-neutral-300',
                        ]"
                        v-animateonscroll="{
                            enterClass:
                                'animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000',
                        }"
                    >
                        {{ t('work_process.subtitle.s2') }}
                    </p>
                </div>

                <div class="grid grid-cols-2 justify-end my-2 w-fit mx-auto">
                    <div
                        v-for="(step, i) in workStepData"
                        :key="`step-${i}`"
                        :class="[
                            'border-2 group p-4 sm:p-8 aspect-auto sm:max-w-78 rounded-xl hover:drop-shadow-2xl transition-all cursor-pointer ease',
                            'bg-white border-white hover:border-orange-400',
                            'dark:bg-zinc-900 dark:border-zinc-900 dark:hover:border-yellow-500',
                            i % 2 === 1 ? 'ml-3 mt-6' : 'mb-6',
                        ]"
                        v-animateonscroll="{
                            enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-1000',
                        }"
                    >
                        <div
                            :class="[
                                'w-11 h-11 sm:w-18 sm:h-18 flex items-center justify-center text-center center rounded-md transition-all',
                                'bg-orange-100 group-hover:bg-orange-400',
                                'dark:bg-yellow-500/15 dark:group-hover:bg-yellow-500',
                            ]"
                        >
                            <component
                                :is="step.icon"
                                :size="32"
                                :class="[
                                    'group-hover:text-white',
                                    'text-orange-600',
                                    'dark:text-yellow-400',
                                ]"
                            />
                        </div>
                        <div :class="['mt-6']">
                            <h3 :class="['mb-3 font-semibold', 'text-black', 'dark:text-white']">
                                <span :class="['mr-2', 'text-orange-600', 'dark:text-yellow-400']">
                                    {{ `0${i + 1}` }}.
                                </span>
                                {{ t(step.title) }}
                            </h3>

                            <p :class="['text-sm', 'text-zinc-700', 'dark:text-zinc-300']">
                                {{ t(step.description) }}
                            </p>
                        </div>
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
