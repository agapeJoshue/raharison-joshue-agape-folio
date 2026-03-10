import type { Project } from '../projects.data';

export const stockflow: Project = {
    uuid: 'stockflow.web.app',
    project_name: 'StockFlow',
    project_description:
        'Outil de gestion d’inventaire permettant de suivre les produits, contrôler les niveaux de stock en temps réel et simplifier les opérations quotidiennes liées à l’organisation des marchandises.',
    category: 'Application Web',
    rating: 5,
    images: {
        light: '/imgs/projects/stock_flow/login_page_light.png',
        dark: '/imgs/projects/stock_flow/login_page_light.png',
    },
    links: { code: '', demo: '/project/stockflow.web.app' },
    introduction: {
        paragraphs: [],
        images: {
            light: '/imgs/projects/stock_flow/login_page_light.png',
            dark: '/imgs/projects/stock_flow/login_page_light.png',
        },
    },
};
