<script lang="ts">
    import { defineComponent, ref } from 'vue';

    export default defineComponent({
        name: 'SocialIcon',
        props: {
            tooltip: { type: String, required: false },
            link: { type: String, required: true },
        },
        setup(props) {
            const TooltipValue = ref(props.tooltip);
            const linkValue = ref(props.link);
            return { TooltipValue, linkValue };
        },
    });
</script>

<template>
    <a
        :href="linkValue"
        v-tooltip="{
            value: TooltipValue,
            showDelay: 1000,
            autoHide: true,
            hideDelay: 100,
            pt: { text: 'text-xs font-medium' },
        }"
        class="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-gray-900 hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
    >
        <slot />
    </a>
</template>
