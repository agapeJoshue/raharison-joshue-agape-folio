<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ProjectConception',
        emits: ['on-close'],
        setup(_, { emit }) {
            const onClose = () => emit('on-close');
            return { onClose };
        },
    });
</script>

<template>
    <section
        class="relative w-full max-w-5xl mx-auto px-5 py-8 lg:p-15 rounded-4xl backdrop-blur-xl lg:border border-orange-500 dark:border-yellow-500 space-y-12 shadow-2xl overflow-hidden"
    >
        <Button
            @click="onClose"
            size="small"
            class="bg-transparent text-orange-600 hover:text-orange-500 dark:text-yellow-400 dark:hover:text-yellow-500 border-none absolute right-4 top-5"
        >
            <CloseIcon />
        </Button>
        <h1
            class="relative w-fit border-b-[0.11rem] text-4xl mt-6 pb-2 text-orange-600 dark:text-yellow-400"
        >
            ANALYSE ET CONCEPTION
        </h1>

        <div
            class="border border-orange-500 dark:border-yellow-500 w-full min-h-100 rounded-md"
        ></div>

        <p class="text-lg dark:text-neutral-200 tracking-widest font-light">
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante
            interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet
            egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my awesome work.
        </p>

        <p class="text-lg dark:text-neutral-200 tracking-wider font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus,
            blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in
            aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus.
            Pellentesque aliquam maximus risus, vel sed vehicula.
        </p>
    </section>
</template>
