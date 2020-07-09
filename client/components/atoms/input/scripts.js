import { bemCn, valuable } from '~/base/mixins';

// @vue/component
export default {
    name: 'ga-input',

    mixins: [
        bemCn(),

        valuable('control')
    ]
};
