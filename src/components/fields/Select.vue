<template>
<div>
    <select v-model="model" class="ui fluid dropdown" :class="{disabled: readOnly}">
        <option v-for="option in options" :value="option.value">{{ option.field_name }}</option>
    </select>
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
                        field_name: this.field.field_options.select_options[value],
                    }
                    return obj
                })
            },
        },
    }
</script>
