<script setup lang="ts">
import { PI_VIEW_FIELD_TOKEN, useControlValueAccessor } from '@piying/view-vue'
import { summarize } from 'valibot'
import { inject, vModelDynamic, watch, watchEffect } from 'vue'
const { cva, value, disabled, valueChange, touchedChange } = useControlValueAccessor()
defineExpose({ cva })

const field = inject(PI_VIEW_FIELD_TOKEN)!

const message = () => {
  return field.value.form.control!.valid
    ? true
    : summarize(field.value.form.control!.errors!['valibot'])
}

</script>
<template>
  <v-checkbox
    @update:modelValue="valueChange"
    v-model="value"
    v-bind:disabled="disabled"
    @blur="touchedChange"
    :rules="[message]"
  ></v-checkbox>
</template>

<style scoped>
@import 'vuetify/styles';
</style>
