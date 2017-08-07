<script>
    export default {
        props: {
            value: {
                required: true,
            },
            schema: {
                required: true,
            },

            readOnly: {
                type: Boolean,
                default: false,
            },

            validations: {
                type: Object,
                default() {
                    return {}
                },
            },
        },

        render(h) {
            const schema = this.schema.map((field) => {
                if (field.children) {
                    return this.recur(h, field)
                }

                return this.buildNode(h, field)
            })

            return h('div', {
                class: 'ui form',
            }, schema)
        },

        methods: {
            buildNode(h, field) {
                return h('croud-form-field', {
                    props: {
                        field,
                        model: this.value[field.field_slug],
                        readOnly: this.readOnly || field.readOnly,
                        validation: this.validations[field.field_slug] || {},
                    },

                    on: {
                        'set-value': (val) => {
                            this.value[field.field_slug] = val
                        },
                    },
                })
            },

            recur(h, field) {
                const children = field.children.map((child) => {
                    if (child.children) {
                        return this.recur(h, child)
                    }

                    return this.buildNode(h, child)
                })

                return h('div', {
                    class: field.class,
                }, children)
            },
        },

        watch: {
            value: {
                deep: true,
                handler(val) {
                    this.$emit('input', val)
                },
            },
        },
    }
</script>
