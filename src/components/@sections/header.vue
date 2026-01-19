<script lang="ts">
    import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
    import { useI18n } from 'vue-i18n';

    type NavItem = {
        id: string;
        label: string;
    };

    export default defineComponent({
        name: 'HeaderSection',
        setup() {
            const { t } = useI18n();
            const isOpen = ref(false);
            const itemActive = ref<string>('hero');
            const isScrolled = ref(false);

            const navItems: NavItem[] = [
                { id: 'about', label: 'navItems.about' },
                { id: 'service', label: 'navItems.service' },
                { id: 'experience', label: 'navItems.experience' },
                { id: 'project', label: 'navItems.project' },
                { id: 'skill', label: 'navItems.skill' },
                { id: 'contact', label: 'navItems.contact' },
            ];

            const scrollToSection = (id: string) => {
                itemActive.value = id;
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            };

            const handleScroll = () => {
                isScrolled.value = window.scrollY > 40;
            };

            onMounted(() => {
                window.addEventListener('scroll', handleScroll, { passive: true });
            });

            onUnmounted(() => {
                window.removeEventListener('scroll', handleScroll);
            });

            return {
                t,
                isOpen,
                navItems,
                itemActive,
                isScrolled,
                scrollToSection,
            };
        },
    });
</script>

<template>
    <header
        class="sticky top-0 z-50 w-full transition-[background,backdrop-filter,box-shadow] duration-300 ease-out"
        :class="isScrolled ? 'backdrop-blur-3xl shadow-sm' : 'bg-transparent'"
    >
        <nav class="max-w-7xl mx-auto px-4">
            <div
                class="flex items-center justify-between transition-[height] duration-300 ease-out"
                :class="[isScrolled ? 'h-16 sm:h-16 lg:h-16' : 'h-20 sm:h-16 lg:h-20']"
            >
                <div class="flex items-center gap-3 transition-all duration-300 ease-out">
                    <TerminalIcon :size="26" class="text-green-700 dark:text-green-400" />

                    <h5
                        class="text-xl font-semibold tracking-tight bg-linear-to-r from-green-700 via-green-600 to-green-500 dark:from-green-400 dark:via-green-500 dark:to-green-600 bg-clip-text text-transparent select-none"
                    >
                        Coder.
                    </h5>
                </div>

                <ul
                    class="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-600 dark:text-neutral-400"
                >
                    <li
                        v-for="item in navItems"
                        :key="item.id"
                        @click="() => scrollToSection(item.id)"
                        class="relative cursor-pointer py-1 transition-colors duration-200 ease-out"
                        :class="
                            item.id === itemActive
                                ? 'text-green-700 dark:text-green-400'
                                : 'hover:text-neutral-900 dark:hover:text-neutral-200'
                        "
                    >
                        {{ t(item.label) }}

                        <span
                            class="absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 bg-green-600 dark:bg-green-400 transition-all duration-300 ease-out"
                            :class="item.id === itemActive ? 'w-8 opacity-100' : 'w-0 opacity-0'"
                        />
                    </li>
                </ul>

                <div class="flex items-center gap-3 transition-all duration-300 ease-out">
                    <ToggleLocale />

                    <span
                        class="hidden lg:block h-4 border-l border-neutral-300 dark:border-neutral-700"
                    />

                    <ToggleMode class="hidden lg:block" />

                    <Button
                        class="lg:hidden"
                        size="small"
                        variant="outlined"
                        severity="secondary"
                        @click="isOpen = !isOpen"
                    >
                        <CloseIcon v-if="isOpen" :size="20" />
                        <Menu v-else :size="20" />
                    </Button>
                </div>
            </div>

            <div
                class="sm:flex sm:items-center sm:justify-between lg:hidden overflow-hidden transition-all duration-300 ease-out"
                :class="isOpen ? 'max-h-105 opacity-100' : 'max-h-0 opacity-0'"
            >
                <ul
                    class="flex sm:flex-row flex-col gap-6 py-6 text-base font-medium text-neutral-700 dark:text-neutral-300"
                >
                    <li
                        v-for="item in navItems"
                        :key="item.id"
                        @click="
                            itemActive = item.id;
                            isOpen = false;
                        "
                        class="relative cursor-pointer transition-colors duration-200 ease-out"
                        :class="
                            item.id === itemActive
                                ? 'text-green-700 dark:text-green-400'
                                : 'hover:text-neutral-900 dark:hover:text-neutral-200'
                        "
                    >
                        {{ t(item.label) }}

                        <span
                            class="absolute left-0 -bottom-1 h-0.5 bg-green-600 dark:bg-green-400 transition-all duration-300 ease-out"
                            :class="item.id === itemActive ? 'w-10 opacity-100' : 'w-0 opacity-0'"
                        />
                    </li>
                </ul>

                <div class="pb-6 sm:pb-0">
                    <ToggleMode />
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped></style>
