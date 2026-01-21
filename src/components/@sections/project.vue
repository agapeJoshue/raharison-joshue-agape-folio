<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ProjectSection',
        setup() {
            return {};
        },
    });
</script>

<template>
    <section id="project" class="w-full h-screen bg-zinc-200/50 dark:bg-zinc-800/50 py-20">
        <div class="border border-cyan-500 max-w-7xl mx-auto p-8">
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
        </div>
    </section>
</template>
