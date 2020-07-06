import { bemCn, valuable } from '~/base/mixins';


export default {
    name: 'ga-input',

    mixins: [
        bemCn(),

        valuable('control')
    ]
};
