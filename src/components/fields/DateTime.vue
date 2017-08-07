<template>
    <input type="datetime-local" v-model="value">
</template>

<script>
    import moment from 'moment'

    export default {
        computed: {
            value: {
                get() {
                    return moment(this.model).format('YYYY-MM-DD[T]HH:mm')
                },
                set(val) {
                    this.$emit('set-value', moment(val))
                },
            },
        },
    }
</script>
