<script lang="ts">
    import { defineComponent, computed } from 'vue';
    import { useI18n } from 'vue-i18n';
    import type { Locale } from '../i18n';

    interface LocaleOption {
        label: string;
        code: Locale;
    }

    export default defineComponent({
        name: 'ToggleLocale',

        setup() {
            const { locale, t } = useI18n();

            const options: LocaleOption[] = [
                { label: 'languages.mg', code: 'mg' },
                { label: 'languages.fr', code: 'fr' },
                { label: 'languages.en', code: 'en' },
            ];

            const DEFAULT_OPTION: LocaleOption = {
                label: 'languages.fr',
                code: 'fr',
            };

            const selected = computed<LocaleOption>({
                get(): LocaleOption {
                    return options.find((o) => o.code === locale.value) ?? DEFAULT_OPTION;
                },
                set(value: LocaleOption) {
                    locale.value = value.code;
                    localStorage.setItem('locale', value.code);
                },
            });

            const getFlag = (value: Locale): string => {
                switch (value) {
                    case 'mg':
                        return '🇲🇬';
                    case 'fr':
                        return '🇫🇷';
                    case 'en':
                        return '🇬🇧';
                    default:
                        return '🇫🇷';
                }
            };

            return {
                t,
                selected,
                options,
                getFlag,
            };
        },
    });
</script>

<template>
    <Select
        v-model="selected"
        :options="options"
        optionLabel="label"
        class="w-38"
        :placeholder="t('language')"
    >
        <template #value="{ value, placeholder }">
            <div v-if="value" class="text-sm flex items-center gap-x-2.5">
                {{ getFlag(value.code) }}
                <span>{{ t(value.label) }}</span>
            </div>
            <span v-else>{{ placeholder }}</span>
        </template>

        <template #option="{ option }">
            <div class="text-sm flex items-center gap-x-2.5">
                {{ getFlag(option.code) }}
                <span>{{ t(option.label) }}</span>
            </div>
        </template>
    </Select>
</template>
