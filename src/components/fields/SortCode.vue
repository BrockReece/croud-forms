<style scoped>
    .ui.input input {
        width: 60px;
    }
</style>

<template>
    <div>
        <div class="ui input">
            <span v-if="readOnly">{{ splitModel[0] }}</span>
            <input maxlength="2" @focus="focus(0)" v-el:input0 @keyup="autoTab(0)" v-else type="number" :placeholder="placeholder" v-model="splitModel[0]">
        </div>
        -
        <div class="ui input">
            <span v-if="readOnly">{{ splitModel[1] }}</span>
            <input maxlength="2" @focus="focus(1)" v-el:input1 @keyup="autoTab(1)" v-else type="number" :placeholder="placeholder" v-model="splitModel[1]">
        </div>
        -
        <div class="ui input">
            <span v-if="readOnly">{{ splitModel[2] }}</span>
            <input maxlength="2" @focus="focus(2)" v-el:input2 v-else type="number" :placeholder="placeholder" v-model="splitModel[2]">
        </div>
    </div>
</template>

<script>
    import Input from '../../Mixins/Input.js'

    export default {
        mixins: [
            Input,
        ],

        data() {
            return {
                splitModel: [0, 0, 0],
            }
        },

        methods: {
            autoTab(order) {
                if (this.splitModel[order].length > 1) {
                    this.$els[`input${order + 1}`].select()
                }
            },
            focus(order) {
                this.$els[`input${order}`].select()
            },
        },

        watch: {
            model() {
                if (this.model) {
                    this.$set('splitModel', this.model.split('-'))
                }
            },

            splitModel: {
                deep: true,
                handler(val) {
                    console.log('got here')
                    this.model = val.map(m => {
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
