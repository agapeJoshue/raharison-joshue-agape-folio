<script lang="ts">
    import { defineComponent } from 'vue';
    import { CalendarRange, ChartSpline, CodeXml, Server, type LucideIcon } from 'lucide-vue-next';

    interface WorkStep {
        title: string;
        description: string;
        icon: LucideIcon;
    }

    export default defineComponent({
        name: 'WorkProcessSection',
        setup() {
            const workStepData: WorkStep[] = [
                {
                    title: 'Découverte & Analyse des besoins',
                    description: 'Comprendre objectifs, utilisateurs et données.',
                    icon: CalendarRange,
                },
                {
                    title: 'Analyse & Architecture',
                    description: 'Concevoir architecture et modèles analytiques.',
                    icon: ChartSpline,
                },
                {
                    title: 'Développement & Traitement des données',
                    description: 'Créer applications et pipelines de données.',
                    icon: CodeXml,
                },
                {
                    title: 'Validation & Déploiement',
                    description: 'Tester, déployer et optimiser pour l’usage réel.',
                    icon: Server,
                },
            ];
            return { workStepData };
        },
    });
</script>

<template>
    <section
        id="work-process"
        class="relative w-full bg-linear-to-b from-zinc-100 dark:from-zinc-900 to-zinc-50 dark:to-zinc-950"
    >
        <div class="max-w-400 mx-auto">
            <div
                class="bg-linear-to-b from-transparent to-white dark:to-black rounded-4xl lg:rounded-[4rem] personal-shadow px-5 pt-10 pb-5 md:px-6 md:py-10 lg:py-12 xl:py-28 max-xxl:px-4 lg:p-16 2xl:px-25 space-y-16 grid xl:grid-cols-2 xl:items-center"
            >
                <div class="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
                    <h1
                        class="max-xl:text-center text-lg md:text-xl xl:text-3xl font-bold tracking-[0.20em] uppercase text-zinc-900 dark:text-zinc-100"
                    >
                        Processus de travail
                    </h1>
                    <p
                        class="mt-6 mb-4 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500 dark:text-neutral-400"
                    >
                        Guidé par la résolution de problèmes et basé sur les données, je conçois et
                        développe des solutions digitales scalables, fiables et performantes. Chaque
                        système, fonctionnalité et analyse est pensé avec précision — alliant
                        excellence technique et impact concret sur le business.
                    </p>
                    <p
                        class="mt-6 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500 dark:text-neutral-400"
                    >
                        Je combine développement full-stack et analyse de données pour livrer des
                        applications robustes, des insights exploitables et des résultats
                        mesurables.
                    </p>
                </div>

                <div class="grid grid-cols-2 justify-end my-2 w-fit mx-auto">
                    <div
                        v-for="(step, i) in workStepData"
                        :key="`step-${i}`"
                        class="border-2 border-gray-100 dark:border-gray-800 group mt-3 p-4 sm:p-8 bg-white dark:bg-neutral-900 aspect-auto sm:max-w-78 rounded-xl hover:drop-shadow-2xl transition-all"
                        :class="i % 2 === 1 ? 'ms-3 mt-6' : 'mb-6'"
                    >
                        <div
                            class="w-11 h-11 sm:w-18 sm:h-18 flex items-center justify-center bg-emerald-100/80 dark:bg-emerald-500/15 group-hover:bg-emerald-400 dark:group-hover:bg-emerald-700 text-center center rounded-md transition-all"
                        >
                            <component
                                :is="step.icon"
                                :size="32"
                                class="text-emerald-600 dark:text-emerald-400 group-hover:text-white"
                            />
                        </div>
                        <div class="mt-6">
                            <h3 class="mb-3 font-semibold text-zinc-900 dark:text-zinc-100">
                                <span class="mr-2 text-emerald-600 dark:text-emerald-400"
                                    >{{ `0${i + 1}` }}.</span
                                >
                                {{ step.title }}
                            </h3>

                            <p class="text-sm text-zinc-600 dark:text-zinc-400">
                                {{ step.description }}
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
        box-shadow: 0 50px 100px -100px rgba(0, 0, 0, 0.15);
    }
</style>
