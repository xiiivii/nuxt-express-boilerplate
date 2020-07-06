/*
    Adds method `b` to a component for using in template as
    BEM classes generator helper function based on 'bem-cn-lite' package

    Docs: https://github.com/mistakster/bem-cn-lite#readme
*/

import block from 'bem-cn-lite';

import { mixinNamespaceGenerator } from '../utils';


const namespace = mixinNamespaceGenerator('focusable', [
    // data prop to cache already generated bem-cn instance
    'bCacheData'
]);

const defaultOptions = {
    // block name, where null means get name from component $options
    blockName: null,

    // method to generate BEM-notated class names
    bMethod: 'b'
};

export default userOptions => {
    let options = defaultOptions;

    // assuming it's only block name
    if (typeof userOptions === 'string') {
        options.blockName = userOptions;
    }

    options = { ...options, ...userOptions };

    return {
        data() {
            return {
                [namespace.bCacheData]: null
            };
        },

        methods: {
            [options.bMethod](...args) {
                const firstCall = !this[namespace.bCache];

                if (firstCall) {
                    const name = options.blockName || this.$options.name;

                    this[namespace.bCache] = block(name);
                }

                return this[namespace.bCache].apply(null, args);
            }
        }
    };
};
