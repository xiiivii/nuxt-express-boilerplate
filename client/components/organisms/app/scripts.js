import { bemCn } from '~/base/mixins';

import { mapGetters, mapMutations } from 'vuex';


const POINTER_INTERACTION_DELAY = 500;
const RESIZING_DELAY = 250;

const FOCUS = {
    POINTER: 'pointer',
    KEYBOARD: 'keyboard'
};

const HOVER = {
    SUPPORTED: 'supported',
    UNSUPPORTED: 'unsupported'
};

export default {
    name: 'ga-app',

    mixins: [
        bemCn()
    ],

    props: {
        debug: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            focus: FOCUS.KEYBOARD,
            hover: HOVER.UNSUPPORTED,
            resizing: false,

            pointerInteraction: false,
            pointerInteractionTimeout: null,

            resizingTimeout: null
        };
    },

    mounted() {
        window.addEventListener('orientationchange', this.onResize);
        window.addEventListener('resize', this.onResize);
        window.addEventListener('scroll', this.onScroll);


        this.onResize();
        this.onScroll();

        this.initFocusSourceDetection();

        this.setFocusSource();
        this.setHoverSupport();

        this.updateClasses();
    },

    watch: {
        focus() {
            this.updateClasses();
        },

        hover() {
            this.updateClasses();
        },

        resizing() {
            this.updateClasses();
        },

        scrollFreeze(value) {
            const overflow = value ? 'hidden' : 'auto';
            const padding = value ? window.innerWidth - document.documentElement.clientWidth : 0;

            document.body.style.overflow = overflow;
            document.body.style.paddingRight = `${padding}px`;
        }
    },

    computed: {
        ...mapGetters('app', [
            'getScrollFreezeState'
        ]),

        scrollFreeze() {
            return this.getScrollFreezeState();
        }
    },

    methods: {
        ...mapMutations('app', [
            'setScrollTop',
            'setWindowSize',
            'setWindowSizeLazy'
        ]),

        onResize() {
            this.updateWindowSize();
            this.updateResizing();
        },

        onScroll() {
            const maxScrollTop = (
                document.body.scrollHeight ||
                document.documentElement.scrollHeight
            ) - window.innerHeight;
            let scrollTop = (
                document.body.scrollTop ||
                document.documentElement.scrollTop
            );

            if (scrollTop < 0) {
                scrollTop = 0;
            } else if (scrollTop > maxScrollTop) {
                scrollTop = maxScrollTop;
            }

            this.setScrollTop({ scrollTop });
        },

        initFocusSourceDetection() {
            const html = document.documentElement;

            html.addEventListener('mousedown', this.onPointerEvent, false);
            html.addEventListener('mouseup', this.onPointerEvent, false);
            html.addEventListener('click', this.onPointerEvent, false);

            html.addEventListener('keydown', this.onKeyboardEvent, false);

            html.addEventListener('focusin', this.onFocusIn, false);
        },

        onPointerEvent() {
            this.pointerInteraction = true;

            this.resetPointerTimeout();
        },

        onKeyboardEvent() {
            this.pointerInteraction = false;

            this.unsetPointerTimeout();
        },

        onFocusIn() {
            this.setFocusSource();
        },

        setPointerTimeout() {
            this.pointerInteractionTimeout = setTimeout(
                () => (this.pointerInteraction = false),
                POINTER_INTERACTION_DELAY
            );
        },

        unsetPointerTimeout() {
            this.pointerInteractionTimeout = clearTimeout(this.pointerInteractionTimeout);
        },

        resetPointerTimeout() {
            this.unsetPointerTimeout();
            this.setPointerTimeout();
        },

        setFocusSource() {
            this.focus = this.pointerInteraction ? FOCUS.POINTER : FOCUS.KEYBOARD;
        },

        setHoverSupport() {
            try {
                const hoverIsHover = window.matchMedia('(hover: hover)').matches;
                const hoverIsNone = window.matchMedia('(hover: none)').matches;

                const hoverMediaIsProbablySupported = hoverIsHover || hoverIsNone;

                this.hover = hoverMediaIsProbablySupported ? HOVER.SUPPORTED : HOVER.UNSUPPORTED;
            } catch (_) {
                this.hover = HOVER.UNSUPPORTED;
            }
        },

        updateWindowSize() {
            const { innerWidth, innerHeight } = window;

            this.setWindowSize({ innerWidth, innerHeight });
        },

        updateResizing() {
            this.startResizing();

            clearTimeout(this.resizingTimeout);

            this.resizingTimeout = setTimeout(this.finishResizing, RESIZING_DELAY);
        },

        startResizing() {
            this.resizing = true;
        },

        finishResizing() {
            this.resizing = false;

            this.setWindowSizeLazy();
        },

        updateClasses() {
            const { focus, hover, resizing } = this;

            document.body.className = this.b({ focus, hover, resizing });
        }
    }
};
