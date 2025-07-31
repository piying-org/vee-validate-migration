<script setup lang="ts">
import { PiyingView } from '@piying/view-vue'
import {
  formConfig,
  NFCSchema,
  patchAsyncProps,
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
import { VueTifyBuilder } from '@/components/piying/vuetify/vuetify.builder'
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
      setWrappers(['label', 'validator']),
      patchInputs({ type: 'email', placeholder: 'Email Address' }),
      patchProps({
        titlePosition: 'left',
      }),
    ),
    fullName: v.pipe(
      v.string(),
      v.title('Full name'),
      setComponent('element-plus-input-text'),
      setWrappers(['label', 'validator']),

      patchInputs({
        placeholder: 'Full name',
      }),
      patchProps({
        titlePosition: 'left',
      }),
    ),

    password: v.pipe(
      v.string(),
      v.minLength(6),
      v.title('Password'),
      setComponent('element-plus-input-text'),
      setWrappers(['label', 'validator']),

      patchInputs({ type: 'password', placeholder: 'Password' }),
      patchProps({
        titlePosition: 'left',
      }),
    ),
    passwordConfirm: v.pipe(
      v.string(),
      v.title('Password Confirmation'),
      setComponent('element-plus-input-text'),
      setWrappers(['label', 'validator']),

      patchInputs({ type: 'password', placeholder: 'Confirm password' }),
      patchProps({
        titlePosition: 'left',
      }),
      formConfig({
        validators: [
          (control) => {
            let result = control.parent?.get('password')
            return result?.value !== control.value ? { pwd: 'Passwords must match' } : undefined
          },
        ],
      }),
    ),
    type: v.pipe(
      v.picklist(options1.map((item) => item.value)),
      v.title('Type'),
      setComponent('element-plus-dropdown'),
      setWrappers(['label', 'validator']),

      patchInputs({
        options: options1,
        placeholder: 'Select',
      }),
      patchProps({
        titlePosition: 'left',
      }),
    ),
    terms: v.pipe(
      v.boolean(),
      v.title('Agree to terms and conditions'),
      setComponent('element-plus-checkbox'),
      setWrappers(['validator', 'label']),

      v.check((value) => {
        return value
      }, `I've read and accept the terms & conditions.`),
      patchProps({
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
