<script setup lang="ts">
import { PiyingView } from '@piying/view-vue'
import {
  asControl,
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
import { CustomBuilder } from '@/components/piying/custom.builder'
const schema = v.pipe(
  v.optional(
    v.object({
      drink: v.pipe(
        v.array(v.string()),
        setWrappers(['validator']),
        v.check((value) => {
          return !!value && !!value.length
        }, 'You must choose a drink'),
        patchProps({
          forceShowError: true,
        }),
        setComponent('multi-checkbox'),
        patchInputs({
          options: [
            { label: 'Water', value: 'Water' },
            { label: 'Tea', value: 'Tea' },
            { label: 'Coffee', value: 'Coffee' },
          ],
        }),
        asControl(),
      ),
      __formHelper: v.pipe(NFCSchema, setComponent('formHelper')),
    }),
  ),

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
