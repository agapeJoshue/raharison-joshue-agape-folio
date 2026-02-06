<script lang="ts">
    import { defineComponent } from 'vue';
    import { useRouter } from 'vue-router';

    export default defineComponent({
        setup() {
            const router = useRouter();
            return { router };
        },
    });
</script>

<template>
    <main class="min-h-screen w-full flex flex-col items-center gap-y-8 justify-center px-6">
        <img src="/not-found.webp" alt="Page non trouvée" class="mx-auto max-w-100" />
        <h1 class="text-2xl font-semibold text-slate-900 dark:text-slate-100">Page introuvable</h1>

        <p class="text-lg text-slate-500 dark:text-slate-300 leading-relaxed max-w-150 text-center">
            Désolé, la page que vous recherchez n’existe pas ou a été déplacée. Vérifiez l’URL ou
            revenez en arrière.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <Button
                @click="router.back()"
                class="px-6 py-2.5 bg-cyan-800 border-cyan-700 hover:bg-cyan-600 text-white font-medium transition shadow-md"
            >
                Retourner
            </Button>

            <router-link
                to="/contact"
                class="px-6 py-2.5 rounded-md hover:bg-cyan-50 dark:hover:bg-cyan-600 dark:hover:text-white border border-cyan-700 text-cyan-600 dark:text-cyan-400 transition font-medium"
            >
                Contacter le support
            </router-link>
        </div>
    </main>
</template>
