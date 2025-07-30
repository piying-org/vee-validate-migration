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
import { CustomNgBuilder } from '@/components/piying/custom.builder'
const schema = v.pipe(
  v.object({
    amount: v.pipe(
      v.number(),
      v.minValue(100),
      v.maxValue(1000),
      setComponent('currency-input'),
      patchInputs({
        options: { currency: 'US' },
      }),
      setWrappers(['validator']),
    ),
    __formHelper: v.pipe(NFCSchema, setComponent('formHelper')),
  }),
  setComponent('fieldset'),
)
const options = {
  fieldGlobalConfig: fieldConfig,
  builder: CustomNgBuilder,
}
function modelChange(event: any) {
  console.log(event)
}
const model = ref({ amount: 10000 })
</script>
<template>
  <piying-view
    :schema="schema"
    :options="options"
    :model-value="model"
    @update:model-value="modelChange"
  ></piying-view>
</template>
