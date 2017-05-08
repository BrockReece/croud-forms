<script>
    export default {
        props: {
            tag: {
                type: String,
                required: true,
            },
        },
        render(createElement) {
            const component = this
            return createElement('input',
                {
                    domProps: {
                        type: this.tag,
                        value: component.value,
                    },
                    on: {
                        input(event) {
                            component.value = event.target.value
                            component.$emit('set-value', event.target.value)
                        },
                    },
                })
        },
    }
</script>
