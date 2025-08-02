<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { NInput } from "naive-ui";
const { cva, cvaa: { value, disabled, valueChange, touchedChange } } = useControlValueAccessor()
defineExpose({ cva })

</script>
<template>
  <NInput
    :value="value"
    :onUpdate:value="valueChange"
    v-bind:disabled="disabled"
    @blur="touchedChange"
  >
  </NInput>
</template>

<style scoped></style>
