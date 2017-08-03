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

        validation: {
            required: true,
        },
    },

    computed: {
        value: {
            get() {
                return this.model
            },
            set(val) {
                this.$emit('set-value', val)
            },
        },
    },

    watch: {
        value() {
            if (this.validation.$touch) {
                this.validation.$touch()
            }
        },
    },
}
