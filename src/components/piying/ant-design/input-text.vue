<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { vModelDynamic, watch } from 'vue'
import { Input } from 'ant-design-vue'
const { cva, cvaa: { value, disabled, valueChange, touchedChange } } = useControlValueAccessor()
defineExpose({ cva })

</script>
<template>
  <Input
    :value="value"
    :onUpdate:value="valueChange"
    v-bind:disabled="disabled"
    @blur="touchedChange"
  >
  </Input>
</template>

<style scoped></style>
