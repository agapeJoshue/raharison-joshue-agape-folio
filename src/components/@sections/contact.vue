<script lang="ts">
    import { defineComponent, ref } from 'vue';
    import { useThemeStore } from '../../hooks/useThemeStore';

    interface Field<T> {
        value: T;
        error: boolean;
        error_message: string;
    }

    export default defineComponent({
        name: 'ContactSection',
        setup() {
            const { isDark } = useThemeStore();
            const errorNumber = ref(0);

            const username = ref<Field<string>>({ value: '', error: false, error_message: '' });
            const email = ref<Field<string>>({ value: '', error: false, error_message: '' });
            const location = ref<Field<string>>({ value: '', error: false, error_message: '' });
            const budget = ref<Field<number>>({
                value: 0,
                error: false,
                error_message: '',
            });
            const subject = ref<Field<string>>({ value: '', error: false, error_message: '' });
            const message = ref<Field<string>>({ value: '', error: false, error_message: '' });

            const resetErrors = () => {
                errorNumber.value = 0;
                [username, email, location, budget, subject, message].forEach((field) => {
                    field.value.error = false;
                    field.value.error_message = '';
                });
            };

            const hasError = (): boolean => {
                resetErrors();
                let error = false;

                const check = (field: Field<any>, msg: string) => {
                    error = true;
                    errorNumber.value++;
                    field.error = true;
                    field.error_message = msg;
                };

                if (!username.value.value.trim()) check(username.value, 'Le nom est requis');
                if (!email.value.value.trim()) check(email.value, 'L’adresse e-mail est requise');
                if (!location.value.value.trim())
                    check(location.value, 'La localisation est requise');
                if (budget.value.value === 0) check(budget.value, 'Le budget est requis');
                if (!subject.value.value.trim()) check(subject.value, 'Le sujet est requis');
                if (!message.value.value.trim()) check(message.value, 'Le message est requis');

                return error;
            };

            const onSubmit = () => {
                if (hasError()) return;

                const payload = {
                    username: username.value.value,
                    email: email.value.value,
                    location: location.value.value,
                    budget: budget.value.value,
                    subject: subject.value.value,
                    message: message.value.value,
                };

                console.log('Payload envoyé :', payload);
            };

            return {
                isDark,
                errorNumber,
                username,
                email,
                location,
                budget,
                subject,
                message,
                onSubmit,
            };
        },
    });
</script>

<template>
    <section
        id="contact"
        class="relative w-full pt-10 lg:h-190"
        :style="{
            minHeight: errorNumber > 0 ? `${760 + errorNumber * 22}px` : '760px',
        }"
    >
        <div
            class="max-w-7xl w-full mx-auto p-6 sm:p-10 lg:p-14 xl:px-20 xl:py-20 lg:absolute lg:top-10 lg:left-1/2 lg:-translate-x-1/2 bg-white dark:bg-gray-950 personal-shadow rounded-3xl grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-up"
        >
            <div class="space-y-10">
                <div class="space-y-4">
                    <h1
                        class="font-extrabold text-3xl sm:text-4xl tracking-tight text-emerald-600 dark:text-emerald-400"
                    >
                        Discutons de votre projet
                    </h1>

                    <p class="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md">
                        Je suis disponible pour des missions freelance. Contactez-moi si vous pensez
                        que je peux correspondre à votre projet.
                    </p>
                </div>

                <div class="space-y-5">
                    <ContactCard title="Adresse">
                        <template #icon>
                            <MapPin :size="22" class="text-emerald-600 dark:text-emerald-400" />
                        </template>
                        Lot 021B III 3504FR Ankofafa William Fianarantsoa
                    </ContactCard>

                    <a href="mailto:agapedev.dark@gmail.com">
                        <ContactCard title="Email">
                            <template #icon>
                                <Mail :size="22" class="text-emerald-600 dark:text-emerald-400" />
                            </template>
                            agapedev.dark@gmail.com
                        </ContactCard>
                    </a>

                    <ContactCard title="Téléphone" class="mt-5">
                        <template #icon>
                            <Phone :size="22" class="text-emerald-600 dark:text-emerald-400" />
                        </template>
                        +261 34 24 393 87
                        <span class="text-neutral-400 mx-1">ou</span>
                        +261 33 68 473 73
                    </ContactCard>
                </div>
            </div>

            <div class="flex flex-col space-y-8">
                <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    Je suis toujours ouvert à discuter de projets de développement ou d’opportunités
                    de partenariat.
                </p>

                <div class="w-full space-y-4">
                    <div class="w-full">
                        <label for="username">Nom</label>
                        <InputText
                            id="username"
                            type="text"
                            v-model="username.value"
                            class="w-full mt-1 bg-gray-50 dark:bg-zinc-950"
                            :class="username.error ? 'border-red-600 dark:border-red-400' : ''"
                            placeholder="Entrez votre nom complet"
                        />
                        <small
                            v-if="username.error"
                            class="text-red-600 dark:text-red-400 font-medium"
                            >{{ username.error_message }}</small
                        >
                    </div>

                    <div class="w-full">
                        <label for="email">Adresse e-mail</label>
                        <InputText
                            id="email"
                            type="email"
                            v-model="email.value"
                            class="w-full mt-1 bg-gray-50 dark:bg-zinc-950"
                            :class="email.error ? 'border-red-600 dark:border-red-400' : ''"
                            placeholder="Entrez votre adresse e-mail"
                        />
                        <small
                            v-if="email.error"
                            class="text-red-600 dark:text-red-400 font-medium"
                            >{{ email.error_message }}</small
                        >
                    </div>

                    <div class="w-full">
                        <label for="location">Localisation</label>
                        <InputText
                            id="location"
                            type="text"
                            v-model="location.value"
                            class="w-full mt-1 bg-gray-50 dark:bg-zinc-950"
                            :class="location.error ? 'border-red-600 dark:border-red-400' : ''"
                            placeholder="Entrez votre ville ou pays"
                        />
                        <small
                            v-if="location.error"
                            class="text-red-600 dark:text-red-400 font-medium"
                            >{{ location.error_message }}</small
                        >
                    </div>

                    <div class="grid grid-cols-3 gap-x-4">
                        <div class="w-full">
                            <label for="budget">Budget</label>
                            <InputNumber
                                v-model="budget.value"
                                inputId="currency-germany"
                                fluid
                                mode="currency"
                                currency="EUR"
                                locale="de-DE"
                                class="w-full mt-1 bg-gray-50 dark:bg-zinc-950"
                                :class="budget.error ? 'border-red-600 dark:border-red-400' : ''"
                            />
                            <small
                                v-if="budget.error"
                                class="text-red-600 dark:text-red-400 font-medium"
                                >{{ budget.error_message }}</small
                            >
                        </div>
                        <div class="w-full col-span-2">
                            <label for="subject">Sujet</label>
                            <InputText
                                id="subject"
                                type="text"
                                v-model="subject.value"
                                class="w-full mt-1 bg-gray-50 dark:bg-zinc-950"
                                :class="subject.error ? 'border-red-600 dark:border-red-400' : ''"
                                placeholder="Entrez le sujet de votre message"
                            />
                            <small
                                v-if="subject.error"
                                class="text-red-600 dark:text-red-400 font-medium"
                                >{{ subject.error_message }}</small
                            >
                        </div>
                    </div>

                    <div class="w-full">
                        <label for="message">Message</label>
                        <Textarea
                            id="message"
                            v-model="message.value"
                            rows="4"
                            style="resize: none"
                            class="w-full mt-1 bg-gray-50 dark:bg-zinc-950"
                            :class="message.error ? 'border-red-600 dark:border-red-400' : ''"
                            placeholder="Décrivez brièvement votre projet ou votre demande"
                        />
                        <small
                            v-if="message.error"
                            class="text-red-600 dark:text-red-400 font-medium"
                            >{{ message.error_message }}</small
                        >
                    </div>

                    <Button @click="onSubmit" class="text-base font-medium px-4" size="large"
                        >Submit <SendHorizonal :size="18"
                    /></Button>
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
