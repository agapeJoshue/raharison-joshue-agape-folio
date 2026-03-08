<script lang="ts">
    import { computed, defineComponent, type PropType } from 'vue';

    export type Message = {
        id: number;
        isMe: boolean;
        message: string[];
        createdAt: Date;
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

            function timeAgo(dateInput: Date | string | number): string {
                const date = new Date(dateInput);
                const now = new Date();

                const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

                if (seconds < 10) {
                    return "à l'instant";
                }

                if (seconds < 60) {
                    return `il y a ${seconds} secondes`;
                }

                const minutes = Math.floor(seconds / 60);

                if (minutes === 1) {
                    return 'il y a 1 minute';
                }

                if (minutes < 60) {
                    return `il y a ${minutes} minutes`;
                }

                const hours = Math.floor(minutes / 60);

                if (hours === 1) {
                    return 'il y a 1 heure';
                }

                if (hours < 24) {
                    return `il y a ${hours} heures`;
                }

                const days = Math.floor(hours / 24);

                if (days === 1) {
                    return 'hier';
                }

                if (days < 7) {
                    return `il y a ${days} jours`;
                }

                const weeks = Math.floor(days / 7);

                if (weeks === 1) {
                    return 'il y a 1 semaine';
                }

                if (weeks < 4) {
                    return `il y a ${weeks} semaines`;
                }

                const months = Math.floor(days / 30);

                if (months === 1) {
                    return 'il y a 1 mois';
                }

                if (months < 12) {
                    return `il y a ${months} mois`;
                }

                const years = Math.floor(days / 365);
                return `il y a ${years} ans`;
            }

            return { isMe, data, timeAgo };
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
                    <p
                        v-for="(message, index) in data.messages.message"
                        :key="index"
                        class="text-base font-normal whitespace-pre-line"
                    >
                        {{ message }}
                    </p>
                    <p
                        :class="[
                            'mt-1 text-end text-[13px] font-medium flex items-center gap-x-2.5 justify-end',
                            isMe ? 'text-white' : 'text-white',
                        ]"
                    >
                        {{ timeAgo(data.messages.createdAt) }}
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
