import GaSearch from '~/components/molecules/search';

import { bemCn } from '~/base/mixins';

// @vue/component
export default {
    name: 'ga-header',

    components: {
        GaSearch
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
