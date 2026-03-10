<script lang="ts">
    import { defineComponent, onMounted, ref, watch } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { projectsData, type Project } from '../data/projects.data';

    type Section = 'hero' | 'introduction' | 'conception' | 'demo' | 'code';

    export default defineComponent({
        name: 'ProjectDemoPage',
        setup() {
            const route = useRoute();
            const router = useRouter();

            const project = ref<Project | null>(null);

            const sectionShow = ref<Section>('hero');

            onMounted(() => {
                const project_uuid = route.params.project_uuid as string;
                if (project_uuid) {
                    const projectData = projectsData.find((p) => p.uuid === project_uuid);
                    project.value = projectData as Project;
                }

                const action = route.query.action;

                if (typeof action === 'string') {
                    sectionShow.value = action as Section;
                } else {
                    sectionShow.value = 'hero';
                }

                const backgroundSvg = document.getElementById('backgroundSvg');
                if (backgroundSvg) {
                    backgroundSvg.classList.add('show');
                }
            });

            const onAction = (type: Section) => {
                router.push({
                    path: route.path,
                    query: { action: type },
                });

                sectionShow.value = type;
            };

            const onClose = () => {
                sectionShow.value = 'hero';

                router.push({
                    path: route.path,
                    query: {},
                });
            };

            watch(
                () => route.fullPath,
                () => {
                    const action = route.query.action;

                    if (typeof action === 'string') {
                        sectionShow.value = action as Section;
                    } else {
                        sectionShow.value = 'hero';
                    }
                },
            );

            return {
                sectionShow,
                project,
                onAction,
                onClose,
            };
        },
    });
</script>

<template>
    <main
        :class="[
            'w-full min-h-screen backdrop-blur-[10rem]',
            sectionShow === 'hero' ? 'p-0' : 'lg:py-20',
        ]"
    >
        <ProjectHero
            v-if="sectionShow === 'hero' && project"
            :project="project"
            @on-action="onAction"
        />
        <ProjectIntroduction
            v-if="sectionShow === 'introduction' && project"
            :introduction="project.introduction"
            @on-close="onClose"
        />
        <ProjectConception v-if="sectionShow === 'conception'" @on-close="onClose" />
        <ProjectPresentation v-if="sectionShow === 'demo'" @on-close="onClose" />
        <ProjectDevelopment v-if="sectionShow === 'code'" @on-close="onClose" />
    </main>
</template>

<style scoped>
    main {
        animation: bg-animate 1.2s ease-in both;
        animation-delay: 1s;
    }

    @keyframes bg-animate {
        from {
            background: var(--color-white);
        }
        to {
            background: #ffffff96;
        }
    }

    .dark main {
        animation: bg-animate-dark 1.2s ease-in both;
        animation-delay: 1s;
    }

    @keyframes bg-animate-dark {
        from {
            background: var(--color-black);
        }
        to {
            background: #000000ad;
        }
    }
</style>
