<script lang="ts">
    import { defineComponent, ref } from 'vue';

    interface Role {
        id: number;
        title: string;
        description: string;
    }

    export default defineComponent({
        name: 'ServiceSection',
        setup() {
            const rolesData: Role[] = [
                {
                    id: 1,
                    title: 'Fullstack Web & Mobile',
                    description:
                        'Je conçois et développe des applications web et mobiles performantes et responsives. De la planification à l’implémentation, je crée des interfaces intuitives et des fonctionnalités robustes pour offrir une expérience utilisateur optimale.',
                },
                {
                    id: 3,
                    title: 'Design UI/UX',
                    description:
                        'Je conçois des interfaces ergonomiques et esthétiques, alliant recherche utilisateur et design visuel. Mon approche vise à rendre chaque interaction claire, intuitive et agréable pour l’utilisateur.',
                },
                {
                    id: 4,
                    title: 'Ops & Déploiement',
                    description:
                        'Je gère l’intégration, le déploiement et la maintenance des applications. Avec Docker, CI/CD et monitoring, je garantis la disponibilité, la performance et la sécurité des services en production.',
                },
            ];

            const hoveredIndex = ref<number | null>(null);

            const setMouseHover = (index: number | null) => {
                hoveredIndex.value = index;
            };

            return { rolesData, hoveredIndex, setMouseHover };
        },
    });
</script>

<template>
    <section id="service" class="w-full py-20 bg-gray-100 dark:bg-gray-900">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid xl:grid-cols-2 gap-10 lg:gap-20 items-center">
                <div class="flex flex-col justify-center text-center md:text-left">
                    <p
                        class="text-emerald-500 text-xl md:text-[22px] lg:text-2xl xl:text-3xl font-semibold uppercase tracking-wide mb-6 md:mb-8 lg:mb-10 xl:mb-16"
                    >
                        Ce que je fais ?
                    </p>
                    <div
                        class="space-y-4 font-light text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-[17px] lg:text-[18px] xl:text-[19px]"
                    >
                        <p>
                            Je conçois et développe des applications web et mobiles performantes et
                            responsives, en alliant front-end intuitif et back-end robuste. Mon
                            travail couvre l’ensemble du cycle de vie des projets, de la conception
                            à la production, pour garantir une expérience utilisateur optimale.
                        </p>
                        <p>
                            Je combine créativité, design ergonomique et expertise technique pour
                            livrer des solutions complètes, scalables et sécurisées, tout en
                            assurant le déploiement et la maintenance via des pratiques DevOps
                            modernes.
                        </p>
                    </div>

                    <Button
                        label="Say Hello!"
                        class="w-fit mt-6 md:mt-10 font-semibold rounded-lg px-6 py-3 text-sm mx-auto md:mx-0 sm:text-base transition-colors duration-300"
                    />
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 md:gap-5 xl:grid-cols-1">
                    <div
                        v-for="(role, index) in rolesData"
                        :key="role.id"
                        @mouseenter="setMouseHover(index)"
                        @mouseleave="setMouseHover(null)"
                        class="relative p-6 border-2 border-emerald-50 dark:border-emerald-950 dark:hover:border-emerald-600 bg-white dark:bg-gray-950 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                        <div
                            class="absolute left-0 top-0 h-full bg-emerald-500 dark:bg-emerald-600 transition-all duration-300"
                            :class="hoveredIndex === index ? 'w-1' : 'w-0'"
                        ></div>

                        <div class="ml-4">
                            <h3
                                class="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-2"
                            >
                                {{ role.title }}
                            </h3>
                            <p
                                class="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed"
                            >
                                {{ role.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
