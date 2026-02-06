<script lang="ts">
    import { defineComponent, ref } from 'vue';

    export default defineComponent({
        name: 'IndexPage',
        setup() {
            const visible = ref(false);
            const onChatBot = () => {
                visible.value = true;
            };

            return { visible, onChatBot };
        },
    });
</script>

<template>
    <HeaderSection />
    <HeroSection @on-action="onChatBot" />
    <AboutSection />
    <ProjectSection />
    <ExperienceSection />
    <ServiceSection />
    <SkillSection />
    <ContactSection />
    <FooterSection />

    <ChatBot v-model:visible="visible" />
</template>
