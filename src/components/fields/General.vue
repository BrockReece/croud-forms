<template>
<div>
    <div class="ui input" :class="{transparent: transparent}">
        <span v-if="readOnly">{{ model }}</span>
        <general-input v-else v-model="value" :value="value" :tag="type"></general-input>
    </div>
</div>
</template>

<script>
    import Input from '../../mixins/Input'
    import GeneralInput from './Input'

    export default {
        model: {
            prop: 'model',
        },
        components: {
            GeneralInput,
        },
        mixins: [
            Input,
        ],
        data() {
            return {
                value: this.model,
                type: this.field.field_type,
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
