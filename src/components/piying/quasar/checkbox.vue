<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { QCheckbox } from 'quasar'

const { cva, cvaa: { value, disabled, valueChange, touchedChange } } = useControlValueAccessor()
defineExpose({ cva })


</script>

<template>
  <q-checkbox
    @update:modelValue="valueChange"
    v-model="value"
    v-bind:disabled="disabled ? '' : undefined"
    @blur="touchedChange"
  ></q-checkbox>
</template>

<style scoped></style>
