import CroudText from '../components/fields/Text'
import Number from '../components/fields/Number'
import MultiCheckbox from '../components/fields/MultiCheckbox'
import Checkbox from '../components/fields/Checkbox'
import CroudTextarea from '../components/fields/Textarea'
import CroudSelect from '../components/fields/Select'
import SearchSelect from '../components/fields/SearchSelect'
import CroudRadio from '../components/fields/Radio'
import SortCode from '../components/fields/SortCode'
import General from '../components/fields/General'
import Cleave from '../components/fields/Cleave'
import ArrayInput from '../components/fields/ArrayInput'

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
        suppressValidationErrors: {
            type: Boolean,
            default: false,
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
            if (['search-select', 'number', 'checkbox', 'multi-checkbox', 'sort-code', 'cleave', 'array-input'].indexOf(this.field.field_type) !== -1) {
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
        Checkbox,
        CroudSelect,
        CroudRadio,
        General,
        SortCode,
        SearchSelect,
        Cleave,
        ArrayInput,
    },

    filters: {
        displayError(error) {
            if (error.msg) return error.msg

            switch (error.type) {
            case 'required':
                return 'This field is mandatory'
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
