import FormBuilder from './components/FormBuilder.vue'
import FormRow from './components/FormRow.vue'
import FormField from './components/FormField.vue'
import DateTime from './components/fields/DateTime.vue'
import Date from './components/fields/Date.vue'
import Time from './components/fields/Time.vue'

export default {
    install(Vue) {
        Vue.component('croud-form-builder', FormBuilder)
        Vue.component('croud-form-field', FormField)
        Vue.component('croud-form-row', FormRow)
        Vue.component('croud-date-time', DateTime)
        Vue.component('croud-date', Date)
        Vue.component('croud-time', Time)
    },
}
