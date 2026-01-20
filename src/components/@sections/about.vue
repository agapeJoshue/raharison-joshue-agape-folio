<script lang="ts">
    import { defineComponent } from 'vue';
    import { useI18n } from 'vue-i18n';

    export default defineComponent({
        name: 'AboutSection',

        setup() {
            const { t } = useI18n();

            const socials = [
                { name: 'Facebook', icon: 'pi pi-facebook', url: '#' },
                { name: 'LinkedIn', icon: 'pi pi-linkedin', url: '#' },
                { name: 'Instagram', icon: 'pi pi-instagram', url: '#' },
                { name: 'Website', icon: 'pi pi-globe', url: '#' },
            ];

            const formations = [
                {
                    year: '2024',
                    title: 'Licence Professionnelle — Génie Logiciel & Bases de Données',
                    place: 'Université de Fianarantsoa · École Nationale d’Informatique',
                },
                {
                    year: '2021',
                    title: 'Baccalauréat Scientifique — Série C',
                    place: 'Lycée Saint-Joseph de Cluny, Fianarantsoa',
                },
            ];

            const scrollToSection = (id: string) => {
                const element = document.getElementById(id);

                if (!element) return;

                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - 64;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            };

            return { t, socials, formations, scrollToSection };
        },
    });
</script>

<template>
    <section
        id="about"
        class="relative w-full pb-12 bg-linear-to-b from-zinc-50 to-zinc-100 dark:from-zinc-950 dark:to-zinc-900"
    >
        <div class="max-w-400 mx-auto">
            <div
                class="bg-linear-to-b from-white to-transparent dark:from-black rounded-4xl lg:rounded-[4rem] personal-shadow px-6 pt-10 lg:p-16 2xl:px-25 space-y-16"
            >
                <div class="text-center space-y-5 mb-10">
                    <h1
                        class="text-xl md:text-2xl font-bold tracking-[0.35em] uppercase text-zinc-900 dark:text-zinc-100"
                    >
                        À propos
                    </h1>

                    <p
                        class="text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed"
                    >
                        Découvrez mon parcours, mes compétences et mon approche du développement
                        logiciel moderne.
                    </p>

                    <div
                        class="mx-auto h-0.5 w-100 bg-linear-to-r from-transparent via-emerald-400/70 dark:via-emerald-600/70 to-transparent"
                    />
                </div>

                <div class="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 2xl:gap-25 items-center">
                    <div class="relative">
                        <div
                            class="relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
                        >
                            <img
                                src="/imgs/19362653.jpg"
                                alt="Portrait"
                                class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>

                        <div class="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
                            <Button
                                @click="() => scrollToSection('project')"
                                label="Mes projets"
                                class="px-6 bg-emerald-600 text-white dark:text-black dark:bg-emerald-400"
                            />

                            <Button
                                label="Télécharger le CV"
                                outlined
                                class="px-6 border-black text-black dark:border-white dark:text-white"
                            >
                                <template #icon>
                                    <Download class="mr-1" />
                                </template>
                            </Button>
                        </div>
                    </div>

                    <div class="space-y-16">
                        <div class="space-y-6">
                            <h2 class="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                                Mon parcours
                            </h2>

                            <p class="text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-prose">
                                Développeur web passionné avec plus de 3 ans d’expérience, je
                                conçois des applications modernes, performantes et centrées sur
                                l’utilisateur. Mon évolution repose sur une veille technologique
                                constante et des projets concrets orientés qualité, maintenabilité
                                et performance.
                            </p>
                        </div>

                        <section class="space-y-10">
                            <h3
                                class="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-900 dark:text-zinc-100"
                            >
                                Formations
                            </h3>

                            <ul
                                className="space-y-8 border-l-2 border-neutral-300 dark:border-neutral-700 ml-2"
                            >
                                <li
                                    v-for="(formation, i) in formations"
                                    :key="i"
                                    className="relative space-y-1 pl-6"
                                >
                                    <span
                                        class="absolute w-5 h-5 right-full bottom-full translate-x-2 translate-y-6 backdrop-blur-3xl flex items-center justify-center rounded-full"
                                    >
                                        <CircleCheckBig
                                            :size="20"
                                            class="text-emerald-600 dark:text-emerald-400"
                                        />
                                    </span>
                                    <p
                                        className="text-sm flex items-center gap-2 tracking-widest uppercase text-neutral-500 dark:text-neutral-300"
                                    >
                                        <CalendarFold :size="18" /> {{ formation.year }}
                                    </p>
                                    <h3
                                        className="font-semibold mt-2 text-neutral-900 dark:text-neutral-100 text-base"
                                    >
                                        {{ formation.title }}
                                    </h3>
                                    <p className="text-xs text-neutral-600 dark:text-neutral-400">
                                        {{ formation.place }}
                                    </p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .personal-shadow {
        box-shadow: 0 -50px 100px -100px rgba(0, 0, 0, 0.15);
    }
</style>
