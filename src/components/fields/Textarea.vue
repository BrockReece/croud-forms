<template>
    <div class="ui form">
        <div class="field">
            <p v-if="readOnly">{{ value }}</p>
            <textarea v-else type="text" :placeholder="placeholder" v-model="value"></textarea>
        </div>
    </div>
</template>

<script>
    import Input from '../../mixins/Input'

    export default {
        mixins: [
            Input,
        ],
        data() {
            return {
                value: this.model,
            }
        },
        watch: {
            value() {
                this.$emit('set-value', this.value)
            },
        },
    }
</script>
