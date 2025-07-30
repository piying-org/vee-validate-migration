<script setup lang="ts">
import { PiyingView } from '@piying/view-vue'
import {
  asVirtualGroup,
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
import { map } from 'rxjs'
const schema = v.pipe(
  v.intersect([
    v.pipe(
      v.object({
        name: v.pipe(v.string(), v.title('Name'), setWrappers(['label', 'validator'])),
        email: v.pipe(v.string(), v.email(), v.title('Email'), setWrappers(['label', 'validator'])),
      }),
      setComponent('fieldset'),
    ),
    v.pipe(
      v.object({
        password: v.pipe(
          v.string(),
          v.minLength(6),
          setWrappers(['label', 'validator']),
          v.title('Password'),
          patchInputs({ type: 'password' }),
        ),
        confirmPassword: v.pipe(
          v.string(),
          v.minLength(6),
          setWrappers(['label', 'validator']),
          v.title('Confirm Password'),
          patchInputs({ type: 'password' }),
          formConfig({
            validators: [
              (control) => {
                let result = control.parent?.get('password')
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
          patchProps({
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
