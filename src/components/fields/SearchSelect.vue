<template>
    <semantic-form-dropdown
    :placeholder="field.name"
    :model.sync="model"
    :options="options"
    :full_text_search="true"
    :search="true"
    :fluid="true"
    :disabled="readOnly"
    ></semantic-form-dropdown>
</template>

<script>
    import Input from '../../mixins/Input.js'

    export default {
        mixins: [
            Input,
        ],

        computed: {
            options() {
                const options = Object.keys(this.field.field_options.select_options).map((value) => {
                    const obj = {
                        value: value.replace(/\-/g, '_'),
                        name: this.field.field_options.select_options[value],
                    }
                    return obj
                })

                return options
            },
        },
    }
</script>
