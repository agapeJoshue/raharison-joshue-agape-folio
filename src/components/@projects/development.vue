<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ProjectDevelopment',
        emits: ['on-close', 'on-next'],
        setup(_, { emit }) {
            const onClose = () => emit('on-close');
            const onAction = (type: 'back' | 'next') => emit('on-next', type);
            return { onClose, onAction };
        },
    });
</script>

<template>
    <section
        class="relative w-full max-w-5xl mx-auto px-5 py-8 lg:p-15 rounded-4xl backdrop-blur-xl lg:border border-orange-500 dark:border-yellow-500 space-y-12 shadow-2xl overflow-hidden"
    >
        <Button
            @click="onClose"
            size="small"
            class="bg-transparent text-orange-600 hover:text-orange-500 dark:text-yellow-400 dark:hover:text-yellow-500 border-none absolute right-4 top-5"
        >
            <CloseIcon />
        </Button>
        <h1
            class="relative w-fit border-b-[0.11rem] text-4xl mt-6 pb-2 text-orange-600 dark:text-yellow-400"
        >
            REALISATION
        </h1>

        <!-- Installation et configuration des outils -->
        <div class="space-y-3">
            <h1 class="text-xl lg:text-2xl font-bold text-orange-600 dark:text-yellow-400">
                1. Installation et configuration des outils :
            </h1>
            <p
                class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 tracking-widest font-light text-justify"
            >
                Plusieurs logiciels sont disponibles pour la réalisation d’une application web. Nous
                avons choisi le langage de programmation JavaScript pour le développement de notre
                système, PostgreSQL pour la gestion des données, ainsi que le langage UML pour la
                conception.
            </p>

            <div class="pl-8 space-y-4">
                <div class="space-y-2">
                    <li class="text-base lg:text-lg font-semibold text-justify">Node.JS :</li>
                    <p
                        class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 font-light text-justify mb-3"
                    >
                        Node.js est un environnement d'exécution JavaScript côté serveur, construit
                        sur le moteur V8 de Google Chrome. Il permet aux développeurs d'utiliser
                        JavaScript pour créer des applications backend, ce qui était
                        traditionnellement limité au frontend.
                    </p>
                </div>
                <div class="space-y-2">
                    <li class="text-base lg:text-lg font-semibold text-justify">NestJS :</li>
                    <p
                        class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 font-light text-justify"
                    >
                        NestJS est un Framework pour construire des applications serveur côté
                        backend, basé sur Node.js et TypeScript. Il s'inspire de concepts de la
                        programmation orientée objet et des design patterns comme MVC
                        (Model-View-Controller), ce qui le rend structuré et modulaire.
                    </p>
                </div>
                <div class="space-y-2">
                    <li class="text-base lg:text-lg font-semibold text-justify">TypeScript :</li>
                    <p
                        class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 font-light text-justify"
                    >
                        TypeScript est un langage de programmation développé par Microsoft qui est
                        une superset de JavaScript. Cela signifie que tout code JavaScript valide
                        est également un code TypeScript valide, mais TypeScript ajoute des
                        fonctionnalités supplémentaires qui améliorent le développement
                        d'applications.
                    </p>
                </div>
            </div>
        </div>

        <!-- Architecture de l’application -->
        <div class="space-y-3">
            <h1 class="text-xl lg:text-2xl font-bold text-orange-600 dark:text-yellow-400">
                2. Architecture de l’application :
            </h1>
            <p
                class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 tracking-widest font-light text-justify"
            >
                L’application est divisée en deux parties principales reliées par des requêtes HTTP
                et, éventuellement, par WebSocket :
            </p>

            <div class="pl-8 space-y-4">
                <div class="space-y-2">
                    <li class="text-base lg:text-lg font-semibold text-justify">Frontend :</li>
                    <p
                        class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 font-light text-justify mb-3"
                    >
                        Une application construite avec Quasar (framework basé sur Vue.js), qui
                        offre une interface utilisateur interactive et réactive.
                    </p>
                </div>
                <div class="space-y-2">
                    <li class="text-base lg:text-lg font-semibold text-justify">Backend :</li>
                    <p
                        class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 font-light text-justify"
                    >
                        Un service développé avec NestJS, qui gère la logique métier, les
                        interactions avec l'API Google Agenda, ainsi que les échanges de données
                        avec le frontend via des REST APIs.
                    </p>
                </div>
            </div>

            <p
                class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 tracking-widest font-light text-justify"
            >
                Cette architecture repose sur un modèle client-serveur moderne, où le backend agit
                comme un service central pouvant être divisé en plusieurs sous-services
                (microservices ou modules dans NestJS) pour une meilleure organisation et
                évolutivité. Le frontend consomme ces services via des APIs REST, permettant une
                gestion efficace des rendez-vous et une synchronisation avec l’agenda Google.
            </p>

            <div
                class="mt-8 border border-zinc-300 dark:border-zinc-700 w-full rounded-xl overflow-hidden"
            >
                <Image src="/imgs/bg.jpg" alt="Image" preview />
            </div>
        </div>

        <div class="space-y-3">
            <h1 class="text-xl lg:text-2xl font-bold text-orange-600 dark:text-yellow-400">
                3. Développement de l’application :
            </h1>
            <p
                class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 tracking-widest font-light text-justify"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, soluta ipsum nisi
                quibusdam inventore numquam voluptatibus facere adipisci placeat atque qui dolorem
                reiciendis repudiandae repellat eius magni debitis nihil quasi!
            </p>

            <div class="relative space-y-8">
                <div class="space-y-3">
                    <li class="ml-8 text-base lg:text-lg font-semibold text-justify">
                        Front-End :
                    </li>
                    <MediBookFrontend />
                </div>
                <div class="space-y-3">
                    <li class="ml-8 text-base lg:text-lg font-semibold text-justify">Back-End :</li>
                    <MediBookBackend />
                </div>
            </div>
        </div>

        <div class="flex items-center justify-between gap-5">
            <Button
                @click="onAction('back')"
                outlined
                class="border-orange-500 dark:border-yellow-500 text-orange-500 dark:text-yellow-500"
            >
                <ArrowLeft :size="20" />
                Revenir au precedent
            </Button>
            <Button
                @click="onAction('next')"
                outlined
                class="border-orange-500 dark:border-yellow-500 text-orange-500 dark:text-yellow-500"
            >
                Voir le realisation
                <ArrowRight :size="20" />
            </Button>
        </div>
    </section>
</template>
