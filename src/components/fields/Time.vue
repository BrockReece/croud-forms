<template>
<div>
    <input type="Time" v-model="value" @change="sendValue">
</div>
</template>

<script>
    import moment from 'moment'

    export default {
        props: {
            model: {
                required: true,
            },
        },

        computed: {
            value: {
                get() {
                    return this.model.format('HH:mm:ss')
                },
                set(value) {
                    const val = value.split(':')
                    this.model = moment().hours(val[0]).minutes(val[1] ? val[1] : 0)
                    .seconds(0)
                },
            },
        },
        methods: {
            sendValue() {
                this.$emit('input', this.model)
            },
        },
    }
</script>
