module.exports = {
    props: {
        field: {
            required: true,
            twoWay: true,
        },

        model: {
            required: true,
            twoWay: true,
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
