<template>
    <div>
        <slot>
            <div>
            <h2 class="ui dividing header">Form:</h2>
            </div>
        </slot>
        <table class="ui very basic table">
            <tr is="form-row" v-for="field in contactFields" :field="field" v-model="user[field.field_slug]"></tr>
        </table>

        <pre>{{ user }}</pre>
    </div>
</template>

<script>
import FormRow from '../components/FormRow'

export default {
    components: {
        FormRow,
    },
    data() {
        return {
            test: 'test',
            user: {
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
                radio: 'Bing Ads',
                select: 'Bing Ads',
                date: '08/05/17',
            },
            contactFields: [
                {
                    name: 'Text-Input',
                    field_type: 'text-input',
                    field_slug: 'textInput',
                },
                {
                    name: 'Text-Area',
                    field_type: 'textarea-input',
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
                    name: 'radio',
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
                    name: 'Date',
                    field_type: 'date',
                    field_slug: 'date',
                },
            ],
        }
    },
    methods: {
        editedField($event, field) {
            this.user[field.field_slug] = $event
        },
    },
}
</script>
