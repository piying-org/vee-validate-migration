<script setup lang="ts">
import { PiyingView } from '@piying/view-vue'
import { patchInputs, patchWrappers, setComponent } from '@piying/view-core'
import * as v from 'valibot'
import { fieldConfig } from '@/components/define'
import { ref } from 'vue'
import { CustomBuilder } from '@/components/piying/custom.builder'
const schema = v.pipe(
  v.object({
    text1: v.pipe(v.optional(v.string()), v.title('text1-label')),
    number1: v.pipe(v.number(), v.title('number1'), patchWrappers(['label', 'validator'])),
    radio1: v.pipe(
      v.optional(v.picklist(['v1', 'v2'])),
      setComponent('radio'),
      patchInputs({
        options: [
          { label: 'label-v1', value: 'v1' },
          { label: 'label-v2', value: 'v2' },
        ],
      }),
      v.title('radio1-title'),
    ),
    checkbox1: v.optional(v.boolean()),
  }),
  v.title('form'),
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
