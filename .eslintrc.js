module.exports = {
    root: true,
    env: {
        node: true,
        es6: true
    },
    overrides: [
        {
            files: './server/*.js',
            extends: './server/.eslintrc.js'
        },
        {
            files: [
                './client/*.js',
                './client/*.vue'
            ],
            extends: './client/.eslintrc.js'
        }
    ],
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    rules: {

        /*
        **  ESLint Rules
        */

        /*
        **  Possible Errors
        **  https://eslint.org/docs/rules/#possible-errors
        */

        'for-direction': 'error',
        'getter-return': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': 'error',
        'no-console': 'warn',
        'no-constant-condition': 'error',
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': [
            'error',
            'functions'
        ],
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-loss-of-precision': 'warn',
        'no-misleading-character-class': 'error',
        'no-obj-calls': 'error',
        'no-promise-executor-return': 'error',
        'no-prototype-builtins': 'error',
        'no-regex-spaces': 'error',
        'no-setter-return': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'no-useless-backreference': 'error',
        'require-atomic-updates': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',


        /*
        **  Best practices
        **  https://eslint.org/docs/rules/#best-practices
        */

        'accessor-pairs': 'error',
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'class-methods-use-this': 'error',
        'complexity': [
            'error',
            6
        ],
        'consistent-return': 'warn',
        'curly': 'error',
        'default-case': 'error',
        'default-case-last': 'error',
        'default-param-last': 'warn',
        'dot-location': [
            'error',
            'property'
        ],
        'dot-notation': 'error',
        'eqeqeq': 'error',
        'grouped-accessor-pairs': 'error',
        'guard-for-in': 'error',
        'max-classes-per-file': 'error',
        'no-alert': 'warn',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-constructor-return': 'error',
        'no-div-regex': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': 'off',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-octal': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-proto': 'error',
        'no-redeclare': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'warn',
        'no-unused-expressions': 'error',
        'no-unused-labels': 'error',
        'no-useless-call': 'error',
        'no-useless-catch': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'no-warning-comments': 'error',
        'no-with': 'error',
        'prefer-named-capture-group': 'warn',
        'prefer-promise-reject-errors': [
            'error',
            {
                allowEmptyReject: true
            }
        ],
        'prefer-regex-literals': 'error',
        'radix': 'error',
        'require-await': 'error',
        'require-unicode-regexp': 'off',
        'vars-on-top': 'error',
        'wrap-iife': 'error',
        'yoda': 'error',


        /*
        **  Strict
        **  https://eslint.org/docs/rules/#strict-mode
        */

        'strict': [
            'error',
            'never'
        ],


        /*
        **  Variables
        **  https://eslint.org/docs/rules/#variables
        */

        'init-declarations': 'off',
        'no-delete-var': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': 'error',
        'no-shadow': 'error',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-unused-vars': 'error',
        'no-use-before-define': [
            'error',
            'nofunc'
        ],


        /*
        **  Stylistic Issues
        **  https://eslint.org/docs/rules/#stylistic-issues
        */

        'array-bracket-newline': [
            'error',
            'consistent'
        ],
        'array-bracket-spacing': [
            'error',
            'never'
        ],
        'block-spacing': [
            'error',
            'always'
        ],
        'brace-style': [
            'error',
            '1tbs',
            {
                allowSingleLine: true
            }
        ],
        'camelcase': 'error',
        'capitalized-comments': 'off',
        'comma-dangle': [
            'error',
            'never'
        ],
        'comma-spacing': 'error',
        'comma-style': 'error',
        'computed-property-spacing': 'error',
        'consistent-this': [
            'error',
            '_this'
        ],
        'eol-last': 'error',
        'func-call-spacing': 'error',
        'func-name-matching': 'warn',
        'func-names': [
            'warn',
            'as-needed'
        ],
        'func-style': 'off',
        'function-call-argument-newline': [
            'error',
            'consistent'
        ],
        'function-paren-newline': [
            'error',
            'consistent'
        ],
        'id-blacklist': ['error', 'e', 'ev', 'err', 'callback', 'cb'],
        'id-length': 'off',
        'id-match': 'off',
        'implicit-arrow-linebreak': [
            'error',
            'beside'
        ],
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1,
                ignoredNodes: ['JSXOpeningElement']
            }
        ],
        'jsx-quotes': [
            'error',
            'prefer-single'
        ],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'line-comment-position': 'off',
        'linebreak-style': [
            'error',
            'unix'
        ],
        'lines-around-comment': 'error',
        'lines-between-class-members': 'error',
        'max-depth': [
            'error',
            2
        ],
        'max-len': [
            'error',
            {
                code: 100,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true
            }
        ],
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        'max-nested-callbacks': [
            'error',
            3
        ],
        'max-params': [
            'error',
            4
        ],
        'max-statements': [
            'error',
            10
        ],
        'max-statements-per-line': 'error',
        'multiline-comment-style': 'off',
        'multiline-ternary': 'off',
        'new-cap': 'error',
        'new-parens': 'error',
        'newline-per-chained-call': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-continue': 'off',
        'no-inline-comments': 'off',
        'no-lonely-if': 'error',
        'no-mixed-operators': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-multiple-empty-lines': [
            'error',
            {
                max: 2,
                maxEOF: 0,
                maxBOF: 0
            }
        ],
        'no-negated-condition': 'error',
        'no-nested-ternary': 'error',
        'no-new-object': 'error',
        'no-plusplus': 'error',
        'no-tabs': 'error',
        'no-ternary': 'off',
        'no-trailing-spaces': 'error',
        'no-underscore-dangle': [
            'warn',
            {
                allowAfterThis: true
            }
        ],
        'no-unneeded-ternary': 'error',
        'no-whitespace-before-property': 'error',
        'nonblock-statement-body-position': [
            'error',
            'below'
        ],
        'object-curly-newline': [
            'error',
            {
                consistent: true
            }
        ],
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'object-property-newline': 'off',
        'one-var': [
            'error',
            'never'
        ],
        'one-var-declaration-per-line': 'error',
        'operator-assignment': [
            'warn',
            'always'
        ],
        'operator-linebreak': [
            'error',
            'after'
        ],
        'padded-blocks': [
            'error',
            'never'
        ],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: [
                    'const',
                    'let',
                    'var'
                ],
                next: '*'
            },
            {
                blankLine: 'any',
                prev: [
                    'const',
                    'let',
                    'var'
                ],
                next: [
                    'const',
                    'let',
                    'var'
                ]
            },
            {
                blankLine: 'always',
                prev: '*',
                next: 'return'
            }
        ],
        'prefer-exponentiation-operator': 'warn',
        'prefer-object-spread': 'warn',
        'quote-props': [
            'error',
            'consistent-as-needed'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': 'error',
        'semi-spacing': 'error',
        'semi-style': 'error',
        'sort-keys': 'off',
        'sort-vars': 'off',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'off',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ],
        'space-in-parens': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': 'error',
        'spaced-comment': [
            'error',
            'always'
        ],
        'switch-colon-spacing': 'error',
        'template-tag-spacing': 'error',
        'unicode-bom': 'off',
        'wrap-regex': 'off',


        /*
        **  ECMAScript 6
        **  https://eslint.org/docs/rules/#ecmascript-6
        */

        'arrow-body-style': 'off',
        'arrow-parens': [
            'error',
            'as-needed'
        ],
        'arrow-spacing': 'error',
        'constructor-super': 'error',
        'generator-star-spacing': 'error',
        'no-class-assign': 'error',
        'no-confusing-arrow': 'error',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'error',
        'no-new-symbol': 'error',
        'no-restricted-exports': 'off',
        'no-restricted-imports': 'off',
        'no-this-before-super': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-const': 'error',
        'prefer-destructuring': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'require-yield': 'error',
        'rest-spread-spacing': 'error',
        'sort-imports': 'off',
        'symbol-description': 'error',
        'template-curly-spacing': 'error',
        'yield-star-spacing': 'off'
    }
};
