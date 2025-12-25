<script setup lang="ts">
import { PiyingView } from '@piying/view-vue'
import { NFCSchema, setComponent, actions } from '@piying/view-core'
import * as v from 'valibot'
import { fieldConfig } from '@/components/define'
import { ref } from 'vue'
import { CustomBuilder } from '@/components/piying/custom.builder'
import { map } from 'rxjs'
const schema = v.pipe(
  v.object({
    drinks: v.pipe(
      v.tuple(
        ['☕️', '🍵', '🥤'].map((value) =>
          v.pipe(
            v.boolean(),
            setComponent('custom-checkbox'),
            actions.inputs.patch({ checkedValue: value }),
            actions.wrappers.set(['label']),
            actions.props.patch({
              titlePosition: 'right',
            }),
            actions.props.patchAsync({
              title: (field) => {
                return field.form.control!.valueChanges.pipe(
                  map((item) => (item ? 'checked' : 'unchecked')),
                )
              },
            }),
          ),
        ),
      ),
      setComponent('fieldset'),
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
