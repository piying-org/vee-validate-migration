<script setup lang="ts">
import { PiyingView } from '@piying/view-vue'
import { formConfig, NFCSchema, setComponent, actions } from '@piying/view-core'
import * as v from 'valibot'
import { fieldConfig } from '@/components/define'
import { ref } from 'vue'
import { CustomBuilder } from '@/components/piying/custom.builder'
const schema = v.pipe(
  v.object({
    name: v.pipe(
      v.string(),
      actions.wrappers.set(['label', 'validator']),
      v.title('Full Name'),
      actions.attributes.patch({ placeholder: 'Your Name' }),
      actions.props.patch({ successMessage: 'Nice to meet you!', titlePosition: 'top' }),
    ),
    email: v.pipe(
      v.string(),
      v.email(),
      actions.wrappers.set(['label', 'validator']),
      v.title('E-mail'),
      actions.attributes.patch({ placeholder: 'Your email address' }),
      actions.props.patch({ successMessage: `Got it, we won't spam you!`, titlePosition: 'top' }),
    ),
    password: v.pipe(
      v.string(),
      v.minLength(6),
      actions.wrappers.set(['label', 'validator']),
      v.title('Password'),
      actions.inputs.patch({ type: 'password' }),
      actions.attributes.patch({ placeholder: 'Your password' }),
      actions.props.patch({ successMessage: `Nice and secure!`, titlePosition: 'top' }),
    ),
    confirm_password: v.pipe(
      v.string(),
      actions.wrappers.set(['label', 'validator']),
      v.title('Confirm Password'),
      actions.inputs.patch({ type: 'password' }),
      actions.attributes.patch({ placeholder: 'Type it again' }),
      actions.props.patch({ successMessage: `Glad you remembered it!`, titlePosition: 'top' }),
      formConfig({
        validators: [
          (control) => {
            const result = control.parent?.get('password')
            return result?.value !== control.value ? { pwd: 'Passwords do not match' } : undefined
          },
        ],
      }),
    ),
    __formHelper: v.pipe(NFCSchema, setComponent('formHelper')),
  }),
  // v.forward(
  //   v.partialCheck(
  //     [['password'], ['confirm_password']],
  //     (input) => {
  //       return input.password === input.confirm_password
  //     },
  //     'Passwords do not match',
  //   ),
  //   ['confirm_password'],
  // ),
  setComponent('fieldset'),
)
const options = {
  fieldGlobalConfig: fieldConfig,
  builder: CustomBuilder,
}
function modelChange(event: any) {
  console.log(event)
}
const model = ref({})
</script>
<template>
  <piying-view
    :schema="schema"
    :options="options"
    :model-value="model"
    @update:model-value="modelChange"
  ></piying-view>
</template>
