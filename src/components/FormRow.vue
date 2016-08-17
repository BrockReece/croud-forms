<template>
    <tr>
        <td class="wide top aligned" :class="labelClasses">{{{ field.name }}}</td>
        <td class="wide" :class="inputClasses">
            <component :is="view" :model.sync="model" :field.sync="field" :transparent="true" :read-only="readOnly"></component>
        </td>
    </tr>
</template>

<script>
    import Text from './fields/Text.vue'
    import Number from './fields/Number.vue'
    import MultiCheckbox from './fields/MultiCheckbox.vue'
    import Textarea from './fields/Textarea.vue'
    import CroudSelect from './fields/Select.vue'
    import CroudRadio from './fields/Radio.vue'

    export default {
        props: {
            model: {
                required: true,
                twoWay: true,
            },
            field: {
                required: true,
                twoWay: true,
            },
            readOnly: {
                default: false,
            },
            columnWidths: {
                default() {
                    return {
                        label: 'nine',
                        input: 'severn',
                    }
                }
            },
        },

        computed: {
            labelClasses() {
                const classes = {}
                classes[this.columnWidths.label] = true

                return classes
            },
            inputClasses() {
                const classes = {}
                classes[this.columnWidths.input] = true

                return classes
            },
            view() {
                if (['select','radio'].indexOf(this.field.field_type) !== -1) {
                    return `croud-${this.field.field_type}`
                }
                return this.field.field_type
            },
        },

        components: {
            Number,
            Text,
            Textarea,
            MultiCheckbox,
            CroudSelect,
            CroudRadio,
        },
    }
</script>
