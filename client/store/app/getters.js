export default {
    getScrollTop: state => () => {
        return state.scrollTop;
    },

    getScrollFreezeState: state => () => {
        return state.scrollFreeze;
    },

    getWindowSize: state => () => {
        return state.windowSize;
    },

    getWindowSizeLazy: state => () => {
        return state.windowSizeLazy;
    }
};
