<script lang="ts">
    import { defineComponent, ref } from 'vue';

    export default defineComponent({
        name: 'IndexPage',
        setup() {
            const visible = ref(false);
            const onChatBot = (say: boolean) => {
                if (say) {
                } else {
                }
                visible.value = true;
            };

            return { visible, onChatBot };
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

    <ChatBot v-model:visible="visible" />
</template>
