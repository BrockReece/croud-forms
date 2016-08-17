<template>
    <input type="date" v-model="value">
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
                    return this.model.format('YYYY-MM-DD')
                },
                set(val) {
                    this.model = moment(val)
                },
            },
        },
    }
</script>
