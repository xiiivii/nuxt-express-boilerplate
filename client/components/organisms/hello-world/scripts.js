import GaButton from '~/components/atoms/button';

import { bemCn } from '~/base/mixins';

import { mapMutations, mapGetters } from 'vuex';


export default {
    name: 'ga-hello-world',

    mixins: [
        bemCn()
    ],

    data() {
        return {
            pingResponse: null
        };
    },

    computed: {
        ...mapGetters('app', [
            'getScrollTop',
            'getScrollFreezeState',
            'getWindowSize',
            'getWindowSizeLazy'
        ]),

        windowSize() {
            const size = this.getWindowSize();

            return this.formatWindowSize(size);
        },

        windowSizeLazy() {
            const size = this.getWindowSizeLazy();

            return this.formatWindowSize(size);
        }
    },

    methods: {
        ...mapMutations('app', [
            'freezeScroll',
            'unfreezeScroll'
        ]),

        onToggleFreezeClick() {
            return this.getScrollFreezeState() ?
                this.unfreezeScroll() :
                this.freezeScroll();
        },

        onPingClick() {
            this.$axios.$get('/api/ping')
                .then(this.onPingSuccess);
        },

        onPingSuccess(response) {
            this.pingResponse = response;
        },

        formatWindowSize(size) {
            const { innerWidth, innerHeight } = size;

            return `${innerWidth}×${innerHeight}`;
        }
    },

    components: {
        GaButton
    }
};
