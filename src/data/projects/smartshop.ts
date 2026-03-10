import type { Project } from '../projects.data';

export const smartshop: Project = {
    uuid: 'smartshop.web.app',
    project_name: 'Smart Shop',
    project_description:
        'Système de gestion e-commerce où l’administrateur organise les produits par catégories, suit les clients, gère les commandes et supervise efficacement les livraisons depuis un tableau de bord centralisé.',
    category: 'Application Web',
    rating: 5,
    images: {
        light: '/imgs/projects/smart_shop/admin_dashboard_light.png',
        dark: '/imgs/projects/smart_shop/admin_dashboard_dark.png',
    },
    links: { code: '', demo: '/project/smartshop.web.app' },
    introduction: {
        paragraphs: [],
        images: {
            light: '/imgs/projects/smart_shop/admin_dashboard_light.png',
            dark: '/imgs/projects/smart_shop/admin_dashboard_dark.png',
        },
    },
};
