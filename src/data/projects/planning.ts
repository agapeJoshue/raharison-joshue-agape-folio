import type { Project } from '../projects.data';

export const planning: Project = {
    uuid: 'planning.web.app',
    project_name: 'Planning',
    project_description:
        'Outil collaboratif permettant d’organiser des réunions, planifier des projets et coordonner efficacement les activités d’équipe grâce à une gestion claire du calendrier et des tâches.',
    category: 'Application Web',
    rating: 5,
    images: {
        light: '/imgs/projects/planning/login_page_light.png',
        dark: '/imgs/projects/planning/login_page_dark.png',
    },
    links: { code: '', demo: '/project/planning.web.app' },
    introduction: {
        paragraphs: [],
        images: {
            light: '/imgs/projects/planning/login_page_light.png',
            dark: '/imgs/projects/planning/login_page_dark.png',
        },
    },
};
