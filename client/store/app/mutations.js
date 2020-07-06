export default {
    setScrollTop(state, { scrollTop }) {
        state.scrollTop = scrollTop;
    },

    freezeScroll(state) {
        state.scrollFreezeDepth += 1;
        state.scrollFreeze = true;
    },

    unfreezeScroll(state) {
        state.scrollFreezeDepth -= 1;

        if (state.scrollFreezeDepth === 0) {
            state.scrollFreeze = false;
        }
    },

    setWindowSize(state, { innerWidth, innerHeight }) {
        state.windowSize.innerWidth = innerWidth;
        state.windowSize.innerHeight = innerHeight;
    },

    setWindowSizeLazy(state) {
        state.windowSizeLazy = { ...state.windowSize };
    }
};
