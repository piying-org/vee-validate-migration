<script setup lang="ts">
import { PiyingView } from '@piying/view-vue'
import {
  formConfig,
  NFCSchema,
  patchInputs,
  patchProps,
  patchWrappers,
  setComponent,
  setWrappers,
} from '@piying/view-core'
import * as v from 'valibot'
import { fieldConfig } from '@/components/define'
import { ref } from 'vue'
import { CustomNgBuilder } from '@/components/piying/custom.builder'
const mockApiRequest = (value: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value === 'test@example.com')
    }, 1000)
  })
}
const schema = v.pipe(
  v.optional(
    v.object({
      email: v.pipe(
        v.string(),
        v.title('Email'),
        setWrappers(['label', 'validator']),
        formConfig({
          asyncValidators: [
            async (control) => {
              let value = control.value
              const result = await mockApiRequest(value)
              return result ? undefined : { email: 'This email is already taken' }
            },
          ],
        }),
      ),
      __formHelper: v.pipe(NFCSchema, setComponent('formHelper')),
    }),
  ),

  setComponent('fieldset'),
)
const options = {
  fieldGlobalConfig: fieldConfig,
  builder: CustomNgBuilder,
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
