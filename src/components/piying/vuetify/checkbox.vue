<script setup lang="ts">
import { PI_VIEW_FIELD_TOKEN, useControlValueAccessor } from '@piying/view-vue'
import { summarize } from 'valibot'
import { inject, vModelDynamic, watch, watchEffect } from 'vue'
const { cva, value, disabled, valueChange, touchedChange } = useControlValueAccessor()
defineExpose({ cva })

const field = inject(PI_VIEW_FIELD_TOKEN)!

let message = () => {
  return field.value.form.control!.valid
    ? true
    : summarize(field.value.form.control!.errors!['valibot'])
}
function valueChagne2(value: any) {
  valueChange?.(value)
}
</script>
<template>
  <v-checkbox
    @update:modelValue="valueChagne2"
    v-model="value"
    v-bind:disabled="disabled"
    @blur="touchedChange"
    :rules="[message]"
  ></v-checkbox>
</template>

<style scoped>
@import 'vuetify/styles';
</style>
