<template>
    <div class="ui input" :class="{transparent: transparent}">
        <span v-if="readOnly">{{ model  }}</span>
        <input v-else type="number" :placeholder="placeholder" v-model="model">
    </div>
</template>

<script>
    import Input from '../../Mixins/Input.js'

    export default {
        mixins: [
            Input,
        ],
    }
</script>
