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
    <section id="footer" class="w-full bg-gray-950 dark:bg-gray-900 text-gray-200">
        <div
            class="max-w-7xl mx-auto pt-12 lg:pt-20 xl:pt-32 pb-10 px-6 md:px-12 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10"
        >
            <div class="flex flex-col items-center lg:items-start gap-4 lg:w-1/3">
                <div
                    class="flex items-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-105"
                    @click="() => scrollToSection('hero')"
                >
                    <TerminalIcon :size="32" class="text-emerald-400" />
                    <h5
                        class="text-2xl font-bold bg-linear-to-r from-emerald-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent select-none"
                    >
                        DevOps.
                    </h5>
                </div>
                <p class="text-gray-300 leading-relaxed">{{ t('footer.message1') }}</p>
            </div>

            <div class="lg:w-1/3 text-center">
                <p class="text-sm text-gray-400">© {{ currentYear }} - {{ t('footer.droit') }}</p>
                <p class="mt-1 text-gray-400">{{ t('footer.message2') }}</p>
                <p class="mt-4 text-sm text-gray-500">Vue 3 + TypeScript + Vite + PrimeVue</p>
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
