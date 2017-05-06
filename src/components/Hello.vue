<template>
    <div>
        <slot>
            <div>
            <h2 class="ui dividing header">Form:</h2>
            </div>
        </slot>
        <table class="ui very basic table">
            <tr is="form-row" v-for="field in contactFields" :field="field" :model="field.field_slug" @value-changed="setValue"></tr>
        </table>
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
            contactFields: [
                {
                    name: 'Name',
                    field_type: 'text-input',
                    field_slug: 'alias',
                },
                {
                    id: 1,
                    name: 'Email',
                    field_type: 'text-input',
                    field_slug: 'email',
                },
            ],
        }
    },
    methods: {
        setValue(val) {
            console.log(val)
        },
    },
}
</script>
