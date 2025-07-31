<script setup lang="ts">
import { useControlValueAccessor } from '@piying/view-vue'
import { vModelDynamic, watch } from 'vue'
import Checkbox from 'primevue/checkbox'

const { cva, value, disabled, valueChange, touchedChange } = useControlValueAccessor()
defineExpose({ cva })
watch(value, (value) => {
  valueChange?.(value)
})
</script>
<template>
  <Checkbox
    v-model="value"
    v-bind:disabled="disabled"
    binary
    @blur="touchedChange"
  />
</template>

<style scoped>
@import 'primeicons/primeicons.css';
</style>
