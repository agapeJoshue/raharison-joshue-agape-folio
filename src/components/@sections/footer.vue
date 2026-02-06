<script lang="ts">
    import { defineComponent } from 'vue';
    import { useI18n } from 'vue-i18n';

    export default defineComponent({
        name: 'FooterSection',
        setup() {
            const { t } = useI18n();
            const currentYear = new Date().getFullYear();

            const scrollToSection = (id: string) => {
                const element = document.getElementById(id);
                if (!element) return;
                const offset = element.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth',
                });
            };

            return { t, currentYear, scrollToSection };
        },
    });
</script>

<template>
    <section
        id="footer"
        class="w-full bg-gray-950 dark:bg-gray-900 text-gray-200 z-10"
        v-animateonscroll="{
            enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000',
        }"
    >
        <div
            class="max-w-7xl mx-auto pt-25 md:pt-20 lg:pt-20 xl:pt-33 pb-10 px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10"
        >
            <div class="flex flex-col items-center lg:items-start gap-4 lg:w-1/3">
                <div
                    class="flex items-center gap-3 transition-all duration-300 ease-out"
                    @click="() => scrollToSection('hero')"
                >
                    <Gem :size="28" :class="['text-orange-500', 'dark:text-yellow-400']" />

                    <h5
                        :class="[
                            'text-[22px] font-bold tracking-tight select-none',
                            'text-orange-500',
                            'dark:text-yellow-400',
                        ]"
                    >
                        Raharison<span :class="['text-orange-400', 'dark:text-yellow-300']">.</span>
                    </h5>
                </div>
                <p class="text-gray-300 leading-relaxed">{{ t('footer.message1') }}</p>
            </div>

            <div class="lg:w-1/3 text-center space-y-2.5">
                <p :class="['text-base text-gray-300']">
                    © {{ currentYear }} - {{ t('footer.droit') }}
                </p>
                <p :class="['text-base text-gray-300']">{{ t('footer.message2') }}</p>
                <p :class="['text-base text-gray-400']">Vue 3 + TypeScript + Vite + PrimeVue</p>
            </div>

            <div class="lg:w-1/3 flex flex-col items-center lg:items-end gap-4">
                <h3 class="text-base font-bold text-neutral-400 mb-4">
                    {{ t('footer.follow_me') }}
                </h3>
                <div class="flex gap-3">
                    <SocialIcon tooltip="Facebook" link="#" class="group">
                        <Facebook
                            class="transition-transform transform hover:scale-125 hover:text-white"
                        />
                    </SocialIcon>
                    <SocialIcon tooltip="Instagram" link="#" class="group">
                        <Instagram
                            class="transition-transform transform hover:scale-125 hover:text-white"
                        />
                    </SocialIcon>
                    <SocialIcon tooltip="LinkedIn" link="#" class="group">
                        <Linkedin
                            class="transition-transform transform hover:scale-125 hover:text-white"
                        />
                    </SocialIcon>
                    <SocialIcon tooltip="GitHub" link="#" class="group">
                        <Github
                            class="transition-transform transform hover:scale-125 hover:text-white"
                        />
                    </SocialIcon>
                    <SocialIcon tooltip="GitLab" link="#" class="group">
                        <Gitlab
                            class="transition-transform transform hover:scale-125 hover:text-white"
                        />
                    </SocialIcon>
                </div>
            </div>
        </div>
    </section>
</template>
