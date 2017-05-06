<template>
    <div class="ui fluid input" :class="{transparent: transparent}">
        <span v-if="readOnly">{{ model }}</span>
        <input v-else type="text" :placeholder="placeholder" v-model="value">
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
                this.$emit('setValue', this.value)
                this.$emit('input', this.value)
            },
        },
    }
</script>
