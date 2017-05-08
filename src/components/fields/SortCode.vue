<template>
    <div>
    {{ splitModel }}
        <div class="ui input">
            <span v-if="readOnly">{{ splitModel[0] }}</span>
            <input maxlength="2" @focus="focus(0)" ref=input0 @keyup="autoTab(0)" v-else type="number" :placeholder="placeholder" v-model="splitModel[0]">
        </div>
        -
        <div class="ui input">
            <span v-if="readOnly">{{ splitModel[1] }}</span>
            <input maxlength="2" @focus="focus(1)" ref=input1 @keyup="autoTab(1)" v-else type="number" :placeholder="placeholder" v-model="splitModel[1]">
        </div>
        -
        <div class="ui input">
            <span v-if="readOnly">{{ splitModel[2] }}</span>
            <input maxlength="2" @focus="focus(2)" ref=input2 v-else type="number" :placeholder="placeholder" v-model="splitModel[2]">
        </div>
    </div>
</template>

<script>
    import Input from '../../mixins/Input'

    export default {
        mixins: [
            Input,
        ],

        data() {
            return {
                value: this.model,
                splitModel: [0, 0, 0],
            }
        },

        methods: {
            autoTab(order) {
                if (this.splitModel[order].length > 1) {
                    this.$refs[`input${order + 1}`].select()
                }
            },
            focus(order) {
                this.$refs[`input${order}`].select()
            },
        },
        mounted() {
            return this.model
        },

        watch: {
            value: {
                deep: true,
                handler(val) {
                    this.splitModel = val.split('-')
                    this.$emit('set-value', this.value)
                },
            },

            splitModel: {
                deep: true,
                handler(val) {
                    this.value = val.map(m => {
                        if (m.length > 2) {
                            return m.substr(m.length - 2)
                        }
                        return m
                    }).join('-')
                },
            },
        },
    }
</script>

<style scoped>
    .ui.input input {
        width: 60px;
    }
</style>
