<script setup lang="ts">
import { PiyingView } from '@piying/view-vue'
import {
  componentClass,
  formConfig,
  NFCSchema,
  patchAsyncProps,
  patchAttributes,
  patchInputs,
  patchProps,
  patchWrappers,
  setComponent,
  setWrappers,
  topClass,
} from '@piying/view-core'
import * as v from 'valibot'
import { fieldConfig } from '@/components/define'
import { ref } from 'vue'
import { CustomBuilder } from '@/components/piying/custom.builder'
const options1 = ['Enterprise', 'Pro', 'Freelance'] as const
const schema = v.pipe(
  v.object({
    options1: v.pipe(
      v.picklist(options1),
      setComponent('headless-ui-dropdown'),
      topClass('grid-span-1'),
    ),
    options2: v.pipe(
      v.picklist(options1),
      setComponent('headless-ui-dropdown'),
      topClass('grid-span-1'),
    ),
    __formHelper: v.pipe(NFCSchema, setComponent('formHelper')),
  }),
  setComponent('fieldset'),
  componentClass('grid grid-cols-2'),
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
