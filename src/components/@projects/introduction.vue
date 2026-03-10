<script lang="ts">
    import { useI18n } from 'vue-i18n';
    import { computed, defineComponent, type PropType } from 'vue';
    import type { ProjectIntroductionDemo } from '../../data/projects.data';
    import { useThemeStore } from '../../hooks/useThemeStore';
    import { useRouter } from 'vue-router';

    export default defineComponent({
        name: 'ProjectIntroduction',
        props: {
            introduction: { type: Object as PropType<ProjectIntroductionDemo>, required: true },
        },
        emits: ['on-close'],
        setup(props, { emit }) {
            const { t } = useI18n();
            const router = useRouter();
            const { isDark } = useThemeStore();

            const projectIntro = computed(() => props.introduction);

            const onClose = () => emit('on-close');
            const goBack = () => router.back();

            return { t, isDark, projectIntro, onClose, goBack };
        },
    });
</script>

<template>
    <section
        class="relative w-full min-h-screen max-w-5xl mx-auto px-5 py-8 lg:p-15 lg:rounded-4xl backdrop-blur-xl lg:border border-orange-500 dark:border-yellow-500 space-y-12 shadow-2xl overflow-hidden"
    >
        <Button
            @click="onClose"
            size="small"
            class="bg-transparent text-orange-600 hover:text-orange-500 dark:text-yellow-400 dark:hover:text-yellow-500 border-none absolute right-4 top-5"
        >
            <CloseIcon />
        </Button>

        <h1
            class="relative w-fit uppercase border-b-[0.11rem] text-xl lg:text-4xl mt-6 pb-2 text-orange-600 dark:text-yellow-400"
        >
            Description du projet
        </h1>

        <div
            v-if="projectIntro.images"
            class="border border-zinc-300 dark:border-zinc-700 w-full rounded-xl overflow-hidden"
        >
            <Image
                :src="isDark ? projectIntro.images.dark : projectIntro.images.light"
                alt="Image"
                preview
            />
        </div>

        <!-- Objectif -->
        <div class="space-y-3">
            <h1 class="text-xl lg:text-2xl font-bold text-orange-600 dark:text-yellow-400">
                1. Objectif :
            </h1>
            <p
                v-for="(goal, index) in projectIntro.goals"
                :key="index"
                class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 font-light text-justify"
            >
                {{ goal }}
            </p>
        </div>

        <!-- Besoins de l’utilisateur -->
        <div class="space-y-3">
            <h1 class="text-xl lg:text-2xl font-bold text-orange-600 dark:text-yellow-400">
                2. Besoins de l’utilisateur :
            </h1>
            <p
                class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 font-light text-justify"
            >
                Les besoins des utilisateurs peuvent être classés en deux catégories principales :
                les besoins
                <span class="font-medium text-neutral-950 dark:text-neutral-50 underline">
                    fonctionnels
                </span>
                et les besoins
                <span class="font-medium text-neutral-950 dark:text-neutral-50 underline">
                    non fonctionnels </span
                >.
            </p>

            <div class="ml-5 sm:ml-6 md:ml-7 lg:ml-8">
                <li class="lg:text-lg font-semibold text-black dark:text-white">
                    Besoins fonctionnels :
                </li>

                <ul
                    v-if="
                        projectIntro.needs &&
                        projectIntro.needs.requirements &&
                        projectIntro.needs.requirements.length > 0
                    "
                    class="mt-3 pl-4 space-y-2.5 mb-8"
                >
                    <li
                        v-for="(requirement, index) in projectIntro.needs.requirements"
                        :key="index"
                        class="text-sm lg:text-base"
                    >
                        <span class="font-medium text-neutral-900 dark:text-neutral-100">
                            {{ requirement.title }}
                        </span>
                        <span
                            class="text-neutral-700 dark:text-neutral-300 font-light ml-2 text-justify"
                        >
                            {{ requirement.description }}
                        </span>
                    </li>
                </ul>

                <li class="lg:text-lg font-semibold text-black dark:text-white">
                    Besoins non fonctionnels :
                </li>
                <ul
                    v-if="
                        projectIntro.needs &&
                        projectIntro.needs.not_requirements &&
                        projectIntro.needs.not_requirements.length > 0
                    "
                    class="mt-3 pl-4 space-y-2.5"
                >
                    <li
                        v-for="(requirement, index) in projectIntro.needs.not_requirements"
                        :key="index"
                        class="text-sm lg:text-base"
                    >
                        <span class="font-medium text-neutral-900 dark:text-neutral-100">
                            {{ requirement.title }}
                        </span>
                        <span
                            class="text-neutral-700 dark:text-neutral-300 font-light ml-2 text-justify"
                        >
                            {{ requirement.description }}
                        </span>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Moyens nécessaires à la réalisation du projet -->
        <div class="space-y-3">
            <h1 class="text-xl lg:text-2xl font-bold text-orange-600 dark:text-yellow-400">
                3. Moyens nécessaires à la réalisation du projet :
            </h1>
            <p
                class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 font-light text-justify"
            >
                Pour pouvoir effectuer ce projet, nous avons besoin de deux types de moyens : le
                moyen
                <span class="font-medium text-neutral-950 dark:text-neutral-50 underline">
                    matériel
                </span>
                et le moyen
                <span class="font-medium text-neutral-950 dark:text-neutral-50 underline">
                    logiciel
                </span>.
            </p>

            <div v-if="projectIntro.means" class="ml-5 sm:ml-6 md:ml-7 lg:ml-8">
                <li class="lg:text-lg font-semibold text-black dark:text-white">
                    Moyens matériels :
                </li>
                <div class="mt-3 mb-8">
                    <p
                        v-for="(intro, index) in projectIntro.means.intro_material"
                        :key="index"
                        class="text-sm lg:text-base text-neutral-700 dark:text-neutral-300 font-light text-justify"
                    >
                        {{ intro }}
                    </p>
                    <DataTable
                        :value="projectIntro.means.materials"
                        class="mt-5 border border-orange-500 dark:border-yellow-500 rounded-xl overflow-hidden"
                    >
                        <Column field="type" header="Type" />
                        <Column field="processor" header="Processeur" class="min-w-45" />
                        <Column field="ram" header="RAM" />
                        <Column field="disk" header="Disque Dur" class="min-w-30" />
                        <Column field="graph" header="Graphe" class="min-w-45" />
                        <Column field="number" header="Nombre" />
                    </DataTable>
                </div>

                <li class="lg:text-lg font-semibold text-black dark:text-white">
                    Moyens logiciels :
                </li>
                <div class="mt-3 mb-8">
                    <p
                        v-for="(intro, index) in projectIntro.means.intro_software"
                        :key="index"
                        class="text-sm lg:text-base text-neutral-700 dark:text-neutral-300 font-light text-justify"
                    >
                        {{ intro }}
                    </p>
                    <DataTable
                        :value="projectIntro.means.software"
                        class="mt-5 border border-orange-500 dark:border-yellow-500 rounded-xl overflow-hidden"
                    >
                        <Column field="design" header="Désignation" />
                        <Column field="usage" header="Utilisation" />
                    </DataTable>
                </div>
            </div>
        </div>

        <!-- Résultats attendus -->
        <div v-if="projectIntro.results" class="space-y-3">
            <h1 class="text-xl lg:text-2xl font-bold text-orange-600 dark:text-yellow-400">
                4. Résultats attendus :
            </h1>
            <p
                v-for="(intro, index) in projectIntro.results.intro"
                :key="index"
                class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 font-light text-justify"
            >
                {{ intro }}
            </p>

            <div
                v-for="(result, index) in projectIntro.results.lists"
                :key="index"
                class="ml-5 sm:ml-6 md:ml-7 lg:ml-8 mb-4"
            >
                <li class="lg:text-lg font-semibold text-black dark:text-white mb-2">
                    {{ result.title }}
                </li>
                <p
                    class="text-sm lg:text-base text-neutral-800 dark:text-neutral-200 font-light text-justify"
                >
                    {{ result.description }}
                </p>
            </div>
        </div>

        <div class="flex items-center justify-between gap-5">
            <Button
                @click="goBack"
                outlined
                class="border-orange-500 dark:border-yellow-500 text-orange-500 dark:text-yellow-500"
            >
                <ArrowLeft :size="20" />
                Revenir au precedent
            </Button>
            <Button
                outlined
                class="border-orange-500 dark:border-yellow-500 text-orange-500 dark:text-yellow-500"
            >
                Voir le conception
                <ArrowRight :size="20" />
            </Button>
        </div>
    </section>
</template>
