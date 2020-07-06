const windowSize = {
    innerWidth: 0,
    innerHeight: 0
};

export default () => {
    return {
        scrollTop: 0,
        scrollFreeze: false,
        scrollFreezeDepth: 0,

        windowSize,
        windowSizeLazy: windowSize
    };
};
