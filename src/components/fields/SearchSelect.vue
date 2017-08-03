<template>
    <semantic-form-dropdown :placeholder="field.name"
                            :value="value"
                            :options="options"
                            :full_text_search="true"
                            :search="true"
                            :fluid="true"
                            :disabled="readOnly"
                            @dropdown-selected="value = $event"
    ></semantic-form-dropdown>
</template>

<script>
    import Input from '../../mixins/Input'

    export default {
        mixins: [
            Input,
        ],
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
    }
</script>
