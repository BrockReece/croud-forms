<template>
    <div class="ui field" :class="inputClasses">
        <label>{{ field.field_name }}</label>
        <div class="" v-for="(val, $key) in validation" v-if="validation.$dirty && !$key.startsWith('$') && !val" :key="$key">{{ validation.$params[$key] | displayError }}</div>
        <component :is="view" :field="field" :placeholder="field.field_name" :transparent="transparent" :read-only="readOnly" :model="model" @set-value="(val) => { $emit('set-value', val) }" :validation="validation"></component>
    </div>
</template>

<script>
    import FormMixin from '../mixins/Form'

    export default {
        mixins: [FormMixin],
    }
</script>
