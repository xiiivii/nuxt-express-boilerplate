module.exports = {
    env: {
        node: true,
        es6: true
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020
    },
    plugins: [
        'node'
    ],
    extends: [
        'plugin:node/recommended'
    ],
    rules: {

        /*
        **  ESLint-plugin-node
        **  Best Practices and most of the Possible Errors are already in 'plugin:node/recommended'
        **  https://github.com/nuxt/eslint-plugin-nuxt/blob/master/README.md
        */

        // set 'exports' as second parameter if using TS with ES Modules
        'node/exports-style': ['error', 'module.exports'],

        // remove next line if using TS with ES Modules
        'node/no-extraneous-require': 'off',


        /*
        **  Stylistic Issues
        **  https://github.com/mysticatea/eslint-plugin-node/tree/master#stylistic-issues
        */

        'node/no-callback-literal': 'error',
        'node/file-extension-in-import': [
            'error',
            'always',
            {
                '.js': 'never'
            }
        ],
        'node/no-mixed-requires': 'error',
        'node/no-process-env': 'error',
        'node/no-restricted-import': 'off',
        'node/no-restricted-require': 'off',
        'node/no-sync': 'error',
        'node/prefer-global/buffer': 'error',
        'node/prefer-global/console': 'error',
        'node/prefer-global/process': 'error',
        'node/prefer-global/text-decoder': 'error',
        'node/prefer-global/text-encoder': 'error',
        'node/prefer-global/url-search-params': 'error',
        'node/prefer-global/url': 'error',
        'node/prefer-promises/dns': 'error',
        'node/prefer-promises/fs': 'error'
    }
};
