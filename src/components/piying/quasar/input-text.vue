<script setup lang="ts">
import { PI_VIEW_FIELD_TOKEN, useControlValueAccessor } from '@piying/view-vue'
import { inject, vModelDynamic, watch } from 'vue'
import { summarize } from 'valibot'
import { QInput } from 'quasar'
import { errorString } from '../util/error-string'
const { cva, value, disabled, valueChange, touchedChange } = useControlValueAccessor()
defineExpose({ cva })

const field = inject(PI_VIEW_FIELD_TOKEN)!

const message = () => {
  return field.value.form.control!.valid ? true : errorString(field.value)
}

</script>
<template>
  <q-input
    v-model="value"
    @update:modelValue="valueChange"
    v-bind:disabled="disabled"
    @blur="touchedChange"
    :rules="[message]"
  ></q-input>
</template>

<style scoped></style>
