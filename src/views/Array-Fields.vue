<script setup lang="ts">
import { PiyingView } from '@piying/view-vue'
import { NFCSchema, actions, setComponent } from '@piying/view-core'
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
            name: v.pipe(v.string(), v.title('Name'), actions.wrappers.set(['label', 'validator'])),
            email: v.pipe(
              v.string(),
              v.email(),
              v.title('Email'),
              actions.wrappers.set(['label', 'validator']),
            ),
          }),
          setComponent('fieldset'),
          actions.props.patchAsync({
            title: (field) => {
              return `User #${field.keyPath![0]}`
            },
          }),
        ),
      ),
      setComponent('array-rw'),
      actions.inputs.patch({ minLength: 1 }),
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
