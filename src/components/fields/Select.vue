<template>
    <semantic-form-dropdown :placeholder="placeholder"
                            :value="value"
                            :options="options"
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
