module.exports = {
    srcDir: 'client',

    mode: 'universal',

    server: {
        port: 3000,
        host: 'localhost'
    },

    telemetry: false,

    /*
    ** Headers of the page
    */
    head: {
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1.0'
            },
            {
                name: 'HandheldFriendly',
                content: 'true'
            },
            {
                name: 'MobileOptimized',
                content: 'width'
            },
            {
                name: 'apple-mobile-web-app-capable',
                content: 'yes'
            }
        ],
        script: [
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: false,

    /*
    ** Global CSS
    */
    css: [
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],

    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios'
    ],

    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
    },

    /*
    ** Build configuration
    */
    build: {

        /*
        ** You can extend webpack config here
        */
    }
};
