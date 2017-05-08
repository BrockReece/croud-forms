<template>
  <div>
  {{ field }}</br><br><br>
    <tr>
        <td class="wide top aligned" :class="labelClasses">{{ field.name }}</td>
        <td class="wide" :class="inputClasses">
            <component :is="view" :field="field" :transparent="transparent" :read-only="readOnly" :model="model" @set-value="(val) => { $emit('set-value', val) }"></component>
        </td>
    </tr>
    <br><br>
    </div>
</template>

<script>
    import TextInput from './fields/TextInput'
    import Number from './fields/Number'
    import MultiCheckbox from './fields/MultiCheckbox'
    import TextareaInput from './fields/TextareaInput'
    import CroudSelect from './fields/Select'
    import SearchSelect from './fields/SearchSelect'
    import CroudRadio from './fields/Radio'
    import SortCode from './fields/SortCode'
    import General from './fields/General'

    export default {
        model: {
            prop: 'model',
            event: 'set-value',
        },

        props: {
            model: {
                required: true,
            },
            field: {
                required: true,
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

                return classes
            },
            view() {
                if (['select', 'radio'].indexOf(this.field.field_type) !== -1) {
                    return `croud-${this.field.field_type}`
                }
                if (['search-select', 'text-input', 'number', 'multi-checkbox', 'textarea-input', 'sort-code'].indexOf(this.field.field_type) !== -1) {
                    return this.field.field_type
                }
                return 'general'
            },
        },

        components: {
            Number,
            TextInput,
            TextareaInput,
            MultiCheckbox,
            CroudSelect,
            CroudRadio,
            General,
            SortCode,
            SearchSelect,
        },
    }
</script>
