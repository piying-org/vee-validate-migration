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
    fullName: v.pipe(
      v.string(),
      v.title('Full name'),
      setComponent('prime-vue-input-text'),
      setWrappers(['label', 'validator']),
      patchProps({ titlePosition: 'top' }),
    ),
    email: v.pipe(
      v.string(),
      v.email(),
      v.title('Email'),
      setComponent('prime-vue-input-text'),
      setWrappers(['label', 'validator']),
      patchInputs({ type: 'email' }),
      patchProps({ titlePosition: 'top' }),
    ),
    password: v.pipe(
      v.string(),
      v.minLength(6),
      v.title('Password'),
      setComponent('prime-vue-input-text'),
      setWrappers(['label', 'validator']),

      patchInputs({ type: 'password' }),
      patchProps({ titlePosition: 'top' }),
    ),
    passwordConfirm: v.pipe(
      v.string(),
      v.title('Password Confirmation'),
      setComponent('prime-vue-input-text'),
      setWrappers(['label', 'validator']),

      patchInputs({ type: 'password' }),
      patchProps({ titlePosition: 'top' }),

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
      setComponent('prime-vue-dropdown'),
      setWrappers(['label', 'validator']),

      patchProps({ titlePosition: 'top' }),

      patchInputs({
        options: options1,
      }),
    ),
    terms: v.pipe(
      v.boolean(),
      v.title('Do you agree?'),
      setComponent('prime-vue-checkbox'),
      setWrappers(['label', 'validator']),

      patchProps({ titlePosition: 'top' }),

      v.check((value) => {
        return value
      }, `I've read and accept the terms & conditions.`),
    ),

    __formHelper: v.pipe(NFCSchema, setComponent('formHelper')),
  }),
  setComponent('fieldset'),
)
const options = {
  fieldGlobalConfig: fieldConfig,
  builder: VueTifyBuilder,
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
