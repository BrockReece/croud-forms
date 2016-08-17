<template>
    <select v-model="model" class="ui fluid dropdown" :class="{disabled: readOnly}">
        <option v-for="option in options" :value="option.value">{{ option.field_name }}</option>
    </select>
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
                        field_name: this.field.field_options.select_options[value],
                    }
                });
            },
        },
    }
</script>
