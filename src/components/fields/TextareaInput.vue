<template>
    <div class="ui form">
        <div class="field">
            <p v-if="readOnly">{{ model }}</p>
            <textarea v-else type="text" :placeholder="placeholder" v-model="model"></textarea>
        </div>
    </div>
</template>

<script>
    import Input from '../../mixins/Input'

    export default {
        mixins: [
            Input,
        ],
    }
</script>
