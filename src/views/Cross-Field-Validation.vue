<script setup lang="ts">
import { PiyingView } from '@piying/view-vue'
import { formConfig, NFCSchema, setComponent, actions } from '@piying/view-core'
import * as v from 'valibot'
import { fieldConfig } from '@/components/define'
import { ref } from 'vue'
import { CustomBuilder } from '@/components/piying/custom.builder'
const schema = v.pipe(
  v.object({
    password: v.pipe(
      v.string(),
      v.minLength(5),
      actions.wrappers.set(['label', 'validator']),
      v.title('Password'),
      actions.attributes.patch({ type: 'password' }),
    ),
    passwordConfirmation: v.pipe(
      v.string(),
      actions.wrappers.set(['label', 'validator']),
      v.title('Confirm Password'),
      actions.attributes.patch({ type: 'password' }),
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
