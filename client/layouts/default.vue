<template>
    <ga-app>
        <ga-header />
        <nuxt />
    </ga-app>
</template>

<script>
    import GaApp from '~/components/organisms/app';
    import GaHeader from '~/components/organisms/header';

    export default {
        name: 'layout-default',

        components: {
            GaApp,
            GaHeader
        },

        computed: {
            meta () {
                return [
                    {
                        charset: 'utf-8'
                    },
                    {
                        name: 'viewport',
                        content: 'width=device-width, initial-scale=1'
                    },
                    {
                        hid: 'description',
                        name: 'description', content: 'Nuxt Express Boilerplate'
                    }
                ];
            }
        }
    };
</script>
