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
const schema = v.pipe(
  v.object({
    name: v.pipe(v.string(), v.title('Name'), setComponent('vuetify-text-field')),
    email: v.pipe(
      v.string(),
      v.email(),
      v.title('Email'),
      setComponent('vuetify-text-field'),
      patchInputs({ type: 'email' }),
    ),
    password: v.pipe(
      v.string(),
      v.minLength(6),
      v.title('Password'),
      setComponent('vuetify-text-field'),
      patchInputs({ type: 'password' }),
    ),
    passwordConfirm: v.pipe(
      v.string(),
      v.title('Password confirmation'),
      setComponent('vuetify-text-field'),
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
    terms: v.pipe(
      v.boolean(),
      v.title('Do you agree?'),
      setComponent('vuetify-checkbox'),
      patchInputs({ color: 'primary' }),
      v.check((value) => {
        return value
      }, 'You must agree to terms and conditions'),
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
