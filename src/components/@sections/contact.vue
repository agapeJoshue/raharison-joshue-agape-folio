<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import { useToast } from 'primevue/usetoast';
    import { useThemeStore } from '../../hooks/useThemeStore';
    import { useI18n } from 'vue-i18n';
    import { useFetch } from '../../hooks/useApi';
    import { contact } from '../../api/endpoints';

    interface Field<T> {
        value: T;
        error: boolean;
        error_message: string;
    }

    interface ContactPayload {
        full_name: string;
        email: string;
        location: string;
        budget: string;
        subject: string;
        description: string;
    }

    export default defineComponent({
        name: 'ContactSection',
        setup() {
            const { t } = useI18n();
            const toast = useToast();
            const { isDark } = useThemeStore();
            const currentYear = new Date().getFullYear();

            const username = ref<Field<string>>({ value: '', error: false, error_message: '' });
            const email = ref<Field<string>>({ value: '', error: false, error_message: '' });
            const location = ref<Field<string>>({ value: '', error: false, error_message: '' });
            const budget = ref<Field<number>>({ value: 1, error: false, error_message: '' });
            const subject = ref<Field<string>>({ value: '', error: false, error_message: '' });
            const message = ref<Field<string>>({ value: '', error: false, error_message: '' });

            const resetErrors = () => {
                [username, email, location, budget, subject, message].forEach((field) => {
                    field.value.error = false;
                    field.value.error_message = '';
                });
            };

            const resetForm = () => {
                username.value = { value: '', error: false, error_message: '' };
                email.value = { value: '', error: false, error_message: '' };
                location.value = { value: '', error: false, error_message: '' };
                budget.value = { value: 1, error: false, error_message: '' };
                subject.value = { value: '', error: false, error_message: '' };
                message.value = { value: '', error: false, error_message: '' };
            };

            const hasError = (): boolean => {
                resetErrors();
                let error = false;

                const check = (field: Field<any>, msg: string) => {
                    error = true;
                    field.error = true;
                    field.error_message = msg;
                };

                if (!username.value.value.trim()) check(username.value, 'contact.form.name_error');
                if (!email.value.value.trim()) check(email.value, 'contact.form.email_error');
                if (!location.value.value.trim())
                    check(location.value, 'contact.form.location_error');
                if (budget.value.value === 0) check(budget.value, 'contact.form.budget_error');
                if (!subject.value.value.trim()) check(subject.value, 'contact.form.subject_error');
                if (!message.value.value.trim()) check(message.value, 'contact.form.message_error');

                return error;
            };

            const { loading, fetchData } = useFetch<ContactPayload>(contact, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const onSubmit = async () => {
                if (hasError()) return;

                const payload: ContactPayload = {
                    full_name: username.value.value,
                    email: email.value.value,
                    location: location.value.value,
                    budget: String(budget.value.value),
                    subject: subject.value.value,
                    description: message.value.value,
                };

                try {
                    await fetchData({
                        body: JSON.stringify(payload),
                    });

                    toast.add({
                        severity: 'success',
                        summary: 'Succès',
                        detail: 'Votre message a été envoyé avec succès !',
                        group: 'br',
                        life: 3000,
                    });
                    resetForm();
                } catch {
                    toast.add({
                        severity: 'error',
                        summary: 'Erreur',
                        detail: 'Impossible d’envoyer le message. Veuillez réessayer.',
                        group: 'br',
                        life: 3000,
                    });
                }
            };

            const scrollToSection = (id: string) => {
                const element = document.getElementById(id);
                if (!element) return;
                const offset = element.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth',
                });
            };

            return {
                t,
                isDark,
                loading,
                currentYear,
                username,
                email,
                location,
                budget,
                subject,
                message,
                onSubmit,
                scrollToSection,
            };
        },
    });
</script>

<template>
    <section id="contact" class="relative w-full pt-10">
        <Toast position="bottom-right" group="br" />
        <div
            :class="[
                'sticky max-w-7xl w-full mx-auto p-6 sm:p-10 lg:p-14 xl:p-20 backdrop-blur-3xl personal-shadow rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-up border z-2',
                'bg-white/80 border-white',
                'dark:bg-black/80 dark:border-zinc-700',
            ]"
            v-animateonscroll="{
                enterClass: 'animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000',
            }"
        >
            <div class="space-y-10">
                <div class="space-y-15">
                    <h1
                        :class="[
                            'font-extrabold text-3xl sm:text-4xl tracking-tight',
                            'text-orange-600',
                            'dark:text-yellow-400',
                        ]"
                    >
                        {{ t('contact.title') }}
                    </h1>

                    <p
                        :class="[
                            'text-lg leading-relaxed max-w-md',
                            'text-neutral-600',
                            'dark:text-neutral-300',
                        ]"
                    >
                        {{ t('contact.subtitle') }}
                    </p>
                </div>

                <div class="space-y-5">
                    <ContactCard :title="t('contact.address')">
                        <template #icon>
                            <MapPin :size="22" />
                        </template>
                        Lot 021B III 3504FR Ankofafa William Fianarantsoa
                    </ContactCard>

                    <a href="mailto:agapedev.dark@gmail.com">
                        <ContactCard :title="t('contact.email')">
                            <template #icon>
                                <Mail :size="22" />
                            </template>
                            agapedev.dark@gmail.com
                        </ContactCard>
                    </a>

                    <ContactCard :title="t('contact.phone')" class="mt-5">
                        <template #icon>
                            <Phone :size="22" />
                        </template>
                        <div class="">+261 34 24 393 87</div>
                        <div>+261 33 68 473 73</div>
                    </ContactCard>
                </div>
            </div>

            <div class="flex flex-col space-y-8">
                <p
                    :class="[
                        'leading-relaxed font-medium text-lg',
                        'text-neutral-700',
                        'dark:text-neutral-300',
                    ]"
                >
                    {{ t('contact.form_message') }}
                </p>

                <div class="w-full space-y-4">
                    <div class="w-full">
                        <label for="username">{{ t('contact.form.name') }}</label>
                        <InputText
                            id="username"
                            type="text"
                            v-model="username.value"
                            :class="[
                                'w-full mt-1 bg-transparent',
                                username.error
                                    ? 'border-red-600 dark:border-red-400'
                                    : [
                                          'border-zinc-300 hover:border-orange-500 focus:border-orange-500',
                                          'dark:border-zinc-700 dark:hover:border-yellow-400 dark:focus:border-yellow-400',
                                      ],
                            ]"
                            :placeholder="t('contact.form.name_placeholder')"
                        />
                        <small
                            v-if="username.error"
                            class="text-red-600 dark:text-red-400 font-medium"
                            >{{ t(username.error_message) }}</small
                        >
                    </div>

                    <div class="w-full">
                        <label for="email">{{ t('contact.form.email') }}</label>
                        <InputText
                            id="email"
                            type="email"
                            v-model="email.value"
                            :class="[
                                'w-full mt-1 bg-transparent',
                                email.error
                                    ? 'border-red-600 dark:border-red-400'
                                    : [
                                          'border-zinc-300 hover:border-orange-500 focus:border-orange-500',
                                          'dark:border-zinc-700 dark:hover:border-yellow-400 dark:focus:border-yellow-400',
                                      ],
                            ]"
                            :placeholder="t('contact.form.email_placeholder')"
                        />
                        <small
                            v-if="email.error"
                            class="text-red-600 dark:text-red-400 font-medium"
                            >{{ t(email.error_message) }}</small
                        >
                    </div>

                    <div class="w-full">
                        <label for="location">{{ t('contact.form.location') }}</label>
                        <InputText
                            id="location"
                            type="text"
                            v-model="location.value"
                            :class="[
                                'w-full mt-1 bg-transparent',
                                location.error
                                    ? 'border-red-600 dark:border-red-400'
                                    : [
                                          'border-zinc-300 hover:border-orange-500 focus:border-orange-500',
                                          'dark:border-zinc-700 dark:hover:border-yellow-400 dark:focus:border-yellow-400',
                                      ],
                            ]"
                            :placeholder="t('contact.form.location_placeholder')"
                        />
                        <small
                            v-if="location.error"
                            class="text-red-600 dark:text-red-400 font-medium"
                            >{{ t(location.error_message) }}</small
                        >
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="w-full">
                            <label for="budget">{{ t('contact.form.budget') }}</label>
                            <InputNumber
                                v-model="budget.value"
                                inputId="currency-germany"
                                fluid
                                mode="currency"
                                currency="EUR"
                                locale="de-DE"
                                :min="1"
                                inputClass="w-full mt-1 bg-transparent border-zinc-300 hover:border-orange-500 focus:border-orange-500 dark:border-zinc-700 dark:hover:border-yellow-400 dark:focus:border-yellow-400"
                                :class="[budget.error ? 'border-red-600 dark:border-red-400' : '']"
                            />
                            <small
                                v-if="budget.error"
                                class="text-red-600 dark:text-red-400 font-medium"
                                >{{ t(budget.error_message) }}</small
                            >
                        </div>
                        <div class="w-full col-span-1 md:col-span-2">
                            <label for="subject">{{ t('contact.form.subject') }}</label>
                            <InputText
                                id="subject"
                                type="text"
                                v-model="subject.value"
                                :class="[
                                    'w-full mt-1 bg-transparent',
                                    subject.error
                                        ? 'border-red-600 dark:border-red-400'
                                        : [
                                              'border-zinc-300 hover:border-orange-500 focus:border-orange-500',
                                              'dark:border-zinc-700 dark:hover:border-yellow-400 dark:focus:border-yellow-400',
                                          ],
                                ]"
                                :placeholder="t('contact.form.subject_placeholder')"
                            />
                            <small
                                v-if="subject.error"
                                class="text-red-600 dark:text-red-400 font-medium"
                                >{{ t(subject.error_message) }}</small
                            >
                        </div>
                    </div>

                    <div class="w-full">
                        <label for="message">{{ t('contact.form.message') }}</label>
                        <Textarea
                            id="message"
                            v-model="message.value"
                            rows="4"
                            style="resize: none"
                            :class="[
                                'w-full mt-1 bg-transparent',
                                message.error
                                    ? 'border-red-600 dark:border-red-400'
                                    : [
                                          'border-zinc-300 hover:border-orange-500 focus:border-orange-500',
                                          'dark:border-zinc-700 dark:hover:border-yellow-400 dark:focus:border-yellow-400',
                                      ],
                            ]"
                            :placeholder="t('contact.form.message_placeholder')"
                        />
                        <small
                            v-if="message.error"
                            class="text-red-600 dark:text-red-400 font-medium"
                            >{{ t(message.error_message) }}</small
                        >
                    </div>

                    <Button
                        @click="onSubmit"
                        :loading="loading"
                        :label="t('contact.form.submit')"
                        :class="[
                            'text-sm font-medium px-4 py-2.5',
                            'bg-orange-500 border-orange-500 hover:bg-orange-500/90 hover:border-orange-500/90',
                            'dark:bg-yellow-500 dark:border-yellow-500 dark:hover:bg-yellow-500/90 dark:hover:border-yellow-500/90',
                        ]"
                    />
                </div>
            </div>
        </div>

        <div
            class="absolute top-full -translate-y-12 w-full bg-gray-950 dark:bg-gray-900 text-gray-200 z-1"
            v-animateonscroll="{
                enterClass: 'animate-enter fade-in-10 animate-duration-1000',
            }"
        >
            <div
                :class="[
                    'max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10',
                    'pb-10 pt-28 px-6',
                    'md:pb-16 md:pt-25 md:px-12',
                    'lg:pb-10 lg:pt-25',
                    'xl:pb-12 xl:pt-28',
                ]"
            >
                <div class="flex flex-col items-center lg:items-start gap-4 lg:w-1/3">
                    <div
                        class="flex items-center gap-3 transition-all duration-300 ease-out"
                        @click="() => scrollToSection('hero')"
                    >
                        <Gem :size="28" :class="['text-orange-500', 'dark:text-yellow-400']" />

                        <h5
                            :class="[
                                'text-[22px] font-bold tracking-tight select-none',
                                'text-orange-500',
                                'dark:text-yellow-400',
                            ]"
                        >
                            Raharison<span :class="['text-orange-400', 'dark:text-yellow-300']"
                                >.</span
                            >
                        </h5>
                    </div>
                    <p class="text-gray-300 leading-relaxed">{{ t('footer.message1') }}</p>
                </div>

                <div class="lg:w-1/3 text-center space-y-2.5">
                    <p :class="['text-base text-gray-300']">
                        © {{ currentYear }} - {{ t('footer.droit') }}
                    </p>
                    <p :class="['text-base text-gray-300']">{{ t('footer.message2') }}</p>
                    <p :class="['text-base text-gray-400']">Vue 3 + TypeScript + Vite + PrimeVue</p>
                </div>

                <div class="lg:w-1/3 flex flex-col items-center lg:items-end gap-4">
                    <h3 class="text-base font-bold text-neutral-400 mb-4">
                        {{ t('footer.follow_me') }}
                    </h3>
                    <div class="flex gap-3">
                        <SocialIcon
                            tooltip="Facebook"
                            link="https://www.facebook.com/agapejoshue"
                            class="group"
                        >
                            <Facebook
                                class="transition-transform transform hover:scale-125 hover:text-white"
                            />
                        </SocialIcon>
                        <SocialIcon
                            tooltip="Instagram"
                            link="https://www.instagram.com/agapejoshue?igsh=MXZtNGV1ZmRmcDVleA=="
                            class="group"
                        >
                            <Instagram
                                class="transition-transform transform hover:scale-125 hover:text-white"
                            />
                        </SocialIcon>
                        <SocialIcon
                            tooltip="LinkedIn"
                            link="https://www.linkedin.com/in/raharison-joshu%C3%A9-agap%C3%A9-14600129a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            class="group"
                        >
                            <Linkedin
                                class="transition-transform transform hover:scale-125 hover:text-white"
                            />
                        </SocialIcon>
                        <SocialIcon
                            tooltip="GitHub"
                            link="https://github.com/agapeJoshue"
                            class="group"
                        >
                            <Github
                                class="transition-transform transform hover:scale-125 hover:text-white"
                            />
                        </SocialIcon>
                        <SocialIcon
                            tooltip="GitLab"
                            link="https://gitlab.com/agapedev.dark"
                            class="group"
                        >
                            <Gitlab
                                class="transition-transform transform hover:scale-125 hover:text-white"
                            />
                        </SocialIcon>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .personal-shadow {
        box-shadow: 0 0px 100px 5px rgba(0, 0, 0, 0.15);
    }
</style>
