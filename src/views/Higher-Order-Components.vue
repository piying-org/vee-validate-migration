<script setup lang="ts">
import { PiyingView } from '@piying/view-vue'
import { formConfig, setComponent, actions } from '@piying/view-core'
import * as v from 'valibot'
import { fieldConfig } from '@/components/define'
import { ref } from 'vue'
import { CustomBuilder } from '@/components/piying/custom.builder'
const schema = v.pipe(
  v.intersect([
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
    ),
    v.pipe(
      v.object({
        password: v.pipe(
          v.string(),
          v.minLength(6),
          actions.wrappers.set(['label', 'validator']),
          v.title('Password'),
          actions.inputs.patch({ type: 'password' }),
        ),
        confirmPassword: v.pipe(
          v.string(),
          v.minLength(6),
          actions.wrappers.set(['label', 'validator']),
          v.title('Confirm Password'),
          actions.inputs.patch({ type: 'password' }),
          formConfig({
            validators: [
              (control) => {
                const result = control.parent?.get('password')
                return result?.value !== control.value ? { pwd: 'Passwords must match' } : undefined
              },
            ],
          }),
        ),
      }),
      setComponent('fieldset'),
    ),
    v.pipe(
      v.object({
        terms: v.pipe(
          v.boolean(),
          v.title('Agree to terms and conditions'),
          actions.props.patch({
            titlePosition: 'right',
          }),
        ),
      }),
      setComponent('fieldset'),
    ),
  ]),
  setComponent('step'),
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
