<script setup lang="ts">
import { PiyingView } from '@piying/view-vue'
import { formConfig, NFCSchema, setComponent, actions } from '@piying/view-core'
import * as v from 'valibot'
import { fieldConfig } from '@/components/define'
import { ref } from 'vue'
import { CustomBuilder } from '@/components/piying/custom.builder'
const options1 = ['Enterprise', 'Pro', 'Freelance'].map((o) => ({
  label: o,
  value: o,
}))
const schema = v.pipe(
  v.object({
    fullName: v.pipe(
      v.string(),
      v.title('Full name'),
      setComponent('bootstrap-input-text'),
      actions.wrappers.set(['bootstrap-form-item']),

      actions.inputs.patch({
        placeholder: 'Full name',
      }),
    ),
    email: v.pipe(
      v.string(),
      v.email(),
      v.title('Email address:'),
      setComponent('bootstrap-input-text'),
      actions.wrappers.set(['bootstrap-form-item']),
      actions.inputs.patch({
        type: 'email',
        placeholder: 'Enter email',
      }),
      actions.props.patch({
        description: `We'll never share your email with anyone else.`,
      }),
    ),

    password: v.pipe(
      v.string(),
      v.minLength(6),
      v.title('Password'),
      setComponent('bootstrap-input-text'),
      actions.wrappers.set(['bootstrap-form-item']),

      actions.inputs.patch({ type: 'password', placeholder: 'Password' }),
    ),
    passwordConfirm: v.pipe(
      v.string(),
      v.title('Password Confirmation'),
      setComponent('bootstrap-input-text'),
      actions.wrappers.set(['bootstrap-form-item']),

      actions.inputs.patch({ type: 'password', placeholder: 'Confirm password' }),

      formConfig({
        validators: [
          (control) => {
            const result = control.parent?.get('password')
            return result?.value !== control.value ? { pwd: 'Passwords must match' } : undefined
          },
        ],
      }),
    ),
    type: v.pipe(
      v.picklist(options1.map((item) => item.value)),
      v.title('Type'),
      setComponent('bootstrap-dropdown'),
      actions.wrappers.set(['bootstrap-form-item']),

      actions.inputs.patch({
        options: options1,
        placeholder: 'Select',
      }),
    ),
    terms: v.pipe(
      v.boolean(),
      v.title('Agree to terms and conditions'),
      setComponent('bootstrap-checkbox'),
      actions.wrappers.set(['bootstrap-form-item', 'label']),

      v.check((value) => {
        return value
      }, `I've read and accept the terms & conditions.`),
      actions.props.patch({
        titlePosition: 'right',
      }),
    ),

    __formHelper: v.pipe(NFCSchema, setComponent('formHelper')),
  }),
  setComponent('fieldset'),
)
const options = {
  fieldGlobalConfig: fieldConfig,
  builder: CustomBuilder,
}
function modelChange(event: any) {
  console.log(event)
}
const model = ref({ terms: false })
</script>
<template>
  <piying-view
    :schema="schema"
    :options="options"
    :model-value="model"
    @update:model-value="modelChange"
  ></piying-view>
</template>
