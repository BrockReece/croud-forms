import { mount } from 'vue-test-utils'
import FormRow from '@/components/FormRow'

const fieldTypes = ['text', 'number', 'checkbox']

describe('FormField component', () => {
    describe('should render correct field type', () => {
        fieldTypes.forEach((type) => {
            it(type, () => {
                const vm = mount(FormRow, {
                    propsData: {
                        field: {
                            field_name: 'First name',
                            field_type: type,
                        },
                        model: 'test',
                    },
                })
                expect(vm.html()).toMatchSnapshot()
            })
        })
    })

    it('should render a non transparent input', () => {
        const vm = mount(FormRow, {
            propsData: {
                field: {
                    field_name: 'First name',
                    field_type: 'text',
                },
                model: 'test',
                transparent: false,
            },
        })
        expect(vm.html()).toMatchSnapshot()
    })
})
