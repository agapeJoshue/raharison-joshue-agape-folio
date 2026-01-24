type project = {
    category: string;
    name: string;
    description: string;
    rating: number;
    images: { light: string; dark: string };
    links: { code?: string; demo?: string };
};

export const projects: project[] = [
    {
        category: 'project.category.web_application',
        name: 'AutoFlow with n8n',
        description: 'project.auto_flow',
        rating: 4,
        images: {
            light: '/imgs/auto_flow/login_page_light.png',
            dark: '/imgs/auto_flow/login_page_dark.png',
        },
        links: { code: '', demo: '' },
    },
    {
        category: 'project.category.web_application',
        name: 'Planning',
        description: 'project.planning',
        rating: 5,
        images: {
            light: '/imgs/planning/login_page_light.png',
            dark: '/imgs/planning/login_page_dark.png',
        },
        links: { code: '', demo: '' },
    },
    {
        category: 'project.category.web_application',
        name: 'Stock Flow Inventory',
        description: 'project.stock_flow',
        rating: 3,
        images: {
            light: '/imgs/stock_flow/login_page_light.png',
            dark: '/imgs/stock_flow/login_page_light.png',
        },
        links: { code: '', demo: '' },
    },
];
