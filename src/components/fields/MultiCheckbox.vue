<template>
    <div class="ui form">
        <div class="ui two column stackable grid">
            <div class="column" v-for="option in options">
                <semantic-checkbox type="checkbox"
                                   v-model="checked[option.value]"
                                   :label="option.field_name"
                                   @checkbox-clicked="setValue($event, option)">
                </semantic-checkbox>
            </div>
        </div>
    </div>
</template>

<script>
    import Input from '../../mixins/Input'

    export default {
        mixins: [
            Input,
        ],
        methods: {
            setValue(e, val) {
                this.checked[val.value] = !e
            },
        },

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
            checked: {
                get() {
                    return this.model
                },
                set(val) {
                    this.$emit('set-value', val)
                },
            },
        },
    }
</script>
