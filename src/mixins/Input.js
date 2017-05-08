module.exports = {
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
