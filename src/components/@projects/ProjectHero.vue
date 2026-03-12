<script lang="ts">
    import { useI18n } from 'vue-i18n';
    import { computed, defineComponent, onMounted, onUnmounted, ref, type PropType } from 'vue';
    import type { Project } from '../../data/projects.data';

    export default defineComponent({
        name: 'ProjectMenu',
        props: {
            project: { type: Object as PropType<Project>, required: true },
        },
        emits: ['on-action'],
        setup(props, { emit }) {
            const { t } = useI18n();
            const currentYear = new Date().getFullYear();
            const width = ref<number>(window.innerWidth);

            const project = computed(() => props.project);

            const handleResize = (): void => {
                width.value = window.innerWidth;
            };

            onMounted(() => {
                window.addEventListener('resize', handleResize);
            });

            onUnmounted(() => {
                window.removeEventListener('resize', handleResize);
            });

            const onAction = (type: 'introduction' | 'conception' | 'demo' | 'code') => {
                emit('on-action', type);
            };

            return { t, width, currentYear, project, onAction };
        },
    });
</script>

<template>
    <section class="relative w-full min-h-screen flex flex-col items-center justify-center px-4">
        <div class="relative mb-50 lg:mb-32">
            <div
                class="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+75px)] border-2 border-orange-600 dark:border-yellow-400 w-18 h-18 md:w-20 md:h-20 lg:w-22 lg:h-22 xl:w-25 xl:h-25 rounded-full flex items-center justify-center"
            >
                <Gem
                    :size="width <= 768 ? 25 : width <= 1024 ? 30 : width <= 1280 ? 35 : 40"
                    class="text-orange-600 dark:text-yellow-400 font-light"
                />
                <span
                    class="border h-18.75 border-orange-600 dark:border-yellow-400 absolute left-1/2 -translate-x-1/2 top-full"
                />
            </div>

            <div
                class="relative border-y-2 max-w-5xl w-full border-orange-600 dark:border-yellow-400 overflow-hidden main-container flex flex-col items-center justify-center px-8"
            >
                <h1
                    class="text-gray-950 dark:text-white text-center text-2xl lg:text-3xl xl:text-4xl uppercase font-bold mb-8 tracking-[0.5rem] xl:tracking-[0.75rem]"
                >
                    {{ project.project_name }}
                </h1>
                <p
                    class="text-sm lg:text-[15px] xl:text-base font-medium uppercase text-center text-zinc-700 dark:text-zinc-200 tracking-[0.05rem] leading-6.5 lg:leading-7 xl:leading-8"
                >
                    {{ project.project_description }}
                </p>
            </div>

            <div
                class="absolute left-1/2 w-full [@media(width>=400px)]:w-sm [@media(width>=50rem)]:w-3xl -translate-x-1/2 top-[calc(100%+75px)] border-2 border-orange-600 dark:border-yellow-400 text-orange-600 dark:text-yellow-400 grid grid-cols-2 [@media(width>=50rem)]:grid-cols-4 rounded-lg"
            >
                <span
                    class="border h-18.75 border-orange-600 dark:border-yellow-400 absolute left-[49.9%] -translate-x-1/2 bottom-full"
                />
                <!-- @click="onAction('introduction')" -->
                <button
                    class="px-5 py-4 text-sm uppercase text-center border-r-2 border-b-2 [@media(width>=50rem)]:border-b-0 border-orange-600 dark:border-yellow-400 hover:bg-orange-50 dark:hover:bg-yellow-500/15 transition-colors cursor-pointer over"
                >
                    introduction
                </button>
                <!-- @click="onAction('conception')" -->
                <button
                    class="px-5 py-4 text-sm uppercase text-center border-b-2 [@media(width>=50rem)]:border-b-0 [@media(width>=50rem)]:border-r-2 border-orange-600 dark:border-yellow-400 last:border-none hover:bg-orange-50 dark:hover:bg-yellow-500/15 transition-colors cursor-pointer"
                >
                    conception
                </button>
                <!-- @click="onAction('code')" -->
                <button
                    class="px-5 py-4 text-sm uppercase text-center border-r-2 border-orange-600 dark:border-yellow-400 last:border-none hover:bg-orange-50 dark:hover:bg-yellow-500/15 transition-colors cursor-pointer"
                >
                    Developpement
                </button>
                <!-- @click="onAction('demo')" -->
                <button
                    class="px-5 py-4 text-sm uppercase text-center border-r-2 border-orange-600 dark:border-yellow-400 last:border-none hover:bg-orange-50 dark:hover:bg-yellow-500/15 transition-colors cursor-pointer"
                >
                    presentation
                </button>
            </div>
        </div>

        <router-link to="/" class="absolute bottom-20">
            <Button
                class="font-medium px-5 py-2.5 text-sm bg-orange-500 hover:bg-orange-400 dark:bg-yellow-500 dark:hover:bg-yellow-400 border-none"
            >
                portfolio
            </Button>
        </router-link>

        <p class="absolute bottom-8 text-base text-gray-700 dark:text-gray-300">
            © {{ currentYear }} - {{ t('footer.droit') }}
        </p>
    </section>
</template>

<style scoped>
    .main-container {
        animation: openContainer 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        animation-delay: 0.3s;
    }
    @keyframes openContainer {
        from {
            height: 0;
        }
        to {
            height: 300px;
        }
    }
</style>
