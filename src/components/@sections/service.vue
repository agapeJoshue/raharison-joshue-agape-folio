<script lang="ts">
    import { defineComponent } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { services } from '../../data/service.data';

    export default defineComponent({
        name: 'ServiceSection',
        setup() {
            const { t } = useI18n();

            return { t, services };
        },
    });
</script>

<template>
    <section id="service" :class="['w-full py-20', 'bg-white/60', 'dark:bg-black/60']">
        <div :class="['max-w-7xl mx-auto px-4']">
            <div :class="['grid xl:grid-cols-2 gap-10 lg:gap-20 items-center']">
                <div :class="['flex flex-col justify-center text-center md:text-left']">
                    <p
                        :class="[
                            'text-2xl md:text-[25px] lg:text-3xl xl:text-4xl font-bold uppercase tracking-wide mb-6 md:mb-8 lg:mb-10 xl:mb-16',
                            'text-orange-600',
                            'dark:text-yellow-400',
                        ]"
                    >
                        {{ t('service.what_i_do') }}
                    </p>
                    <div
                        :class="[
                            'space-y-4 font-medium text-lg',
                            'text-neutral-700',
                            'dark:text-neutral-300',
                        ]"
                    >
                        <p>{{ t('service.response.r1') }}</p>
                        <p>{{ t('service.response.r2') }}</p>
                    </div>

                    <Button
                        :label="t('service.say_hello')"
                        :class="[
                            'w-fit mt-6 md:mt-10 font-semibold rounded-lg px-5 py-2.5 text-sm mx-auto md:mx-0 sm:text-base transition-colors duration-300',
                            'bg-orange-500 border-orange-500 hover:bg-orange-500/90 hover:border-orange-500/90',
                            'dark:bg-yellow-500 dark:border-yellow-500 dark:hover:bg-yellow-500/90 dark:hover:border-yellow-500/90',
                        ]"
                    />
                </div>

                <div :class="['grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-5 xl:grid-cols-1']">
                    <div
                        v-for="role in services"
                        :key="role.id"
                        :class="[
                            'relative p-6 group border rounded-xl shadow-md hover:shadow-xl backdrop-blur-lg transition-shadow duration-300 overflow-hidden',
                            'bg-white/80 border-white/80 hover:border-orange-500',
                            'dark:bg-zinc-900/80 dark:border-zinc-800 dark:hover:border-yellow-400',
                        ]"
                    >
                        <div
                            :class="[
                                'absolute left-0 top-0 h-full transition-all w-0 group-hover:w-1 duration-300',
                                'bg-orange-400',
                                'dark:bg-yellow-500',
                            ]"
                        />

                        <div class="ml-4">
                            <h3
                                :class="[
                                    'text-xl sm:text-2xl font-semibold mb-2',
                                    'text-black',
                                    'dark:text-white',
                                ]"
                            >
                                {{ t(role.title) }}
                            </h3>
                            <p
                                :class="[
                                    'text-sm sm:text-base leading-relaxed',
                                    'text-neutral-600',
                                    'dark:text-neutral-300',
                                ]"
                            >
                                {{ t(role.description) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
