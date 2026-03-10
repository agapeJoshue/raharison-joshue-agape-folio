import type { Project } from '../projects.data';

export const autoflow: Project = {
    uuid: 'autoflow.web.app',
    project_name: 'AutoFlow',
    project_description:
        'Solution d’automatisation qui analyse les e-mails grâce à l’intelligence artificielle et déclenche des actions via des workflows personnalisés créés avec n8n pour optimiser les tâches répétitives.',
    category: 'Application Web',
    rating: 5,
    images: {
        light: '/imgs/projects/auto_flow/login_page_light.png',
        dark: '/imgs/projects/auto_flow/login_page_dark.png',
    },
    links: { code: '', demo: '/project/autoflow.web.app' },
    introduction: {
        paragraphs: [],
        images: {
            light: '/imgs/projects/auto_flow/login_page_light.png',
            dark: '/imgs/projects/auto_flow/login_page_dark.png',
        },
    },
};
