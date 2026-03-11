<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ProjectConception',
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
            ANALYSE ET CONCEPTION
        </h1>

        <!--  Dictionnaire des données -->
        <div class="space-y-3">
            <h1 class="text-xl lg:text-2xl font-bold text-orange-600 dark:text-yellow-400">
                1. Dictionnaire des données :
            </h1>
            <p
                class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 tracking-widest font-light text-justify"
            >
                Un dictionnaire de données est une ressource essentielle pour la conception d’une
                base de données relationnelle et d’une application. Il recense et décrit l’ensemble
                des informations nécessaires, en précisant pour chacune son nom, sa désignation, son
                type, sa taille éventuelle et, si nécessaire, des remarques spécifiques. Chaque
                donnée y est représentée de manière unique, sans redondance, et reflète une réalité
                distincte. Ce dictionnaire sert également de base pour élaborer le Modèle Conceptuel
                des Données (MCD), étant construit à partir d’un recensement minutieux des
                informations présentes dans les documents utilisés.
            </p>

            <!-- TABLEAU -->
            <DataTable
                :value="[
                    {
                        field: 'application_checked',
                        description: `Indicateur si l'application est vérifiée`,
                        type: 'B',
                        size: 5,
                        observation: 'Valeur par défaut : false',
                    },
                ]"
                class="mt-5 border border-orange-500 dark:border-yellow-500 rounded-xl overflow-hidden"
            >
                <Column field="field" header="" />
                <Column field="description" header="Description" class="min-w-65" />
                <Column field="type" header="Type" class="text-center" />
                <Column field="size" header="Taille" class="text-center" />
                <Column field="observation" header="Observation" class="min-w-45" />
            </DataTable>

            <!-- NOte -->
            <h6 class="mt-5 text-lg lg:text-xl font-semibold">Légendes :</h6>
            <div class="pl-20 space-y-2">
                <li
                    class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 font-light text-justify"
                >
                    <span class="font-bold">A :</span> Alphabétique;
                </li>
                <li
                    class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 font-light text-justify"
                >
                    <span class="font-bold">N :</span> Numérique;
                </li>
                <li
                    class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 font-light text-justify"
                >
                    <span class="font-bold">AN :</span> Alphanumérique;
                </li>
                <li
                    class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 font-light text-justify"
                >
                    <span class="font-bold">DT :</span> DateTime;
                </li>
                <li
                    class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 font-light text-justify"
                >
                    <span class="font-bold">B :</span> Booléen.
                </li>
            </div>
        </div>

        <!-- REGLE DE GESTION -->
        <div class="space-y-3">
            <h1 class="text-xl lg:text-2xl font-bold text-orange-600 dark:text-yellow-400">
                2. Règles de gestion :
            </h1>

            <p
                class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 tracking-widest font-light text-justify"
            >
                Une règle de gestion est une directive ou un principe qui guide les opérations d'une
                organisation, définissant comment les activités doivent être menées, les décisions
                prises, et les données manipulées. Ces règles peuvent s'appliquer aux processus
                internes, aux interactions avec les clients, ainsi qu'à la gestion des ressources.
            </p>

            <p
                class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 tracking-widest font-light text-justify"
            >
                Les règles de gestion spécifiques à notre domaine d'étude sont les suivantes :
            </p>

            <div class="space-y-2.5 pl-8">
                <li
                    class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 tracking-widest font-light text-justify"
                >
                    <span class="font-semibold text-zinc-900 dark:text-zinc-100">RG.01 : </span>
                    Un utilisateur peut avoir plusieurs applications, mais chaque application est
                    associée à un seul utilisateur.
                </li>
                <li
                    class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 tracking-widest font-light text-justify"
                >
                    <span class="font-semibold text-zinc-900 dark:text-zinc-100">RG.02 : </span>
                    Une application doit être liée à un calendrier unique, mais un calendrier peut
                    être associé à plusieurs applications.
                </li>
            </div>
        </div>

        <!-- Diagramme des cas d’utilisation -->
        <div class="space-y-3">
            <h1 class="text-xl lg:text-2xl font-bold text-orange-600 dark:text-yellow-400">
                3. Diagramme des cas d’utilisation :
            </h1>

            <p
                class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 tracking-widest font-light text-justify"
            >
                Le diagramme de cas d'utilisation offre une vue d'ensemble des interactions entre
                les acteurs et le domaine. Il fait intervenir les concepts suivants :
            </p>

            <div class="space-y-2.5 pl-5">
                <li
                    class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 tracking-widest font-light text-justify"
                >
                    <span class="font-semibold text-zinc-900 dark:text-zinc-100">Acteur : </span>
                    Un participant externe qui interagit avec le système. Il représente les cas les
                    plus significatifs du système en cours d'utilisation ;
                </li>
                <li
                    class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 tracking-widest font-light text-justify"
                >
                    <span class="font-semibold text-zinc-900 dark:text-zinc-100"
                        >Cas d’utilisation :
                    </span>
                    Il modélise l'interaction entre le système à développer et un utilisateur ou
                    acteur. Un cas d'utilisation décrit une séquence produisant un résultat
                    observable pour un acteur ;
                </li>
            </div>

            <div
                class="mt-8 border border-zinc-300 dark:border-zinc-700 w-full rounded-xl overflow-hidden"
            >
                <Image src="/bg.jpg" alt="Image" preview />
            </div>
        </div>

        <!-- Diagramme de classe de conception global -->
        <div class="space-y-3">
            <h1 class="text-xl lg:text-2xl font-bold text-orange-600 dark:text-yellow-400">
                4. Diagramme de classe de conception global :
            </h1>

            <p
                class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 tracking-widest font-light text-justify"
            >
                Maintenant, nous pouvons former un diagramme de classe de conception globale à
                partir des autres diagrammes de classe. La figure 29 montre le diagramme de classe
                de conception globale.
            </p>

            <div
                class="mt-8 border border-zinc-300 dark:border-zinc-700 w-full rounded-xl overflow-hidden"
            >
                <Image src="/bg.jpg" alt="Image" preview class="w-full h-full object-cover" />
            </div>
        </div>

        <!-- Diagramme de paquetage -->
        <div class="space-y-3">
            <h1 class="text-xl lg:text-2xl font-bold text-orange-600 dark:text-yellow-400">
                4. Diagramme de paquetage :
            </h1>

            <p
                class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 tracking-widest font-light text-justify"
            >
                Le diagramme de paquetage est un diagramme de structure qui représente la structure
                des paquetages d'une application informatique.
            </p>

            <div
                class="mt-8 border border-zinc-300 dark:border-zinc-700 w-full rounded-xl overflow-hidden"
            >
                <Image src="/bg.jpg" alt="Image" preview />
            </div>
        </div>

        <!-- Diagramme de déploiement -->
        <div class="space-y-3">
            <h1 class="text-xl lg:text-2xl font-bold text-orange-600 dark:text-yellow-400">
                4. Diagramme de déploiement :
            </h1>

            <p
                class="text-base lg:text-lg text-neutral-800 dark:text-neutral-200 tracking-widest font-light text-justify"
            >
                Le diagramme de déploiement est un diagramme qui permet de décrire l’implantation
                physique de l’application.
            </p>

            <div
                class="mt-8 border border-zinc-300 dark:border-zinc-700 w-full rounded-xl overflow-hidden"
            >
                <Image src="/bg.jpg" alt="Image" preview />
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
