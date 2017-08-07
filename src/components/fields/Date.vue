<template>
    <input type="date" v-model="value">
</template>

<script>
    import moment from 'moment'

    export default {
        computed: {
            value: {
                get() {
                    return moment(this.model).format('YYYY-MM-DD')
                },
                set(val) {
                    this.$emit('set-value', moment(val))
                },
            },
        },
    }
</script>
