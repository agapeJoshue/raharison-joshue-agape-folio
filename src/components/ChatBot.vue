<script lang="ts">
    import { computed, defineComponent, ref } from 'vue';

    export default defineComponent({
        name: 'ChatBot',
        props: {
            visible: { type: Boolean, required: true },
        },
        emits: ['update:visible'],
        setup(props, { emit }) {
            const visible = computed({
                get: () => props.visible,
                set: (value: boolean) => emit('update:visible', value),
            });

            const scroll = ref('last-item');

            return { visible, scroll };
        },
    });
</script>

<template>
    <Dialog
        v-model:visible="visible"
        modal
        :class="[
            'w-full max-w-180 backdrop-blur-3xl custom-dialog',
            'bg-white/80',
            'dark:bg-black/50',
        ]"
    >
        <template #header>
            <div :class="['flex items-center justify-between gap-x-8 bg-linear-to-r']">
                <div class="grid grid-cols-[3.2rem_auto] gap-x-4">
                    <div
                        :class="[
                            'border w-13 h-13 flex items-center justify-center rounded-full',
                            'bg-orange-500 text-white border-orange-200',
                            'dark:bg-yellow-600 dark:text-white dark:border-yellow-500/20',
                        ]"
                    >
                        <Bot />
                    </div>
                    <div class="">
                        <h6
                            :class="[
                                'text-xl font-bold',
                                'text-orange-600',
                                'dark:text-yellow-500',
                            ]"
                        >
                            Assistant IA
                        </h6>
                        <p class="text-sm text-neutral-600 dark:text-neutral-300">
                            Prêt à vous aider
                        </p>
                    </div>
                </div>
            </div>
        </template>

        <template #closeicon>
            <Sparkles
                :size="28"
                class="w-6 h-6 animate-pulse text-orange-500 dark:text-yellow-500"
            />
        </template>

        <div class="h-[calc(100vh-18rem)] flex flex-col justify-start py-1 gap-y-5">
            <Chat
                :isMe="false"
                :messages="{
                    id: 1,
                    message: `Bonjour ! Je suis l'assistant IA de Joshué Agapé. Comment puis-je vous aider ?`,
                    createdAt: 'il y a 5 minutes',
                    isRead: true,
                }"
            />
            <Chat
                :isMe="true"
                :messages="{
                    id: 2,
                    message: `Bonjour !`,
                    createdAt: 'il y a 2 minutes',
                    isRead: true,
                }"
            />
            <ChatLoading />

            <span ref="last-item" />
        </div>

        <template #footer>
            <div class="w-full flex items-end gap-x-3">
                <Textarea
                    fluid
                    autoResize
                    rows="1"
                    :class="[
                        'bg-transparent',
                        'border-zinc-400 hover:border-orange-500 focus:border-orange-500',
                        'border-zinc-600 dark:hover:border-yellow-500 dark:focus:border-yellow-500',
                    ]"
                    placeholder="Avez-vous des questions?"
                />
                <Button
                    rounded
                    :class="[
                        'w-11 h-10 p-1',
                        'bg-orange-500 border-orange-500',
                        'dark:bg-yellow-500 dark:border-yellow-500',
                    ]"
                    severity="info"
                >
                    <SendIcon :size="20" />
                </Button>
            </div>
        </template>
    </Dialog>
</template>
