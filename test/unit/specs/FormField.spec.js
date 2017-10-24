import { mount } from 'vue-test-utils'
import FormField from '@/components/FormField'

const fieldTypes = ['text', 'number']

describe('FormField component', () => {
    describe('should render correct field type', () => {
        fieldTypes.forEach((type) => {
            it(type, () => {
                const vm = mount(FormField, {
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

    it('should render a transparent input', () => {
        const vm = mount(FormField, {
            propsData: {
                field: {
                    field_name: 'First name',
                    field_type: 'text',
                },
                model: 'test',
                transparent: true,
            },
        })
        expect(vm.html()).toMatchSnapshot()
    })
})
