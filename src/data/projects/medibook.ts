import type { Project } from '../projects.data';

export const medibook: Project = {
    uuid: 'medibook.web.app',
    project_name: 'MediBook',
    project_description:
        'Plateforme permettant de trouver rapidement des médecins spécialistes à proximité, consulter leurs disponibilités et prendre rendez-vous en ligne de manière simple, rapide et pratique.',
    category: 'Application Web',
    rating: 5,
    images: {
        light: '/imgs/projects/medibook/medibook_light.png',
        dark: '/imgs/projects/medibook/medibook_dark.png',
    },
    links: { code: '', demo: '/project/medibook.web.app' },
    introduction: {
        images: {
            light: '/imgs/projects/medibook/medibook_light.png',
            dark: '/imgs/projects/medibook/medibook_dark.png',
        },
        goals: [
            "L'objectif principal de cette application est de concevoir et réalisé une application web pour la gestion des rendez-vous et des évènements, de fournir une solution complète et intuitive en intégrant des fonctionnalités avancées telles que la synchronisation en temps réel avec Google Calendar, l'envoi de rappels automatiques et la personnalisation des notifications.",
        ],
        needs: {
            requirements: [
                {
                    title: 'Planification des rendez-vous :',
                    description:
                        'Permettre aux utilisateurs de créer, modifier et supprimer des rendez-vous facilement;',
                },
                {
                    title: "Gestion des conflits d'horaires :",
                    description:
                        "Aider les utilisateurs à éviter les conflits d'horaires en affichant les disponibilités et les indisponibilités;",
                },
                {
                    title: "Vue d'ensemble des engagements :",
                    description:
                        "Offrir une vue d'ensemble claire et concise des engagements de l'utilisateur;",
                },
                {
                    title: 'Rappels automatiques :',
                    description: 'Envoyer des rappels automatiques pour les rendez-vous à venir;',
                },
                {
                    title: 'Notifications personnalisées :',
                    description:
                        'Permettre aux utilisateurs de personnaliser les notifications et les rappels selon leurs préférences;',
                },
                {
                    title: 'Synchronisation avec Google Calendar :',
                    description:
                        "Assurer une synchronisation en temps réel avec le calendrier Google de l'utilisateur pour une cohérence et une accessibilité optimales.",
                },
            ],
            not_requirements: [
                {
                    title: 'Sécurité des données :',
                    description:
                        'Garantir la sécurité et la confidentialité des données des utilisateurs;',
                },
                {
                    title: 'Performance :',
                    description:
                        "Assurer des temps de réponse rapides et une performance optimale de l'application;",
                },
                {
                    title: 'Accessibilité :',
                    description:
                        "Rendre l'application accessible à tous les utilisateurs, y compris ceux ayant des besoins spécifiques;",
                },
                {
                    title: 'Fiabilité :',
                    description:
                        "Assurer la fiabilité de l'application pour minimiser les interruptions de service;",
                },
                {
                    title: 'Scalabilité :',
                    description:
                        "Permettre à l'application de s'adapter à une augmentation du nombre d'utilisateurs et de données sans dégradation des performances.",
                },
            ],
        },
        means: {
            intro_material: [
                'Concernant le moyen matériel, nous allons nous servir les matériels informatiques suivants pour la conception et la réalisation du projet.',
            ],
            materials: [
                {
                    type: 'Ordinateur Portable',
                    processor: 'Intel(R) Core(TM) i7-7700HQ (8) @ 3.80 GHz',
                    ram: '15.49 GiB',
                    disk: 'SSD NVME M2 235.89 GiB',
                    graph: 'NVIDIA GeForce GTX 1050 Ti Mobile',
                    number: 1,
                },
            ],
            intro_software: ['Lors du développement, les logiciels suivants ont été utilisés'],
            software: [
                {
                    design: 'Visual Studio Code',
                    usage: 'Un éditeur de code source développé par Microsoft, largement utilisé par les développeurs pour créer et modifier du code.',
                },
                { design: 'Google chrome', usage: 'Navigateur de test.' },
                {
                    design: 'Visual Paradigm',
                    usage: 'Un outil de modélisation et de gestion de projets qui sert principalement à la conception et à la documentation de systèmes logiciels.',
                },
            ],
        },
        results: {
            intro: [
                "Les résultats attendus de ce projet incluent la création d'une application robuste et conviviale pour la gestion des événements et des rendez-vous, offrant une expérience utilisateur optimale. Voici les principaux résultats escomptés :",
            ],
            lists: [
                {
                    title: 'Fonctionnalités Complètes :',
                    description:
                        "L'application permettra aux utilisateurs de créer, modifier et supprimer des événements de manière intuitive. Les rappels automatiques et les notifications personnalisables garantiront que les utilisateurs ne manquent jamais un rendez-vous important.",
                },
                {
                    title: 'Synchronisation en Temps Réel :',
                    description:
                        "Grâce à l'intégration de l'API Google Calendar, l'application assurera une synchronisation instantanée des données, garantissant que toutes les modifications apportées soient immédiatement reflétées sur les calendriers des utilisateurs.",
                },
                {
                    title: 'Interface Utilisateur Améliorée :',
                    description:
                        'Une interface claire et ergonomique sera mise en place, facilitant la navigation et la gestion des événements. Les utilisateurs pourront facilement visualiser leurs engagements à venir, que ce soit sous forme de liste ou de calendrier.',
                },
                {
                    title: 'Rapport de Performance :',
                    description:
                        "Des outils d'analyse seront intégrés pour permettre aux utilisateurs de visualiser leurs habitudes de gestion du temps, identifiant ainsi les périodes de forte activité ou de disponibilité, afin d'optimiser leur emploi du temps.",
                },
                {
                    title: 'Satisfaction Utilisateur :',
                    description:
                        "Une enquête de satisfaction sera menée après le déploiement de l'application pour évaluer son efficacité et son impact sur la gestion du temps des utilisateurs. L'objectif est d'atteindre un taux de satisfaction élevé, indiquant que l'application répond efficacement aux besoins identifiés.",
                },
            ],
        },
    },
};
