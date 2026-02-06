<script lang="ts">
    import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
    import { useI18n } from 'vue-i18n';

    export default defineComponent({
        name: 'HeroSection',
        setup() {
            const { t } = useI18n();
            const isScrolled = ref(false);
            const isPad = ref(false);

            const resumes = [
                { value: '3+', label: 'hero.resumes.experience' },
                { value: '10+', label: 'hero.resumes.project' },
                { value: '6+', label: 'hero.resumes.service' },
            ];

            const handleScroll = () => {
                isScrolled.value = window.scrollY > 40;
            };

            const handleResize = () => {
                isPad.value = window.innerHeight > 1000;
            };

            onMounted(() => {
                handleScroll();
                handleResize();

                window.addEventListener('scroll', handleScroll, { passive: true });
                window.addEventListener('resize', handleResize, { passive: true });
            });

            onUnmounted(() => {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', handleResize);
            });

            return {
                t,
                isScrolled,
                isPad,
                resumes,
            };
        },
    });
</script>

<template>
    <section
        id="hero"
        :class="[
            'w-full pb-10 flex items-start lg:items-center transition-[min-height] duration-300 ease-out',
            'bg-white/60',
            'dark:bg-zinc-900/60',
            isScrolled
                ? `${isPad ? 'min-h-175' : 'min-h-[calc(100vh-4rem)]'}`
                : `${isPad ? 'min-h-175' : 'min-h-[calc(100vh-5rem)]'}`,
        ]"
    >
        <div :class="['w-full max-w-340 mx-auto px-5 pt-10']">
            <div
                :class="[
                    'flex flex-col md:flex-row-reverse items-center justify-between gap-16 lg:gap-12',
                ]"
            >
                <div
                    :class="[
                        'relative group w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-square overflow-hidden rounded-tl-xl rounded-tr-[50%] rounded-br-xl rounded-bl-[50%] sm:rounded-tl-[50%] sm:rounded-br-[50%] md:rounded-tr-xl md:rounded-bl-xl border-4 transition-all duration-500 ease-out',
                        'border-orange-300',
                        'dark:border-orange-300',
                    ]"
                >
                    <span
                        class="absolute inset-0 rounded-inherit pointer-events-none border-4 border-transparent profile-border-animate"
                    ></span>

                    <img
                        src="/profiles/img-profile-01.jpg"
                        alt="Profile"
                        :class="[
                            'w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 profile-image',
                        ]"
                    />
                </div>

                <div
                    :class="['w-full max-w-xl text-center md:text-left space-y-7 md:mt-16 lg:mt-0']"
                >
                    <p
                        :class="[
                            'text-base font-medium tracking-widest uppercase',
                            'text-neutral-700',
                            'dark:text-neutral-300',
                        ]"
                    >
                        {{ t('hero.hello') }}
                    </p>
                    <h1
                        :class="[
                            'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-shadow-2xs',
                        ]"
                    >
                        <span :class="['text-orange-500', 'dark:text-yellow-500']">Joshué</span>
                        <span :class="['ml-4', 'text-neutral-900', 'dark:text-neutral-50']">
                            Agapé
                        </span>
                    </h1>
                    <h2
                        :class="[
                            'relative inline-block text-lg sm:text-xl font-semibold',
                            'text-black',
                            'dark:text-white',
                        ]"
                    >
                        {{ t('hero.title') }}
                        <span
                            :class="[
                                'hidden md:flex absolute -bottom-2 left-0 h-0.5 w-1/2 bg-linear-to-r to-transparent',
                                'from-orange-600',
                                'dark:from-yellow-400',
                            ]"
                        />
                    </h2>
                    <p
                        :class="[
                            'leading-relaxed mt-4',
                            'text-neutral-600',
                            'dark:text-neutral-300',
                        ]"
                    >
                        {{ t('hero.description') }}
                    </p>

                    <div :class="['md:hidden grid lg:grid grid-cols-3 gap-x-3 mt-20']">
                        <div
                            v-for="(resume, i) in resumes"
                            :key="i"
                            :class="[
                                'text-center p-5 rounded-md backdrop-blur-xl hover:scale-[1.03] transition-all border space-y-1.5',
                                'bg-orange-400/10 border-orange-400',
                                'dark:bg-yellow-400/10 dark:border-yellow-600',
                            ]"
                        >
                            <p
                                :class="[
                                    'font-bold text-lg sm:text-xl lg:text-2xl',
                                    'text-neutral-800',
                                    'dark:text-neutral-100',
                                ]"
                            >
                                {{ resume.value }}
                            </p>
                            <p
                                :class="[
                                    'text-xs lg:text-sm font-medium',
                                    'text-neutral-600',
                                    'dark:text-neutral-300',
                                ]"
                            >
                                {{ t(resume.label) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div :class="['hidden max-w-145 mx-auto md:grid lg:hidden grid-cols-3 gap-x-3 mt-20']">
                <div
                    v-for="(resume, i) in resumes"
                    :key="i"
                    :class="[
                        'text-center p-5 rounded-md backdrop-blur-lg border space-y-1.5',
                        'bg-orange-400/10 border-orange-400',
                        'dark:bg-yellow-400/10 dark:border-yellow-600',
                    ]"
                >
                    <p :class="['font-bold text-xl', 'text-neutral-800', 'dark:text-neutral-100']">
                        {{ resume.value }}
                    </p>
                    <p
                        :class="[
                            'text-sm font-medium',
                            'text-neutral-600',
                            'dark:text-neutral-300',
                        ]"
                    >
                        {{ t(resume.label) }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    @keyframes float {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-12px);
        }
    }

    @keyframes borderGlow {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
