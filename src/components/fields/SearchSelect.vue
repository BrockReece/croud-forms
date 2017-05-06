<template>
<div>
    <semantic-form-dropdown
    :placeholder="field.name"
    :model="model"
    :options="options"
    :full_text_search="true"
    :search="true"
    :fluid="true"
    :disabled="readOnly"
    @dropdown-selected="sendValue"
    ></semantic-form-dropdown>
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
                const options = Object.keys(this.field.field_options.select_options).map((value) => {
                    const obj = {
                        // eslint-disable-next-line
                        value: value.replace(/\-/g, '_'),
                        name: this.field.field_options.select_options[value],
                    }
                    return obj
                })

                return options
            },
        },
        methods: {
            sendValue(value) {
                this.$emit('input', value)
            },
        },
    }
</script>
