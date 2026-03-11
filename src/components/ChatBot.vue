<script lang="ts">
import { computed, defineComponent, ref, nextTick, watch, type PropType } from 'vue';
    import { ask_ia } from '../api/endpoints';
import { useFetch } from '../hooks/useApi';

    export type Message = {
        id: number;
        isMe: boolean;
        message: string[];
        createdAt: Date;
        isRead: boolean;
    };

    interface AskResponse {
        answer?: string;
        detail?: string;
    }

    export default defineComponent({
        name: 'ChatBot',
        props: {
            loading: { type: Boolean, required: true },
            visible: { type: Boolean, required: true },
            discussions: { type: Array as PropType<Message[]>, required: true },
        },
        emits: ['update:loading', 'update:visible', 'update:discussions'],
        setup(props, { emit }) {
            const new_message = ref('');
            const loading = computed({
                get: () => props.loading,
                set: (value: boolean) => emit('update:loading', value),
            });

            const visible = computed({
                get: () => props.visible,
                set: (value: boolean) => emit('update:visible', value),
            });

            const discussions = computed({
                get: () => props.discussions,
                set: (value: Message[]) => emit('update:discussions', value),
            });

            const lastItem = ref<HTMLElement | null>(null);

            const scrollToBottom = async () => {
                await nextTick();
                lastItem.value?.scrollIntoView({ behavior: 'smooth' });
            };

            watch(
                () => discussions.value.length,
                () => {
                    scrollToBottom();
                },
            );

            watch(
                () => loading.value,
                () => {
                    scrollToBottom();
                },
            );

            const onSendMessage = async () => {
                const { loading, fetchData, data } = useFetch<AskResponse>(ask_ia, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const lastMessage = discussions.value[discussions.value.length - 1];
                if (lastMessage && lastMessage.isMe) {
                    discussions.value[discussions.value.length - 1]?.message.push(
                        new_message.value,
                    );
                } else {
                    discussions.value.push({
                        id: Date.now(),
                        message: [new_message.value],
                        createdAt: new Date(),
                        isMe: true,
                        isRead: true,
                    });
                }
                const payload = {
                    question: new_message.value
                }
                new_message.value = '';
                
                setTimeout(() => loading.value = true, 500);

                try {
                    await fetchData({
                        body: JSON.stringify(payload),
                    });

                    console.log(data.value);

                    if (data.value?.answer) {
                        discussions.value.push({
                            id: Date.now(),
                            message: [data.value.answer],
                            createdAt: new Date(),
                            isMe: false,
                            isRead: true,
                        });
                        loading.value = false;
                    }
                } catch (err) {
                    const message1 = `Merci pour votre message et pour l’intérêt que vous portez à mon créateur.

                        Pour le moment, je ne suis malheureusement pas autorisée à répondre aux questions le concernant. Une petite maintenance technique est en cours et certaines fonctionnalités me sont temporairement restreintes.

                        Mon créateur n’a donc pas encore activé les réponses à ce sujet. Je vous remercie pour votre compréhension et votre patience.

                        Je serai ravie de pouvoir vous répondre dès que tout sera pleinement opérationnel. ✨`;

                    setTimeout(() => {
                        discussions.value.push({
                            id: Date.now(),
                            message: [message1],
                            createdAt: new Date(),
                            isMe: false,
                            isRead: true,
                        });
                        loading.value = false;
                    }, 2000);
                }

            };

            return { loading, visible, discussions, new_message, onSendMessage, lastItem };
        },
    });
</script>

<template>
    <Dialog
        v-model:visible="visible"
        modal
        :class="[
            'w-full max-w-180 backdrop-blur-3xl rounded-[2.4rem] custom-dialog',
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

        <div
            v-if="discussions.length > 0"
            class="h-[calc(100vh-17rem)] flex flex-col justify-start py-1 gap-y-5 overflow-auto"
        >
            <Chat
                v-for="discussion in discussions"
                :key="discussion.id"
                :isMe="discussion.isMe"
                :messages="{
                    id: discussion.id,
                    message: discussion.message,
                    createdAt: discussion.createdAt,
                    isRead: discussion.isRead,
                }"
            />

            <ChatLoading v-if="loading" />

            <span ref="lastItem" />
        </div>

        <div v-else class="h-[calc(100vh-18rem)] flex flex-col justify-start py-1 gap-y-5">
            <ChatLoading v-if="loading" />
            <span ref="lastItem" />
        </div>

        <template #footer>
            <div class="w-full flex items-end gap-x-3">
                <Textarea
                    fluid
                    v-model="new_message"
                    autoResize
                    rows="1"
                    :class="[
                        'bg-transparent rounded-lg border-2',
                        'border-orange-400 hover:border-orange-500 focus:border-orange-500',
                        'border-yellow-600 dark:hover:border-yellow-500 dark:focus:border-yellow-500',
                    ]"
                    placeholder="Avez-vous des questions?"
                />
                <Button
                    rounded
                    :disabled="!new_message"
                    :class="[
                        'w-11 h-10 p-1',
                        'bg-orange-500 border-orange-500',
                        'dark:bg-yellow-500 dark:border-yellow-500',
                    ]"
                    severity="info"
                    @click="onSendMessage"
                >
                    <SendIcon :size="20" />
                </Button>
            </div>
        </template>
    </Dialog>
</template>
