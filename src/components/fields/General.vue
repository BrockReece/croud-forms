<template>
    <div class="ui input" :class="{transparent: transparent}">
        <span v-if="readOnly">{{ model  }}</span>
        <input v-else :type="field.field_type" :placeholder="placeholder" v-model="model">
    </div>
</template>

<script>
    import Input from '../../mixins/Input.js'

    export default {
        mixins: [
            Input,
        ],
    }
</script>
