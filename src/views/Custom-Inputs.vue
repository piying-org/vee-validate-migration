<script setup lang="ts">
import { PiyingView } from '@piying/view-vue'
import {
  formConfig,
  NFCSchema,
  patchAttributes,
  patchInputs,
  patchProps,
  patchWrappers,
  setComponent,
  setWrappers,
} from '@piying/view-core'
import * as v from 'valibot'
import { fieldConfig } from '@/components/define'
import { ref } from 'vue'
import { CustomBuilder } from '@/components/piying/custom.builder'
const schema = v.pipe(
  v.object({
    name: v.pipe(
      v.string(),
      setWrappers(['label', 'validator']),
      v.title('Full Name'),
      patchAttributes({ placeholder: 'Your Name' }),
      patchProps({ successMessage: 'Nice to meet you!', titlePosition: 'top' }),
    ),
    email: v.pipe(
      v.string(),
      v.email(),
      setWrappers(['label', 'validator']),
      v.title('E-mail'),
      patchAttributes({ placeholder: 'Your email address' }),
      patchProps({ successMessage: `Got it, we won't spam you!`, titlePosition: 'top' }),
    ),
    password: v.pipe(
      v.string(),
      v.minLength(6),
      setWrappers(['label', 'validator']),
      v.title('Password'),
      patchInputs({ type: 'password' }),
      patchAttributes({ placeholder: 'Your password' }),
      patchProps({ successMessage: `Nice and secure!`, titlePosition: 'top' }),
    ),
    confirm_password: v.pipe(
      v.string(),
      setWrappers(['label', 'validator']),
      v.title('Confirm Password'),
      patchInputs({ type: 'password' }),
      patchAttributes({ placeholder: 'Type it again' }),
      patchProps({ successMessage: `Glad you remembered it!`, titlePosition: 'top' }),
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
