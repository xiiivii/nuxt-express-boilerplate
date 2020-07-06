import { mixinNamespaceGenerator } from '../utils';

const namespace = mixinNamespaceGenerator('valuable', [
    'el',

    'elType',
    'elEvent',
    'elProp',

    'updateValue',
    'updateValueFromEvent',

    'modelEvent'
]);

const defaultOptions = {
    // function that transform value,
    // i.e. always convert value to number
    valueTransform: value => value,

    // props from parent
    nameProp: 'name',
    valueProp: 'value',

    // data prop to store value internally
    valueInternalData: 'valueInternal',

    // method for manual emitting
    updateValueMethod: 'updateValue'
};

export default userOptions => {
    let options;

    // assuming it's autobind to ref
    if (typeof userOptions === 'string') {
        options = { ...defaultOptions, ref: userOptions };
    } else {
        options = { ...defaultOptions, ...userOptions };
    }

    return {
        props: {
            [options.nameProp]: {
                type: String
            },
            [options.valueProp]: {
                required: true
            }
        },

        model: {
            prop: options.valueProp,
            event: namespace.modelEvent
        },

        computed: {
            [namespace.el]() {
                if (options.ref) {
                    const $ref = this.$refs[options.ref];

                    return $ref.$el || $ref;
                }

                return null;
            },

            [namespace.elType]() {
                const $el = this[namespace.el];
                const tag = $el.tagName.toLowerCase();

                if (tag === 'textarea') {
                    return 'text';
                }

                return $el.type;
            },

            [namespace.elEvent]() {
                const type = this[namespace.elType];

                return {
                    text: 'input',
                    radio: 'change',
                    checkbox: 'change',
                    textarea: 'input'
                }[type] || 'input';
            },

            [namespace.elProp]() {
                const type = this[namespace.elType];

                return {
                    text: 'value',
                    radio: 'value',
                    checkbox: 'checked',
                    textarea: 'value'
                }[type] || 'value';
            }
        },

        data() {
            return {
                [options.valueInternalData]: null
            };
        },

        mounted() {
            const $el = this[namespace.el];

            if ($el) {
                $el.addEventListener(
                    this[namespace.elEvent],
                    this[namespace.updateValueFromEvent],
                    true
                );
            }
        },

        destroyed() {
            const $el = this[namespace.el];

            if ($el) {
                $el.removeEventListener(
                    this[namespace.elEvent],
                    this[namespace.updateValueFromEvent]
                );
            }
        },

        watch: {
            [options.valueProp]: {
                immediate: true,
                handler(value) {
                    this[options.valueInternalData] = value;
                }
            }
        },

        methods: {
            [options.updateValueMethod](value, ignoreNativeEvent) {
                const $el = this[namespace.el];

                if (ignoreNativeEvent || !$el) {
                    this[namespace.updateValue](value);

                    return;
                }

                const elEvent = this[namespace.elEvent];
                const elProp = this[namespace.elProp];

                const event = document.createEvent('Event');

                event.initEvent(elEvent, true, true);

                $el[elProp] = value;
                $el.dispatchEvent(event);
            },

            [namespace.updateValueFromEvent](event) {
                const prop = this[namespace.elProp];
                const value = event.target[prop];

                this[namespace.updateValue](value);
            },

            [namespace.updateValue](value) {
                this.$emit(
                    namespace.modelEvent,
                    options.valueTransform(value)
                );
            }
        }
    };
};
