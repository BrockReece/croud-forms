<template>
    <input type="date" v-model="value">
</template>

<script>
    import moment from 'moment'

    export default {
        props: {
            model: {
                required: true,
            },
        },
        data() {
            return {
                value: this.computedValue,
            }
        },
        computed: {
            computedValue: {
                get() {
                    return this.model.format('YYYY-MM-DD')
                },
                set(val) {
                    this.value = moment(val)
                    console.log(moment(val))
                },
            },
        },
        watch: {
            moment() {
                console.log(this.value)
                this.$emit('set-value', this.value)
            },
        },
    }
</script>
