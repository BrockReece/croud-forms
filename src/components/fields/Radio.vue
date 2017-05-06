<template>
<div>
    <semantic-radio :disabled="readOnly" 
                    :model="model" 
                    :data="options"
                    @input="sendValue"></semantic-radio>
                </div>
</template>

<script>
    import Input from '../../mixins/Input'

    export default {
        mixins: [
            Input,
        ],
/* eslint-disable */
        computed: {
            options() {
                return Object.keys(this.field.field_options.select_options).map((value) => {
                    const obj = {
                        // eslint-disable-next-line
                        value: value.replace(/\-/g, '_'),
                        label: this.field.field_options.select_options[value],
                    }
                    return obj
                })
            },
        },
        methods: {
            sendValue(value) {
                this.$emit('input', value)
            },
        },
    }
</script>
