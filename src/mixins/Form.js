import CroudText from '../components/fields/Text'
import Number from '../components/fields/Number'
import MultiCheckbox from '../components/fields/MultiCheckbox'
import CroudTextarea from '../components/fields/Textarea'
import CroudSelect from '../components/fields/Select'
import SearchSelect from '../components/fields/SearchSelect'
import CroudRadio from '../components/fields/Radio'
import SortCode from '../components/fields/SortCode'
import General from '../components/fields/General'

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
        transparent: {
            default: false,
        },
        validation: {
            default() {
                return {}
            },
        },
    },

    computed: {
        inputClasses() {
            const classes = {}
            classes.error = this.validation.$error

            return classes
        },
        view() {
            if (['select', 'radio', 'textarea', 'text'].indexOf(this.field.field_type) !== -1) {
                return `croud-${this.field.field_type}`
            }
            if (['search-select', 'number', 'multi-checkbox', 'sort-code'].indexOf(this.field.field_type) !== -1) {
                return this.field.field_type
            }
            return 'general'
        },
    },

    components: {
        Number,
        CroudText,
        CroudTextarea,
        MultiCheckbox,
        CroudSelect,
        CroudRadio,
        General,
        SortCode,
        SearchSelect,
    },

    filters: {
        displayError(error) {
            if (error.msg) return error.msg

            switch (error.type) {
            case 'numeric':
                return 'Must be a numeric value'
            case 'minLength':
                return `Must be atleast ${error.min} characters long`

            default:
                return error
            }
        },
    },
}
