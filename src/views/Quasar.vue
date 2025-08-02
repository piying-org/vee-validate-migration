<script setup lang="ts">
import { PiyingView } from '@piying/view-vue'
import {
  formConfig,
  NFCSchema,
  patchInputs,
  setComponent,
} from '@piying/view-core'
import * as v from 'valibot'
import { fieldConfig } from '@/components/define'
import { ref } from 'vue'
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
      setComponent('quasar-input-text'),
      patchInputs({ type: 'email' }),
    ),
    fullName: v.pipe(v.string(), v.title('Full name'), setComponent('quasar-input-text')),

    password: v.pipe(
      v.string(),
      v.minLength(6),
      v.title('Password'),
      setComponent('quasar-input-text'),
      patchInputs({ type: 'password' }),
    ),
    passwordConfirm: v.pipe(
      v.string(),
      v.title('Password Confirmation'),
      setComponent('quasar-input-text'),

      patchInputs({ type: 'password' }),

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
      setComponent('quasar-dropdown'),
      patchInputs({
        options: options1,
      }),
    ),
    terms: v.pipe(
      v.boolean(),
      v.title('Do you agree?'),
      setComponent('quasar-checkbox'),

      v.check((value) => {
        return value
      }, `I've read and accept the terms & conditions.`),
    ),

    __formHelper: v.pipe(NFCSchema, setComponent('formHelper')),
  }),
  setComponent('quasar-form'),
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
