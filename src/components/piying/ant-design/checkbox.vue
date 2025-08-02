<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { vModelDynamic, watch } from 'vue'
import { Checkbox } from 'ant-design-vue'

const { cva, cvaa: { value, disabled, valueChange, touchedChange } } = useControlValueAccessor()
defineExpose({ cva })
</script>
<template>
  <Checkbox
    :checked="value"
    :onUpdate:checked="valueChange"
    v-bind:disabled="disabled"
    binary
    @blur="touchedChange"
  />
</template>

<style scoped></style>
