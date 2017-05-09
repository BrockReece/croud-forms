<template>
<div>
    <input type="Time" v-model="value">
</div>
</template>

<script>
    import moment from 'moment'

    export default {
        model: {
            prop: 'model',
            event: 'set-value',
        },

        props: {
            model: {
                required: true,
            },
        },
        computed: {
            value: {
                get() {
                    return moment(this.model).format('HH:mm:ss')
                },
                set(val) {
                    const time = val.split(':')
                    this.$emit('set-value', moment().hours(time[0]).minutes(time[1] ? time[1] : 0).seconds(0))
                },
            },
        },
    }
</script>
