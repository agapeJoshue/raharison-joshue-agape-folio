type Skill = {
    title: string;
    subtitle: string;
    techs: { name: string; value: number }[];
};

export const skills: Skill[] = [
    {
        title: 'skill.front.title',
        subtitle: 'skill.front.subtitle',
        techs: [
            { name: 'Vue.js', value: 90 },
            { name: 'React', value: 90 },
            { name: 'Next.js', value: 90 },
            { name: 'Angular', value: 80 },
            { name: 'Flutter', value: 80 },
            { name: 'React Native', value: 90 },
            { name: 'Bootstrap', value: 90 },
            { name: 'Tailwind CSS', value: 90 },
        ],
    },
    {
        title: 'skill.back.title',
        subtitle: 'skill.back.subtitle',
        techs: [
            { name: 'Node.js', value: 90 },
            { name: 'Express.js', value: 90 },
            { name: 'NestJS', value: 90 },
            { name: 'Django', value: 90 },
            { name: 'Flask', value: 80 },
            { name: 'FastAPI', value: 90 },
            { name: 'Laravel', value: 70 },
            { name: 'Symfony', value: 70 },
        ],
    },
    {
        title: 'skill.ops.title',
        subtitle: 'skill.ops.subtitle',
        techs: [
            { name: 'Figma', value: 50 },
            { name: 'Adobe XD', value: 40 },
            { name: 'Photoshop', value: 25 },
            { name: 'Git', value: 90 },
            { name: 'Docker', value: 90 },
            { name: 'AWS', value: 60 },
            { name: 'SEO', value: 50 },
        ],
    },
];

export const softSkill: string[] = [
    'skill.problemSolving',
    'skill.teamwork',
    'skill.communication',
    'skill.timeManagement',
    'skill.adaptability',
    'skill.creativity',
    'skill.attentionToDetail',
    'skill.autonomy',
];

type framework = {
    name: string;
    icon: string;
};

export const frameworks: framework[] = [
    { name: 'IA N8N', icon: '/imgs/techs/n8n.png' },
    { name: 'Tailwind css', icon: '/imgs/techs/tailwindcss.png' },
    { name: 'Bootstrap', icon: '/imgs/techs/bootstrap.jpeg' },
    { name: 'Nuxt', icon: '/imgs/techs/nuxt.png' },
    { name: 'Primevue', icon: '/imgs/techs/primevue.png' },
    { name: 'Quasar', icon: '/imgs/techs/quasar.png' },
    { name: 'Nest', icon: '/imgs/techs/nestjs.png' },
    { name: 'Vuetify', icon: '/imgs/techs/vuetify.jpeg' },
    { name: 'Material UI', icon: '/imgs/techs/material-ui.jpg' },
    { name: 'Hero UI', icon: '/imgs/techs/heroUI.png' },
    { name: 'React bootstrap', icon: '/imgs/techs/React-bootstrap.webp' },
    { name: 'Shadcn ui', icon: '/imgs/techs/shadcs.png' },
    { name: 'Chakra UI', icon: '/imgs/techs/chakraui.jpeg' },
    { name: 'Ant design', icon: '/imgs/techs/ant-design.jpg' },
    { name: 'Primereact', icon: '/imgs/techs/primereact.jpg' },
    { name: 'Element Plus', icon: '/imgs/techs/element-plus.png' },
    { name: 'Bootstrap vue', icon: '/imgs/techs/bootstrapvue.jpg' },
    { name: 'PrimeNG', icon: '/imgs/techs/primeng.png' },
    { name: 'Angular Material', icon: '/imgs/techs/angular-material.svg' },
    { name: 'Lucide Icon', icon: '/imgs/techs/lucide.jpg' },
    { name: 'Flaticon', icon: '/imgs/techs/flaticon.jpeg' },
    { name: 'Native Expo', icon: '/imgs/techs/native-expo.jpeg' },
    { name: 'Prisma ORM', icon: '/imgs/techs/prisma.png' },
    { name: 'Sequelize', icon: '/imgs/techs/sequelize.jpg' },
];
