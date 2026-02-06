<script lang="ts">
    import { defineComponent, onMounted, ref, watch } from 'vue';
    import { Moon, Sun } from 'lucide-vue-next';
    import { useThemeStore } from '../hooks/useThemeStore';
    import { useI18n } from 'vue-i18n';

    type ThemeCode = 'light' | 'dark';

    export default defineComponent({
        name: 'ToggleMode',
        props: {
            isSelect: { type: Boolean, required: false },
        },
        setup(props) {
            const { t } = useI18n();
            const { isDark, toggleTheme } = useThemeStore();
            const select = ref(false);
            const option = ref<{ code: ThemeCode; label: string } | null>(null);
            const options: { code: ThemeCode; label: string }[] = [
                { code: 'light', label: 'themes.light' },
                { code: 'dark', label: 'themes.dark' },
            ];
            const iconMap: Record<ThemeCode, any> = {
                light: Sun,
                dark: Moon,
            };

            const getIcon = (code: ThemeCode) => iconMap[code];

            onMounted(() => {
                select.value = props.isSelect;
                option.value = isDark.value
                    ? options.find((o) => o.code === 'dark')!
                    : options.find((o) => o.code === 'light')!;
            });

            watch(option, (val) => {
                if (!val) return;
                toggleTheme(val.code);
            });

            return { t, isDark, toggleTheme, select, option, options, getIcon };
        },
    });
</script>

<template>
    <Button
        v-if="!select"
        @click="() => toggleTheme()"
        severity="secondary"
        variant="outlined"
        class="p-2.25"
    >
        <Sun v-if="isDark" :size="20" />
        <Moon v-else :size="20" />
    </Button>

    <Select
        v-else
        v-model="option"
        :options="options"
        optionLabel="label"
        placeholder="theme"
        size="small"
        class="min-w-32"
    >
        <template #value="{ value, placeholder }">
            <div v-if="value" class="text-sm flex items-center gap-x-2.5">
                <component :is="getIcon(value.code)" :size="18" />
                <span>{{ t(value.label) }}</span>
            </div>
            <span v-else>{{ t(placeholder) }}</span>
        </template>

        <template #option="{ option }">
            <div class="text-sm flex items-center gap-x-2.5">
                <component :is="getIcon(option.code)" :size="18" />
                <span>{{ t(option.label) }}</span>
            </div>
        </template>
    </Select>
</template>
