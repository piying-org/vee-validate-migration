<script setup lang="ts">
import { PI_VIEW_FIELD_TOKEN, useControlValueAccessor } from '@piying/view-vue'
import { summarize } from 'valibot';
import { inject, vModelDynamic, watch, watchEffect } from 'vue'
const { cva, value, disabled, valueChange, touchedChange } = useControlValueAccessor()
defineExpose({ cva })
watch(
  value,
  (value) => {
    valueChange?.(value)
  },
  {},
)
const field = inject(PI_VIEW_FIELD_TOKEN)!

let message = () => {
  return field.value.form.control!.valid
    ? true
    : summarize(field.value.form.control!.errors!['valibot'])
}
</script>
<template>
  <v-checkbox
    v-model="value"
    v-bind:disabled="disabled"
    @blur="touchedChange"
    :rules="[message]"
  ></v-checkbox>
</template>

<style scoped>
@import 'vuetify/styles';

</style>
