<script setup lang="ts">
import { PiyingView } from '@piying/view-vue'
import { formConfig, NFCSchema, setComponent, actions } from '@piying/view-core'
import * as v from 'valibot'
import { fieldConfig } from '@/components/define'
import { ref } from 'vue'
import { CustomBuilder } from '@/components/piying/custom.builder'
const options1 = ['Enterprise', 'Pro', 'Freelance'].map((o) => ({
  label: o,
  value: o.toLowerCase(),
}))
const schema = v.pipe(
  v.object({
    email: v.pipe(
      v.string(),
      v.email(),
      v.title('Email'),
      setComponent('element-plus-input-text'),
      actions.wrappers.set(['label', 'validator']),
      actions.inputs.patch({ type: 'email', placeholder: 'Email Address' }),
      actions.props.patch({
        titlePosition: 'left',
      }),
    ),
    fullName: v.pipe(
      v.string(),
      v.title('Full name'),
      setComponent('element-plus-input-text'),
      actions.wrappers.set(['label', 'validator']),

      actions.inputs.patch({
        placeholder: 'Full name',
      }),
      actions.props.patch({
        titlePosition: 'left',
      }),
    ),

    password: v.pipe(
      v.string(),
      v.minLength(6),
      v.title('Password'),
      setComponent('element-plus-input-text'),
      actions.wrappers.set(['label', 'validator']),

      actions.inputs.patch({ type: 'password', placeholder: 'Password' }),
      actions.props.patch({
        titlePosition: 'left',
      }),
    ),
    passwordConfirm: v.pipe(
      v.string(),
      v.title('Password Confirmation'),
      setComponent('element-plus-input-text'),
      actions.wrappers.set(['label', 'validator']),

      actions.inputs.patch({ type: 'password', placeholder: 'Confirm password' }),
      actions.props.patch({
        titlePosition: 'left',
      }),
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
      setComponent('element-plus-dropdown'),
      actions.wrappers.set(['label', 'validator']),

      actions.inputs.patch({
        options: options1,
        placeholder: 'Select',
      }),
      actions.props.patch({
        titlePosition: 'left',
      }),
    ),
    terms: v.pipe(
      v.boolean(),
      v.title('Agree to terms and conditions'),
      setComponent('element-plus-checkbox'),
      actions.wrappers.set(['validator', 'label']),

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
