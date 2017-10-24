<template>
    <div>
        <croud-form-builder :read-only="false" :schema='contactFields' v-model="formRowData" :validations="$v.formRowData"></croud-form-builder>
        <h2 class="ui dividing header">Form Row:</h2>
        <table class="ui very basic table">
            <tr :read-only="true" is="croud-form-row" v-for="field in contactFields" :field="field" v-model="formRowData[field.field_slug]"></tr>
        </table>

        <pre>{{ formRowData }}</pre>

        <h2 class="ui dividing header">Moment Components:</h2>
        <h3>DateTime</h3>
        <croud-date-time v-model="dateTimeData"></croud-date-time>
        <pre>{{ dateTimeData.format('lll') }}</pre>

        <h3>Date</h3>
        <croud-date v-model="dateData"></croud-date>
        <pre>{{ dateData.format('DD/MM/YY') }}</pre>

        <h3>Time</h3>
        <croud-time v-model="timeData"></croud-time>
        <pre>{{ timeData.format('HH:mm:ss') }}</pre>
    </div>
</template>

<script>
import Vue from 'vue'
import moment from 'moment'
import { validationMixin } from 'vuelidate'
import { required, minLength, numeric } from 'vuelidate/lib/validators'

import CroudForms from '../croud-forms'

Vue.use(CroudForms)
Vue.component('test-component', {
    template: '<div>hello world</div>',
})

export default {
    mixins: [validationMixin],

    validations: {
        formRowData: {
            textInput: {
                required,
                minLength: minLength(4),
            },
            textArea: {
                required,
                minLength: minLength(20),
            },
            number: {
                required,
                numeric,
            },
        },
    },

    data() {
        return {
            formRowData: {
                textInput: 'Text',
                arrayInput: [
                    'test',
                ],
                textArea: 'TextArea',
                number: 1,
                platforms: {
                    google_adwords: false,
                    adwords_editor: true,
                    bing_ads: false,
                },
                sortCode: '12-34-56',
                searchSelect: 'Bing Ads',
                radio: 'bing_ads',
                select: 'Bing Ads',
                general: '2017-05-10',
            },
            dateTimeData: moment(),
            dateData: moment(),
            timeData: moment(),
            contactFields: [
                {
                    field_name: 'Test Component',
                    field_type: 'text',
                    field_slug: 'custom',
                    render: (h) => h('div', {
                        class: 'ui field',
                    }, [
                        h('label', 'Test Component'),
                        h('test-component'),
                    ]),
                },
                {
                    field_name: 'Text-Input',
                    field_type: 'text',
                    field_slug: 'textInput',
                },
                {
                    field_name: 'Array-Input',
                    field_type: 'array-input',
                    field_slug: 'arrayInput',
                    field_options: {
                        max: 5,
                    },
                },
                {
                    class: 'ui very padded basic segment two fields',
                    children: [
                        {
                            class: 'two fields',
                            children: [
                                {
                                    class: 'four wide',
                                    field_name: 'Text-Input',
                                    field_type: 'text',
                                    field_slug: 'textInput',
                                    suppressValidationErrors: true,
                                },
                                {
                                    class: 'twelve wide',
                                    field_name: 'Text-Area',
                                    field_type: 'textarea',
                                    field_slug: 'textArea',
                                },
                            ],
                        },
                    ],
                },
                {
                    field_name: 'Search-Select',
                    field_type: 'search-select',
                    field_slug: 'searchSelect',
                    field_options: {
                        select_options: {
                            google_adwords: 'Google Adwords',
                            adwords_editor: 'Adwords Editor',
                            bing_ads: 'Bing Ads',
                        },
                    },
                },
                {
                    field_name: 'Number',
                    field_type: 'number',
                    field_slug: 'number',
                },
                {

                    field_name: 'Sort Code',
                    field_type: 'sort-code',
                    field_slug: 'sortCode',
                },
                {
                    field_name: 'Multi-checkbox',
                    field_type: 'multi-checkbox',
                    field_slug: 'platforms',
                    field_options: {
                        select_options: {
                            google_adwords: 'Google Adwords',
                            adwords_editor: 'Adwords Editor',
                            bing_ads: 'Bing Ads',
                        },
                    },
                },
                {
                    field_name: 'Radio',
                    field_type: 'radio',
                    field_slug: 'radio',
                    field_options: {
                        select_options: {
                            google_adwords: 'Google Adwords',
                            adwords_editor: 'Adwords Editor',
                            bing_ads: 'Bing Ads',
                        },
                    },
                },
                {
                    field_name: 'Select',
                    field_type: 'select',
                    field_slug: 'select',
                    field_options: {
                        select_options: {
                            google_adwords: 'Google Adwords',
                            adwords_editor: 'Adwords Editor',
                            bing_ads: 'Bing Ads',
                        },
                    },
                },
                {
                    field_name: 'General',
                    field_type: 'date',
                    field_slug: 'general',
                },
            ],
        }
    },
}
</script>
