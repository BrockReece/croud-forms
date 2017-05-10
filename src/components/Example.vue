<template>
    <div>
        <h2 class="ui dividing header">Form Row:</h2>
        <table class="ui very basic table">
            <tr is="form-row" v-for="field in contactFields" :field="field" v-model="formRowData[field.field_slug]"></tr>
        </table>

        <pre>{{ formRowData }}</pre>

        <h2 class="ui dividing header">Moment Components:</h2>
        <h3>DateTime</h3>
        <date-time-moment v-model="dateTimeData"></date-time-moment>
        <pre>{{ dateTimeData.format('lll') }}</pre>

        <h3>Date</h3>
        <date-moment v-model="dateData"></date-moment>
        <pre>{{ dateData.format('DD/MM/YY') }}</pre>

        <h3>Time</h3>
        <time-moment v-model="timeData"></time-moment>
        <pre>{{ timeData.format('HH:mm:ss') }}</pre>
    </div>
</template>

<script>
import moment from 'moment'
import FormRow from '../components/FormRow'
import DateTimeMoment from './fields/DateTime'
import DateMoment from './fields/Date'
import TimeMoment from './fields/Time'

export default {
    components: {
        FormRow,
        DateTimeMoment,
        DateMoment,
        TimeMoment,
    },
    data() {
        return {
            formRowData: {
                textInput: 'Text',
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
                    name: 'Text-Input',
                    field_type: 'text',
                    field_slug: 'textInput',
                },
                {
                    name: 'Text-Area',
                    field_type: 'textarea',
                    field_slug: 'textArea',
                },
                {
                    name: 'Search-Select',
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
                    name: 'Number',
                    field_type: 'number',
                    field_slug: 'number',
                },
                {
                    name: 'Sort Code',
                    field_type: 'sort-code',
                    field_slug: 'sortCode',
                },
                {
                    name: 'Multi-checkbox',
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
                    name: 'Radio',
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
                    name: 'Select',
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
                    name: 'General',
                    field_type: 'date',
                    field_slug: 'general',
                },
            ],
        }
    },
}
</script>
