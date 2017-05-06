<template>
<div>
    <input type="datetime-local" v-model="value" @change="sendValue">
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
                    return this.model.format('YYYY-MM-DD[T]HH:mm')
                },
                set(val) {
                    this.model = moment(val)
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
