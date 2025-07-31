<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { NCheckbox } from 'naive-ui'
const { cva, value, disabled, valueChange, touchedChange } = useControlValueAccessor()
defineExpose({ cva })
</script>
<template>
  <NCheckbox
    :checked="value"
    :onUpdate:checked="valueChange"
    v-bind:disabled="disabled"
    @blur="touchedChange"
  />
</template>

<style scoped></style>
