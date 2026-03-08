<script lang="ts">
    import { defineComponent, onMounted, ref } from 'vue';
    import type { Message } from '../components/ChatBot.vue';

    export default defineComponent({
        name: 'IndexPage',
        setup() {
            const loading = ref(false);
            const visible = ref(false);
            const discussions = ref<Message[]>([]);

            const onChatBot = (say: boolean) => {
                discussions.value = [];
                visible.value = true;
                const message = `Bonjour 👋

                Je suis l'assistant IA de Joshué Agapé.

                Je suis là pour vous aider et vous fournir les informations dont vous pourriez avoir besoin.

                Que puis-je faire pour vous aujourd'hui ?`;

                if (say) {
                    discussions.value = [
                        {
                            id: Date.now(),
                            message: ['Bonjour !'],
                            createdAt: new Date(),
                            isMe: true,
                            isRead: true,
                        },
                    ];

                    setTimeout(() => (loading.value = true), 500);

                    setTimeout(() => {
                        discussions.value.push({
                            id: Date.now(),
                            message: [message],
                            createdAt: new Date(),
                            isMe: false,
                            isRead: true,
                        });
                        loading.value = false;
                    }, 2000);
                } else {
                    loading.value = true;
                    setTimeout(() => {
                        discussions.value = [
                            {
                                id: Date.now(),
                                message: [message],
                                createdAt: new Date(),
                                isMe: false,
                                isRead: true,
                            },
                        ];
                        loading.value = false;
                    }, 1000);
                }
            };

            onMounted(() => {
                const backgroundSvg = document.getElementById('backgroundSvg');
                if (backgroundSvg) {
                    backgroundSvg.classList.add('show');
                }
            });

            return { loading, visible, onChatBot, discussions };
        },
    });
</script>

<template>
    <HeaderSection />
    <HeroSection @on-action="() => onChatBot(false)" />
    <AboutSection />
    <ProjectSection />
    <ExperienceSection />
    <ServiceSection @on-action="() => onChatBot(true)" />
    <SkillSection />
    <ContactSection />

    <ChatBot
        v-model:loading="loading"
        v-model:visible="visible"
        v-model:discussions="discussions"
    />
</template>
