<template>
    <div class="ui form">
        <div class="ui two column stackable grid">
            <div class="column" v-for="option in options">
                <div class="ui toggle checkbox">
                    <input :disabled="readOnly" type="checkbox" v-model="model[option.value]">
                    <label>{{ option.field_name }}</label>
                </div>
            </div>
        </div>
    </div>
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
