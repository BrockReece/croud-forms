<template>
    <tr>
        <td class="wide top aligned" :class="labelClasses">{{ field.field_name }}</td>
        <td class="wide" :class="inputClasses">
            <component :is="view" :field="field" :placeholder="field.field_name" :transparent="transparent" :read-only="readOnly" :model="model" @set-value="(val) => { $emit('set-value', val) }" :validation="validation"></component>
        </td>
    </tr>
</template>

<script>
    import FormMixin from '../mixins/Form'

    export default {
        mixins: [FormMixin],

        props: {
            columnWidths: {
                default() {
                    return {
                        label: 'nine',
                        input: 'severn',
                    }
                },
            },
            transparent: {
                default: true,
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
                classes.error = this.validation.$error

                return classes
            },
        },
    }
</script>
