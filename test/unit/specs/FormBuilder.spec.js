import { mount } from 'vue-test-utils'
import FormBuilder from '@/components/FormBuilder'

const schemas = {
    'should render simple form': [
        {
            field_name: 'Test',
            field_type: 'text',
            field_slug: 'a',
        },
    ],

    'should render children': [
        {
            class: 'two fields',
            children: [
                {
                    field_name: 'First name',
                    field_type: 'text',
                    field_slug: 'a',
                },
                {
                    field_name: 'Last name',
                    field_type: 'number',
                    field_slug: 'b',
                },
            ],
        },
    ],

    'should recursively render children': [
        {
            class: 'two fields',
            children: [
                {
                    field_name: 'First name',
                    field_type: 'text',
                    field_slug: 'a',
                },
                {
                    class: 'two fields',
                    children: [
                        {
                            field_name: 'Last name',
                            field_type: 'text',
                            field_slug: 'b',
                        },
                    ],
                },
            ],
        },
    ],
    'should render from method': [
        {
            field_name: 'Test',
            field_type: 'text',
            field_slug: 'a',
            render: (h) => h('div', {
                class: 'ui field',
            }, [
                h('label', 'Test'),
                h('input'),
            ]),
        },
    ],
}


describe('FormBuilder component', () => {
    Object.keys(schemas).forEach((test) => {
        it(test, () => {
            const vm = mount(FormBuilder, {
                propsData: {
                    schema: schemas[test],
                    value: {
                        a: 'foo',
                        b: 'bar',
                    },
                },
            })
            expect(vm.html()).toMatchSnapshot()
        })
    })
})
