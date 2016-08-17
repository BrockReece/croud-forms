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
                    this.model = moment(val)
                },
            },
        },
    }
</script>
