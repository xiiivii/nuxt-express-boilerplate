module.exports = {
    env: {
        browser: true,
        es6: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: [
        'nuxt',
        'vue'
    ],
    extends: [
        'plugin:nuxt/recommended',
        'plugin:vue/essential'
    ],
    overrides: [
        {
            files: '*.vue',
            rules: {
                indent: 'off'
            }
        }
    ],
    rules: {

        /*
        **  !!! IMPORTANT !!!!
        **  COMMENTED RULES ARE AVAILABLE ONLY IN THE ESLINT-PLUGIN-VUE ^7.0.0
        **  UNCOMMENT THEM WHEN THIS VERSION IS RELEASED
        */

        /*
        **  ESLint-plugin-nuxt
        **  Base and Recommended Rules are already in 'plugin:nuxt/recommended'
        **  https://github.com/nuxt/eslint-plugin-nuxt/blob/master/README.md
        */

        /*
        **  Other Rules
        **  https://github.com/nuxt/eslint-plugin-nuxt#other-rules
        */

        'nuxt/require-func-head': 'error',


        /*
        **  ESLint-plugin-vue for Vue.js 2.x
        **  Base Rules and Error Prevention are already in 'plugin:vue/essential'
        **  https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/README.md
        */

        /*
        **  Strongly Recommended Rules
        **  https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/README.md#priority-b-strongly-recommended-improving-readability-for-vuejs-2x
        */

        'vue/attribute-hyphenation': 'error',
        'vue/component-definition-name-casing': [
            'error',
            'kebab-case'
        ],
        'vue/html-closing-bracket-newline': 'error',
        'vue/html-closing-bracket-spacing': 'error',
        'vue/html-end-tags': 'error',
        'vue/html-indent': [
            'error',
            4
        ],
        'vue/html-quotes': 'error',
        'vue/html-self-closing': 'error',
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: 3
            }
        ],
        'vue/multiline-html-element-content-newline': 'error',
        'vue/mustache-interpolation-spacing': 'error',
        'vue/no-multi-spaces': 'error',
        'vue/no-spaces-around-equal-signs-in-attribute': 'error',
        'vue/no-template-shadow': 'error',
        // 'vue/one-component-per-file': 'error',
        'vue/prop-name-casing': 'error',
        'vue/require-default-prop': 'error',
        'vue/require-prop-types': 'error',
        'vue/singleline-html-element-content-newline': 'error',
        'vue/v-bind-style': 'error',
        'vue/v-on-style': 'error',
        'vue/v-slot-style': 'error',


        /*
        **  Recommended Rules
        **  https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/README.md#priority-c-recommended-minimizing-arbitrary-choices-and-cognitive-overhead-for-vuejs-2x
        */

        'vue/attributes-order': 'error',
        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style']
            }
        ],
        // 'vue/no-multiple-slot-args': 'error',
        'vue/no-v-html': 'warn',
        'vue/order-in-components': 'error',
        'vue/this-in-template': 'error',


        /*
        **  Uncategorized Rules
        **  https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/README.md#uncategorized
        */

        'vue/component-name-in-template-casing': [
            'error',
            'kebab-case'
        ],
        // 'vue/html-comment-content-newline': 'error',
        // 'vue/html-comment-content-spacing': 'error',
        // 'vue/html-comment-indent': ['error', 4],
        'vue/match-component-file-name': 'off',
        'vue/no-bare-strings-in-template': 'off',
        'vue/no-boolean-default': 'off',
        // 'vue/no-duplicate-attr-inheritance': 'error',
        // 'vue/no-empty-component-block': 'error',
        // 'vue/no-multiple-objects-in-class': 'error',
        // 'vue/no-unsed-vars': ['error', {
        //     presets: ['nuxt', 'vue']
        // }],
        'vue/no-reserved-component-names': 'error',
        // 'vue/no-restricted-component-options': 'error',
        'vue/no-restricted-static-attribute': 'off',
        // 'vue/no-restricted-v-bind': 'error',
        'vue/no-static-inline-styles': 'error',
        // 'vue/no-template-target-blank': 'error',
        // 'vue/no-unregistered-components': 'error',
        'vue/no-unsupported-features': [
            'off',
            {
                version: '^2.6.0'
            }
        ],
        // 'vue/no-unused-properties': 'error',
        // 'vue/no-useless-mustaches': 'error',
        // 'vue/no-useless-v-bind': 'error',
        'vue/padding-line-between-blocks': 'error',
        'vue/require-direct-export': 'error',
        // 'vue/require-explicit-emits': 'error',
        'vue/require-name-property': 'error',
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1,
                switchCase: 1
            }
        ],
        'vue/sort-keys': 'off',
        'vue/static-class-names-order': 'off',
        'vue/v-on-function-call': ['error', 'always'],


        /*
        **  Extension Rules
        **  These rules extend the rules of ESLint and apply them to the <template>.
        **  https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/README.md#extension-rules
        */

        'vue/array-bracket-spacing': [
            'error',
            'never'
        ],
        'vue/arrow-spacing': 'error',
        'vue/block-spacing': ['error', 'always'],
        'vue/brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: true
            }
        ],
        'vue/camelcase': 'error',
        'vue/comma-dangle': [
            'error',
            'never'
        ],
        // 'vue/comma-spacing': 'error',
        // 'vue/comma-style': 'error',
        'vue/dot-location': [
            'error',
            'property'
        ],
        // 'vue/dot-notation': 'error',
        'vue/eqeqeq': 'error',
        // 'vue/func-call-spacing': 'error',
        'vue/key-spacing': 'error',
        'vue/keyword-spacing': 'error',
        'vue/max-len': [
            'error',
            {
                code: 100,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true
            }
        ],
        'vue/no-empty-pattern': 'error',
        // 'vue/no-extra-parens': [
        //     'error',
        //     'functions'
        // ],
        'vue/no-irregular-whitespace': 'error',
        // 'vue/no-useless-concat': 'error',
        // 'vue/object-curly-newline': [
        //     'error',
        //     {
        //         consistent: true
        //     }
        // ],
        'vue/object-curly-spacing': [
            'error',
            'always'
        ],
        'vue/object-property-newline': 'off',
        // 'vue/operator-linebreak': [
        //     'error',
        //     'after'
        // ],
        // 'vue/prefer-template': 'error',
        // 'vue/space-in-parens': 'error',
        'vue/space-infix-ops': 'error',
        'vue/space-unary-ops': 'error'
        // 'vue/template-curly-spacing': 'error'
    }
};
