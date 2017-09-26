<template>
    <div>
        <div class="ui field" v-for="(val, $index) in value" :key="$index">
            <div class="ui fluid action input" >
                <input ref="input" :value="val" @input="update($event, $index)" @keyup.enter="addNewItem"/>
                <button v-if="$index === 0" @click="addNewItem" class="ui icon button primary" :disabled="!allowedMore">
                    <i class="black add icon"></i>
                </button>
                <button v-else @click="removeItem($index)" class="ui icon button">
                    <i class="black delete icon"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import Input from '../../mixins/Input'

    export default {
        computed: {
            allowedMore() {
                return this.field.field_options && this.field.field_options.max ? this.field.field_options.max > this.value.length : true
            },
        },

        methods: {
            update(event, $index) {
                this.$set(this.value, $index, event.srcElement.value)
            },

            addNewItem() {
                if (!this.allowedMore) return
                this.value.push('')
                this.$nextTick(() => {
                    this.$refs.input[this.$refs.input.length - 1].focus()
                })
            },

            removeItem($index) {
                this.value.splice($index, 1)
            },
        },

        mixins: [Input],
    }
</script>
