# croud-forms
[![npm version](https://badge.fury.io/js/croud-forms.svg)](https://badge.fury.io/js/croud-forms)

A package for generating form inputs based on a JS object.

## Installation
Install using yarn

```bash
yarn install croud-forms
```

Or if you're after the vue1 version.

```bash
yarn install croud-forms@1.0.6
```

And add to your Vue project as a plugin
```js
import CroudForms from croud-forms

Vue.use(CroudForms)
```

## Usage

### Basics
**Field object**

The field object is made up of 3 mandatory keys and an additional contextual object that is needed for more complex fields, like select or cleave components.
```js
{
    data(){
        return {
            field: {
                field_name: 'First name', // Sets the label text
                field_type: 'text', // Type of field we want to use
                field_slug: 'firstName', // Key of the data object to get and set

                field_options: {
                    select_options: {
                        google_adwords: 'Google Adwords', // key: value
                        adwords_editor: 'Adwords Editor',
                        bing_ads: 'Bing Ads',
                    },
                },
            },

            user: {
                firstName: '',
            },
        }
    },
}
```

**Field components**

Croud-forms provides two different components for displaying the form fields.

```html
<!-- Form field component -->
<croud-form-field :field="field" v-model="user[field.field_slug]" />

<!-- Table row component -->
<table class="ui very basic table">
    <tr is="croud-form-row"  :field="field" v-model="user[field.field_slug]"></tr>
</table>
```

### Read Only
Croud-forms allows a **read-only** flag to be passed into any field as a prop

```html
<croud-form-field :field="field" v-model="user.firstName" :read-only="true"/>
```

### Vuelidate integration
Croud-forms can integrate with [vuelidate](https://monterail.github.io/vuelidate/) to provide visual feedback when the output of the form isn't what we expected.

You can add a validation object to your component which can dictate the rules for your fields, below is a very basic example, view the [vuelidate docs](https://monterail.github.io/vuelidate/#examples) for more inspiration.

```js
import { validationMixin } from 'vuelidate'
import { required, minLength, numeric, email } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],

    validations: {
        user: {
            firstName: {
                required,
                minLength: minLength(2),
            },
        }
    },
```
And for the visual feedback, you can pass the validation object through to the croud-form-field, like so...

```html
<croud-form-field field="field" v-model="user.firstName" :validation="$v.user.firstName" />
```

### Bringing it all together
This project includes a **croud-form-builder** component that can build a form based on a JSON schema and can also handle the validation

You can add this component to your mark up with the following syntax
```html
<croud-form-builder :read-only="false" :schema='schema' v-model="user" :validations="$v.user" />
```

And you can build up your model, schema and validations from within your component.

```js
import { validationMixin } from 'vuelidate'
import { required, minLength, numeric, email } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin],

    data() {
        return {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                age: 0,
            },

            schema: [
                {
                    class: 'two fields',
                    children: [
                        {
                            field_name: 'First name',
                            field_type: 'text',
                            field_slug: 'firstName',
                        },
                        {
                            field_name: 'Last name',
                            field_type: 'text',
                            field_slug: 'lastName',
                        },
                    ],
                },
                {
                    field_name: 'Email Address',
                    field_type: 'email',
                    field_slug: 'email',
                },
                {
                    field_name: 'Age',
                    field_type: 'number',
                    field_slug: 'age',
                },
            ],
        }
    },

    validations: {
        user: {
            firstName: {
                required,
                minLength: minLength(2),
            },
            lasstName: {
                required,
                minLength: minLength(2),
            },
            email: {
                required,
                email,
            },
            age: {
                required,
                numeric,
            },
        },
    },
}

```

### Custom components
If you need to create a more complicated form field than this package provides, you can add pass a [render method](https://vuejs.org/v2/guide/render-function.html) through to the form builder. If you want to to use a custom component, you will need to globally register it before using it in the render method.

```js
// Globally register custom component
Vue.component('test-component', {
    template: '<div>hello world</div>',
})
...
// Form builder config
{
  field_name: 'Test Component',
  field_type: 'text',
  field_slug: 'custom',
  render: (h) => h('div', {
    class: 'ui field',
  }, [
    h('label', 'Test Component'),
    h('test-component'),
  ]),
},
```

Which will produce the following markup

```html
<div class="ui field">
  <label>Test Component</label>
  <div>hello world</div>
</div>
```
