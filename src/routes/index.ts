import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'portfolio',
        component: () => import('@/pages/portfolio.vue'),
    },
    {
        path: '/project/:project_uuid',
        name: 'portfolio_project',
        component: () => import('@/pages/projectDemo.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/pages/NotFound.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
