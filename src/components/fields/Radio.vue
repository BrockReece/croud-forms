<template>
    <semantic-radio :disabled="readOnly" :model.sync="model" :data="options"></semantic-radio>
</template>

<script>
    import Input from '../../Mixins/Input.js'

    export default {
        mixins: [
            Input,
        ],

        computed: {
            options() {
                return Object.keys(this.field.field_options.select_options).map((value) => {
                    return {
                        value: value.replace(/\-/g, '_'),
                        label: this.field.field_options.select_options[value],
                    }
                });
            },
        },
    }
</script>
