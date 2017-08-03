<template>
    <div class="ui sort-code input" :class="{transparent: transparent}">
        <span v-if="readOnly">{{ value }}</span>
        <cleave v-else name="sort_code" :options="cleaveSettings" v-model="value" />
    </div>
</template>

<script>
    import Cleave from 'vue-cleave'
    import Input from '../../mixins/Input'

    export default {
        mixins: [
            Input,
        ],

        components: {
            Cleave,
        },

        computed: {
            cleaveSettings() {
                return {
                    blocks: [2, 2, 2],
                    delimiter: '-',
                    numericOnly: true,
                }
            },
        },
    }
</script>
