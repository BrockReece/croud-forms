<template>
    <div class="ui fluid input" :class="{transparent: transparent}">
        <span v-if="readOnly">{{ value }}</span>
        <cleave v-else :name="_uid" :options="cleaveSettings" v-model="value" />
    </div>
</template>

<script>
    import Cleave from 'vue-cleave'
    import Input from '../../mixins/Input'

    export default {
        mixins: [
            Input,
        ],

        props: {
            cleaveSettings: {
                type: Object,
                default() {
                    return {}
                },
            },
        },

        components: {
            Cleave,
        },

        computed: {
            value: {
                get() {
                    return String(this.model)
                },
                set(val) {
                    this.$emit('set-value', val)
                },
            },
        },
    }
</script>
