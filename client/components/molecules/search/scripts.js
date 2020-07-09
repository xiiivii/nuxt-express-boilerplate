import GaButton from '~/components/atoms/button';
import GaInput from '~/components/atoms/input';

import { bemCn } from '~/base/mixins';

// @vue/component
export default {
    name: 'ga-search',

    components: {
        GaButton,
        GaInput
    },

    mixins: [
        bemCn()
    ],

    data() {
        return {
            search: ''
        };
    }
};
