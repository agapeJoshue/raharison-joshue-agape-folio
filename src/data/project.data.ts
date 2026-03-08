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
        name: 'MediBook',
        description: 'project.stock_flow',
        rating: 5,
        images: {
            light: '/imgs/projects/medibook/medibook_light.png',
            dark: '/imgs/projects/medibook/medibook_dark.png',
        },
        links: { code: '', demo: '' },
    },
    {
        category: 'project.category.web_application',
        name: 'Smart Shop - E-commerce',
        description: 'project.stock_flow',
        rating: 5,
        images: {
            light: '/imgs/projects/smart_shop/admin_dashboard_light.png',
            dark: '/imgs/projects/smart_shop/admin_dashboard_dark.png',
        },
        links: { code: '', demo: '' },
    },
    {
        category: 'project.category.web_application',
        name: 'AutoFlow with n8n',
        description: 'project.auto_flow',
        rating: 4,
        images: {
            light: '/imgs/projects/auto_flow/login_page_light.png',
            dark: '/imgs/projects/auto_flow/login_page_dark.png',
        },
        links: { code: '', demo: '' },
    },
    {
        category: 'project.category.web_application',
        name: 'Planning',
        description: 'project.planning',
        rating: 5,
        images: {
            light: '/imgs/projects/planning/login_page_light.png',
            dark: '/imgs/projects/planning/login_page_dark.png',
        },
        links: { code: '', demo: '' },
    },
    {
        category: 'project.category.web_application',
        name: 'Stock Flow Inventory',
        description: 'project.stock_flow',
        rating: 3,
        images: {
            light: '/imgs/projects/stock_flow/login_page_light.png',
            dark: '/imgs/projects/stock_flow/login_page_light.png',
        },
        links: { code: '', demo: '' },
    },
];
