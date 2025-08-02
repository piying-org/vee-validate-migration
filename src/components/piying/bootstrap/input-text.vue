<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { BFormInput } from 'bootstrap-vue-next'
const { cva, cvaa: { value, disabled, valueChange, touchedChange } } = useControlValueAccessor()
defineExpose({ cva })
</script>
<template>
  <BFormInput
    v-model="value"
    @update:modelValue="valueChange"
    v-bind:disabled="disabled"
    @blur="touchedChange"
  >
  </BFormInput>
</template>

<style scoped>
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
</style>
