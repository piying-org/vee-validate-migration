<script setup lang="ts">
import { PiyingView } from '@piying/view-vue'
import {
  NFCSchema,
  patchAsyncProps,
  patchInputs,
  setComponent,
  setWrappers,
} from '@piying/view-core'
import * as v from 'valibot'
import { fieldConfig } from '@/components/define'
import { ref } from 'vue'
import { CustomBuilder } from '@/components/piying/custom.builder'
const schema = v.pipe(
  v.object({
    users: v.pipe(
      v.array(
        v.pipe(
          v.object({
            name: v.pipe(v.string(), v.title('Name'), setWrappers(['label', 'validator'])),
            email: v.pipe(
              v.string(),
              v.email(),
              v.title('Email'),
              setWrappers(['label', 'validator']),
            ),
          }),
          setComponent('fieldset'),
          patchAsyncProps({
            title: (field) => {
              return `User #${field.keyPath![0]}`
            },
          }),
        ),
      ),
      setComponent('array-rw'),
      patchInputs({ minLength: 1 }),
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
