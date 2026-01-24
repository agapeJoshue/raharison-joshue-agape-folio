type Experience = {
    title: string;
    description: string;
    company: string;
    period: string;
    technologies: string[];
    image: string;
};

export const experiences: Experience[] = [
    {
        title: 'experience.auto_flow.title',
        description: 'experience.auto_flow.description',
        company: 'ENI',
        period: 'experience.auto_flow.period',
        technologies: ['React.js', 'PostgreSQL', 'Flask', 'N8N', 'Docker'],
        image: '/imgs/experiences/n8n-autoflow.png',
    },
    {
        title: 'experience.mandika_apk.title',
        description: 'experience.mandika_apk.description',
        company: 'RafalTech',
        period: 'experience.mandika_apk.period',
        technologies: ['Flutter', 'Django', 'PostgreSQL', 'Tesseract OCR', 'OpenAI API'],
        image: '/imgs/experiences/flutter-django.png',
    },
    {
        title: 'experience.sfyritech_meeting.title',
        description: 'experience.sfyritech_meeting.description',
        company: 'SfyriTech',
        period: 'experience.sfyritech_meeting.period',
        technologies: ['Quasar', 'PostgreSQL', 'Nest.js', 'Prisma ORM', 'Google Calendar API'],
        image: '/imgs/experiences/nest-vue.webp',
    },
    {
        title: 'experience.hello_archi.title',
        description: 'experience.hello_archi.description',
        company: 'SfyriTech',
        period: 'experience.hello_archi.period',
        technologies: ['Node.js', 'Express', 'Docker', 'websocket'],
        image: '/imgs/experiences/node-express.jpg',
    },
    {
        title: 'experience.open_delivery.title',
        description: 'experience.open_delivery.description',
        company: 'Open Data / Delivery',
        period: 'experience.open_delivery.period',
        technologies: ['vue.js', 'PHP', 'Laravel', 'jQuery', 'MySQL'],
        image: '/imgs/experiences/laravel.png',
    },
];
