<template>
    <div class="ui input" :class="{transparent: transparent}">
        <semantic-checkbox type="checkbox"
                           v-model="checked"
                           :disabled="readOnly"
                           @checkbox-clicked="setValue($event)">
        </semantic-checkbox>
    </div>
</template>

<script>
import Input from '../../mixins/Input'

export default {
    mixins: [
        Input,
    ],

    methods: {
        setValue(e) {
            this.checked = !e
        },
    },

    computed: {
        checked: {
            get() {
                return this.model === '1'
            },
            set(val) {
                this.$emit('set-value', val)
            },
        },
    },
}
</script>
