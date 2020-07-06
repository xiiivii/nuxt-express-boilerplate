import GaSearch from '~/components/molecules/search';

import { bemCn } from '~/base/mixins';


export default {
    name: 'ga-header',

    mixins: [
        bemCn()
    ],

    components: {
        GaSearch
    },

    data() {
        return {
            search: ''
        };
    }
};
