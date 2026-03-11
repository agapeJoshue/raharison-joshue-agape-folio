<script lang="ts">
    import { defineComponent, onMounted, ref, nextTick, watch } from 'vue';
    import { useRoute, useRouter } from 'vue-router';
    import { projectsData, type Project } from '../data/projects.data';

    type Section = 'hero' | 'introduction' | 'conception' | 'demo' | 'code';

    export default defineComponent({
        name: 'ProjectDemoPage',
        setup() {
            const route = useRoute();
            const router = useRouter();

            const top = ref<HTMLElement | null>(null);

            const scrollToTop = async () => {
                await nextTick();
                top.value?.scrollIntoView({ behavior: 'smooth' });
            };

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
                    scrollToTop();
                },
            );

            const onNext = (type: 'back' | 'next') => {
                switch (sectionShow.value) {
                    case 'introduction':
                        router.push({
                            path: route.path,
                            query: { action: type === 'back' ? 'hero' : 'conception' },
                        });
                        sectionShow.value = type === 'back' ? 'hero' : 'conception';
                        break;
                    case 'conception':
                        router.push({
                            path: route.path,
                            query: { action: type === 'back' ? 'introduction' : 'code' },
                        });
                        sectionShow.value = type === 'back' ? 'introduction' : 'code';
                        break;
                    case 'code':
                        router.push({
                            path: route.path,
                            query: { action: type === 'back' ? 'conception' : 'demo' },
                        });
                        sectionShow.value = type === 'back' ? 'conception' : 'demo';
                        break;
                    case 'demo':
                        router.push({
                            path: route.path,
                            query: { action: type === 'back' ? 'code' : 'hero' },
                        });
                        sectionShow.value = type === 'back' ? 'code' : 'hero';
                        break;
                }
            };

            return {
                top,
                sectionShow,
                project,
                onAction,
                onClose,
                onNext,
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
        <span ref="top" />
        <ProjectHero
            v-if="sectionShow === 'hero' && project"
            :project="project"
            @on-action="onAction"
        />
        <ProjectIntroduction
            v-if="sectionShow === 'introduction' && project"
            :introduction="project.introduction"
            @on-close="onClose"
            @on-next="onNext"
        />
        <ProjectConception
            v-if="sectionShow === 'conception'"
            @on-close="onClose"
            @on-next="onNext"
        />
        <ProjectPresentation v-if="sectionShow === 'demo'" @on-close="onClose" @on-next="onNext" />
        <ProjectDevelopment v-if="sectionShow === 'code'" @on-close="onClose" @on-next="onNext" />
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
