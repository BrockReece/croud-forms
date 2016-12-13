<template>
    <input type="Time" v-model="value">
</template>

<script>
    import moment from 'moment'

    export default {
        props: {
            model: {
                required: true,
                twoWay: true,
            }
        },

        computed: {
            value: {
                get() {
                    return this.model.format('HH:mm:ss')
                },
                set(val) {
                    val = val.split(':')
                    this.model = moment().hours(val[0]).minutes(val[1] ? val[1] : 0 ).seconds(0)
                },
            },
        },
    }
</script>
