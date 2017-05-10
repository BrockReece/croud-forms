module.exports = {
    model: {
        prop: 'model',
        event: 'set-value',
    },

    props: {
        field: {
            required: true,
        },

        model: {
            required: true,
        },

        placeholder: {
            default: 'None',
        },

        transparent: {
            default: false,
        },

        readOnly: {
            default: false,
        },
    },
}
