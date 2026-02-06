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
            const showBtnScrollTop = ref(false);

            const HEADER_OFFSET = isScrolled ? 64 : 80;

            const navItems: NavItem[] = [
                { id: 'about', label: 'navItems.about' },
                { id: 'project', label: 'navItems.project' },
                { id: 'experience', label: 'navItems.experience' },
                { id: 'service', label: 'navItems.service' },
                { id: 'skill', label: 'navItems.skill' },
                { id: 'contact', label: 'navItems.contact' },
            ];

            const scrollToSection = (id: string) => {
                const element = document.getElementById(id);
                if (!element) return;

                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - HEADER_OFFSET;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            };

            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                // console.log(scrollPosition)
                isScrolled.value = scrollPosition > 40;
                showBtnScrollTop.value = scrollPosition > 720;

                const sections = document.querySelectorAll('section[id]');

                let currentSectionId = itemActive.value;

                sections.forEach((section) => {
                    const rect = section.getBoundingClientRect();
                    const sectionTop = rect.top + window.scrollY - (HEADER_OFFSET + 5);
                    const sectionBottom = sectionTop + rect.height;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                        currentSectionId = section.id;
                    }
                });

                itemActive.value = currentSectionId;
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
                showBtnScrollTop,
            };
        },
    });
</script>

<template>
    <header
        :class="[
            'sticky top-0 z-50 w-full transition-[background,backdrop-filter,box-shadow] duration-300 ease-out',
            isScrolled
                ? [
                      'backdrop-blur-2xl shadow-xs',
                      'bg-white/80 shadow-neutral-200',
                      'dark:bg-zinc-900/80 dark:shadow-neutral-800',
                  ]
                : ['bg-white/60', 'dark:bg-zinc-900/60'],
        ]"
    >
        <nav class="max-w-340 mx-auto px-4">
            <div
                :class="[
                    'flex items-center justify-between transition-[height] duration-300 ease-out',
                    isScrolled ? 'h-16 sm:h-16 lg:h-16' : 'h-20 sm:h-16 lg:h-20',
                ]"
            >
                <!-- LOGO -->
                <div
                    class="flex items-center gap-3 transition-all duration-300 ease-out"
                    @click="() => scrollToSection('hero')"
                >
                    <Gem :size="28" :class="['text-orange-600', 'dark:text-yellow-400']" />

                    <h5
                        :class="[
                            'text-[22px] font-bold tracking-tight select-none',
                            'text-orange-600',
                            'dark:text-yellow-400',
                        ]"
                    >
                        Raharison<span :class="['text-orange-400', 'dark:text-yellow-300']">.</span>
                    </h5>
                </div>

                <!-- NAV ITEM DESKTOP -->
                <ul
                    :class="[
                        'hidden lg:flex items-center gap-8 text-[15px] font-semibold',
                        'text-neutral-600',
                        'dark:text-neutral-400',
                    ]"
                >
                    <li
                        v-for="item in navItems"
                        :key="item.id"
                        @click="() => scrollToSection(item.id)"
                        :class="[
                            'relative cursor-pointer py-1 transition-colors duration-200 ease-out',
                            item.id === itemActive
                                ? ['text-orange-600', 'dark:text-yellow-400']
                                : ['hover:text-neutral-900', 'dark:hover:text-zinc-100'],
                        ]"
                    >
                        {{ t(item.label) }}

                        <span
                            :class="[
                                'absolute left-1/2 -translate-x-1/2 -bottom-1 rounded-full h-0.75 transition-all duration-300 ease-out',
                                'bg-orange-500',
                                'dark:bg-yellow-400',
                                item.id === itemActive ? 'w-8 opacity-100' : 'w-0 opacity-0',
                            ]"
                        />
                    </li>
                </ul>

                <div class="flex items-center gap-3 transition-all duration-300 ease-out">
                    <ToggleLocale />

                    <span
                        :class="[
                            'hidden lg:block h-4 border-l',
                            'border-neutral-300',
                            'dark:border-neutral-700',
                        ]"
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
                :class="[
                    'sm:flex sm:items-center sm:justify-between lg:hidden overflow-hidden transition-all duration-300 ease-out',
                    isOpen ? 'max-h-105 opacity-100' : 'max-h-0 opacity-0',
                ]"
            >
                <ul
                    :class="[
                        'flex sm:flex-row flex-col gap-6 py-6 text-base font-medium',
                        'text-neutral-700',
                        'dark:text-neutral-300',
                    ]"
                >
                    <li
                        v-for="item in navItems"
                        :key="item.id"
                        @click="() => scrollToSection(item.id)"
                        :class="[
                            'relative cursor-pointer transition-colors duration-200 ease-out',
                            item.id === itemActive
                                ? ['text-orange-600', 'dark:text-yellow-400']
                                : ['hover:text-neutral-900', 'dark:hover:text-zinc-100'],
                        ]"
                    >
                        {{ t(item.label) }}
                        <span
                            :class="[
                                'absolute left-0 -bottom-1 h-0.5 transition-all duration-300 ease-out',
                                'bg-orange-500',
                                'dark:bg-yellow-400',
                                item.id === itemActive ? 'w-10 opacity-100' : 'w-0 opacity-0',
                            ]"
                        />
                    </li>
                </ul>

                <ToggleMode class="pb-6 sm:pb-0" />
            </div>
        </nav>
    </header>

    <button
        @click="() => scrollToSection('hero')"
        v-if="showBtnScrollTop"
        :class="[
            'fixed bottom-10 right-10 w-16 h-16 hover:scale-[1.1] rounded-full flex items-center justify-center z-50 animate-bounce cursor-pointer transition-all',
            'bg-orange-500 hover:bg-orange-500/90 text-white',
            'dark:bg-yellow-500 dark:hover:bg-yellow-500/90',
        ]"
    >
        <ChevronUp :size="40" />
    </button>
</template>
