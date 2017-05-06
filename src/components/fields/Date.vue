<template>
    <div>
    <input type="date" v-model="value" @change="sendValue">
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
                    return this.model.format('YYYY-MM-DD')
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
