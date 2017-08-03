<template>
    <div class="ui fluid input" :class="{transparent: transparent}">
        <span v-if="readOnly">{{ model }}</span>
        <general-input v-else v-model="value" :value="value" :tag="type" @set-value="value = $event"></general-input>
    </div>
</template>

<script>
    import Input from '../../mixins/Input'
    import GeneralInput from './Input'

    export default {
        components: {
            GeneralInput,
        },

        mixins: [
            Input,
        ],

        data() {
            return {
                type: this.field.field_type,
            }
        },

    }

</script>
