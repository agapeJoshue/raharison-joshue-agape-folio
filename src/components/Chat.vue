<script lang="ts">
    import { computed, defineComponent, type PropType } from 'vue';

    type Message = {
        id: number;
        message: string;
        createdAt: string;
        isRead: boolean;
    };

    export default defineComponent({
        name: 'ChatComponent',
        props: {
            isMe: { type: Boolean, required: true },
            messages: { type: Object as PropType<Message>, required: true },
        },
        setup(props) {
            const isMe = computed(() => props.isMe);
            const data = computed(() => props);
            return { isMe, data };
        },
    });
</script>

<template>
    <div v-if="data.messages" class="w-full">
        <div
            :class="['flex items-end gap-4', isMe ? 'flex-row-reverse items-end' : 'justify-start']"
        >
            <div
                :class="[
                    'w-8 h-8 flex items-center justify-center rounded-full border overflow-hidden',
                    !isMe
                        ? [
                              'border-orange-500 bg-orange-500 text-white',
                              'dark:border-yellow-500 dark:bg-yellow-600',
                          ]
                        : [
                              'border-blue-500 bg-blue-500 text-white',
                              'dark:border-cyan-500 dark:bg-cyan-500',
                          ],
                ]"
            >
                <Bot :size="18" v-if="!isMe" />
                <UserRound :size="18" v-else />
            </div>

            <div class="max-w-[75%] space-y-1">
                <div
                    :class="[
                        'relative py-2 px-4 rounded-lg group',
                        data.isMe
                            ? ['text-white', 'bg-blue-500 dark:bg-cyan-600 text-black']
                            : ['text-white', 'bg-orange-500', 'dark:bg-yellow-600'],
                    ]"
                >
                    <span
                        :class="[
                            'w-3 h-3 absolute rotate-45 bottom-2 hidden group-last:block',
                            data.isMe
                                ? '-right-1.5 bg-blue-500 dark:bg-cyan-600'
                                : ['-left-1.5', 'bg-orange-500', 'dark:bg-yellow-600'],
                        ]"
                    />
                    <p class="text-base font-normal">{{ data.messages.message }}</p>
                    <p
                        :class="[
                            'mt-1 text-end text-[13px] font-medium flex items-center gap-x-2.5 justify-end',
                            isMe ? 'text-white' : 'text-white',
                        ]"
                    >
                        {{ data.messages.createdAt }}
                        <Check
                            v-if="data.isMe && !data.messages.isRead"
                            :size="18"
                            class="text-white"
                        />
                        <CheckCheck
                            v-if="data.isMe && data.messages.isRead"
                            :size="18"
                            class="text-white"
                        />
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
