<script setup lang="ts">
import { PI_VIEW_FIELD_TOKEN, signalToRef, useControlValueAccessor } from '@piying/view-vue'
import { computed } from '@vue/reactivity'
import { summarize } from 'valibot'
import { effect, inject, vModelDynamic, watch, watchEffect } from 'vue'
import { fi } from 'vuetify/locale'
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
  <v-text-field
    v-model="value"
    v-bind:disabled="disabled"
    @blur="touchedChange"
    :rules="[message]"
  ></v-text-field>
</template>

<style scoped>
@import 'vuetify/styles';
</style>
