import GaButton from '~/components/atoms/button';
import GaInput from '~/components/atoms/input';

import { bemCn } from '~/base/mixins';


export default {
    name: 'ga-search',

    mixins: [
        bemCn()
    ],

    data() {
        return {
            search: ''
        };
    },

    components: {
        GaButton,
        GaInput
    }
};
