<template>
    <semantic-radiobutton :disabled="readOnly" 
                          :model="value" 
                          :data="options"
                          @input="value = $event">
    </semantic-radiobutton>
</template>

<script>
    import Input from '../../mixins/Input'

    export default {
        data() {
            return {
                value: this.model,
            }
        },
        mixins: [
            Input,
        ],
        computed: {
            options() {
                const options = Object.keys(this.field.field_options.select_options).map((value) => {
                    const obj = {
                        // eslint-disable-next-line
                        value: value.replace(/\-/g, '_'),
                        label: this.field.field_options.select_options[value],
                    }
                    return obj
                })

                return options
            },
        },
        watch: {
            value() {
                this.$emit('set-value', this.value)
            },
        },
    }
</script>
