<template>
    <div class="ui input" :class="{transparent: transparent}">
        <span v-if="readOnly">{{ value }}</span>
        <input v-else type="number" :placeholder="placeholder" v-model.number="value">
    </div>
</template>

<script>
    import Input from '../../mixins/Input'

    export default {
        model: {
            prop: 'model',
        },
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
